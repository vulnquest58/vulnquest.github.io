---
layout: page
title: "PressVector — WordPress CVE-2026-63030 / CVE-2026-60137 Framework"
subtitle: "Pre-Auth RCE & Blind SQLi Exploitation Framework for WordPress Core"
permalink: /tools/my-repo/pressvector/
category: my-repo
tags: [wordpress, exploit, cve, rce, sqli, python, nuclei]
status: release
version: "3.0.0"
github_repo: "https://github.com/vulnquest58/PressVector"
language: Python 3.7+
date: 2026-07-20
---

<div class="tool-hero" style="background: linear-gradient(135deg, rgba(239,68,68,0.15) 0%, rgba(245,158,11,0.1) 100%); border: 1px solid rgba(239,68,68,0.3); border-radius: 16px; padding: 2rem; margin-bottom: 2rem;">
  <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
    <span style="font-size:3rem;">🧨</span>
    <div>
      <h1 style="margin:0; font-size:1.8rem; color:var(--text-primary);">PressVector</h1>
      <p style="margin:0; color:#f87171; font-family: var(--font-mono); font-size:0.9rem;">CVE-2026-63030 · Pre-Auth RCE · WordPress Core · CVSS 9.8 Critical</p>
    </div>
  </div>
  <p style="margin:0; color:var(--text-secondary); line-height:1.7;">
    A full-featured, automated exploitation framework targeting <strong>CVE-2026-63030</strong> and <strong>CVE-2026-60137</strong> — critical vulnerabilities in <strong>WordPress Core</strong> (versions 6.8.0 to 7.0.1) that chain REST Batch Route Confusion with blind SQL injection to achieve unauthenticated remote code execution.
  </p>
  <div style="display:flex; gap:0.75rem; margin-top:1.25rem; flex-wrap:wrap;">
    <a href="https://github.com/vulnquest58/PressVector" target="_blank" class="btn btn-primary" style="text-decoration:none;"><i class="fab fa-github"></i> GitHub Repository</a>
    <span class="tag" style="background:rgba(239,68,68,0.2); color:#f87171; border:1px solid rgba(239,68,68,0.4); padding:6px 12px; border-radius:6px; font-size:0.8rem; font-weight:600;">CVSS 9.8 Critical</span>
    <span class="tag" style="background:rgba(59,130,246,0.15); color:#93c5fd; border:1px solid rgba(59,130,246,0.3); padding:6px 12px; border-radius:6px; font-size:0.8rem;">Zero Dependencies</span>
    <span class="tag" style="background:rgba(168,85,247,0.15); color:#a78bfa; border:1px solid rgba(168,85,247,0.3); padding:6px 12px; border-radius:6px; font-size:0.8rem;">Docker Lab Included</span>
  </div>
</div>

---

## Overview

**PressVector** automates the multi-stage attack chain known as **wp2shell**. By combining a route confusion flaw in the `/batch/v1` REST endpoint with a time-based blind SQL injection in `author__not_in`, the framework extracts database table prefixes, forges administrator sessions via UNION-based injection, and deploys webshells without requiring any valid credentials.

### Affected WordPress Versions

| Version Range | Applicable CVEs | Impact | Vulnerability Status |
|---------------|-----------------|--------|----------------------|
| **6.8.0 – 6.8.5** | CVE-2026-60137 | Blind SQLi | ❌ Vulnerable |
| **6.9.0 – 6.9.4** | CVE-2026-63030 + CVE-2026-60137 | Pre-Auth RCE | 🔴 Vulnerable (Critical) |
| **7.0.0 – 7.0.1** | CVE-2026-63030 + CVE-2026-60137 | Pre-Auth RCE | 🔴 Vulnerable (Critical) |
| **6.8.6+ / 6.9.5+ / 7.0.2+** | None | Patched | ✅ Safe |

---

## Exploitation Chain Architecture

```
[Unauthenticated Attacker]
        │
        ▼
[1] REST Batch Route Confusion (/batch/v1)
        │  Bypasses authentication context
        ▼
[2] Blind SQLi via author__not_in
        │  Time-based binary search extraction
        ▼
[3] Extract Table Prefix & Admin User ID
        │
        ▼
[4] Forge Admin Session via UNION Injection
        │  Injects administrator privileges into wp_usermeta
        ▼
[5] Authenticate & Deploy Media Webshell
        │
        ▼
[6] Remote Code Execution (RCE) 🎯
```

---

## Framework Features & Operating Modes

PressVector includes **4 operation modes** built directly into `pressvector.py` using Python standard library:

1. 🔎 **`scan`**: Multi-threaded vulnerability scanner for large-scale target list verification.
2. ✅ **`check`**: Timing calibration module confirming blind SQLi presence on single targets.
3. 💥 **`exploit`**: Full RCE chain execution with interactive shell and automatic artifact cleanup.
4. 🔺 **`privesc`**: Post-exploitation privilege escalation module to achieve root privileges.

### Nuclei Detection Template

Includes a production-grade **Nuclei** template (`pressvector-wp2shell-detection.yaml`) for passive vulnerability scanning across enterprise networks:

```bash
nuclei -t pressvector-wp2shell-detection.yaml -l targets.txt -o results.txt
```

---

## Containerized Research Lab

PressVector includes a multi-instance Docker environment (`pressvector-lab`) running 4 vulnerable WordPress versions (6.8.5, 6.9.4, 7.0.1) alongside PHPMyAdmin and a web management dashboard on port `8085`.

```bash
# Clone and run
git clone https://github.com/vulnquest58/PressVector.git
cd PressVector
python pressvector.py check http://target:8081
```
