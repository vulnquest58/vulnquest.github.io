---
layout: page
title: "NexShell v2.2 — Unified Pentest Operations Platform"
subtitle: "58 Professional Plugins · 112+ Python Files · Real-time Web Dashboard · 69,000+ Lines"
permalink: /tools/my-repo/nexshell/
category: my-repo
tags: [c2, reverse-shell, red-team, evasion, persistence, active-directory, python]
status: release
version: "2.2.0"
github_repo: "https://github.com/vulnquest58/nexshell"
language: Python 3.8+
date: 2026-07-20
---

<div class="tool-hero" style="background: linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(6,182,212,0.1) 100%); border: 1px solid rgba(168,85,247,0.3); border-radius: 16px; padding: 2rem; margin-bottom: 2rem;">
  <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1rem;">
    <span style="font-size:3rem;">🐚</span>
    <div>
      <h1 style="margin:0; font-size:1.8rem; color:var(--text-primary);">NexShell v2.2</h1>
      <p style="margin:0; color:var(--accent-secondary); font-family: var(--font-mono); font-size:0.9rem;">Unified Pentest Operations Platform · 58 Professional Plugins · stdlib zero-deps</p>
    </div>
  </div>
  <p style="margin:0; color:var(--text-secondary); line-height:1.7;">
    A professional-grade <strong>Unified Pentest Operations Platform</strong> managing sessions, assets, findings, evidence, transport channels, operation scope, credential inventory, timelines, real-time web dashboards, and a <strong>58-plugin attack suite</strong> covering modern 2025/2026 attack vectors — all from a single REPL interface with zero external dependencies.
  </p>
  <div style="display:flex; gap:0.75rem; margin-top:1.25rem; flex-wrap:wrap;">
    <a href="https://github.com/vulnquest58/nexshell" target="_blank" class="btn btn-primary" style="text-decoration:none;"><i class="fab fa-github"></i> GitHub Repository</a>
    <span class="tag" style="background:rgba(168,85,247,0.2); color:#a78bfa; border:1px solid rgba(168,85,247,0.4); padding:6px 12px; border-radius:6px; font-size:0.8rem; font-weight:600;">v2.2.0 Release</span>
    <span class="tag" style="background:rgba(15,160,70,0.15); color:#4ade80; border:1px solid rgba(15,160,70,0.3); padding:6px 12px; border-radius:6px; font-size:0.8rem;">112+ Source Files</span>
    <span class="tag" style="background:rgba(59,130,246,0.15); color:#93c5fd; border:1px solid rgba(59,130,246,0.3); padding:6px 12px; border-radius:6px; font-size:0.8rem;">69,000+ Lines of Code</span>
  </div>
</div>

---

## Overview

**NexShell v2.2** is a complete evolution beyond standard reverse shell handlers. It combines session management, host asset inventory, vulnerability findings, chain of custody evidence collection, transport channels (TCP, TLS, HTTP, WebSocket, DoH), engagement timelines, and an interactive Metasploit-style REPL with a real-time web dashboard.

### Real Platform Statistics (v2.2)

| Metric | Value |
|--------|-------|
| **Python Source Files** | `112+` modular files |
| **Lines of Code** | `69,000+` lines |
| **CLI Commands** | `58` built-in commands |
| **Loaded Plugins** | `58` auto-discovered plugins |
| **MITRE ATT&CK Mapped** | `30+` techniques |
| **External Dependencies** | `0` (Standard Library only) |
| **Persistence** | SQLite engine (`NexDB`) |
| **Dashboard** | Real-Time WebSocket Web UI |

---

## Key Features & Architecture

```
nexshell/
├── nexshell.py              # Main REPL interface (58 CLI commands)
├── core/                    # Kernel: EventBus, Plugin registry, Rule Engine, Workflows
├── db/                      # SQLite persistence (NexDB schema v2)
├── modules/                 # Transport layer (TCP/TLS/HTTP/WebSocket/DoH)
├── web/                     # Real-time WebSocket + REST Web Dashboard (Port :8888)
├── inventory/               # Asset management (Hosts, Services, Credential Store)
├── operations/              # Engagement workspace (Scope manager, Timeline, Checklist)
├── plugins/                 # 58 auto-discovered plugins (Waves 1, 2 & 3)
└── tools/                   # Pre-bundled binaries (Linux & Windows tools)
```

---

## 58 Professional Plugins Suite

NexShell includes **58 professional-grade plugins** organized into three execution waves:

### Wave 1 — Core Recon & Post-Exploitation
- **`auto-enum-linux`**: Full Linux post-exploitation (Sudo CVE-2023-22809, PwnKit, eBPF, SELinux).
- **`auto-enum-windows`**: Windows enumeration (Entra ID/PRT tokens, Defender exclusions, LAPS, WSUS MitM).
- **`privesc-scanner`**: GTFOBins SUID/SGID audit & kernel exploit suggester (CVE-2025-32462, CVE-2026-3888).
- **`cred-hunter`**: Multi-source credential hunter (SaaS tokens, AWS/GCP/Azure keys, .env, browser DBs).
- **`network-scout`**: Subnet discovery, banner grabbing, and K8s/DevOps port identification.
- **`persistence-check`**: Systemd, cron, Registry Run keys, WMI subscriptions, and udev rule auditing.

### Wave 2 — Advanced Attack Modules
- **`cloud-recon`**: AWS IMDSv1/v2, GCP ADC, Azure Managed Identity, and Kubernetes RBAC checks.
- **`ad-attack`**: Kerberoasting, AS-REP Roasting, AD CS ESC1-ESC11 templates, and Shadow Credentials.
- **`container-escape`**: Docker/runc escape checks (CVE-2024-21626 Leaky Vessels, runc exec overwrite).
- **`lateral-mover`**: Automated lateral movement path analysis across SMB, WinRM, WMI, and SSH.
- **`amsi-bypass` & `etw-patcher`**: In-memory security control bypass modules.

### Wave 3 — Post-Exploitation Engine
- **`smart-tty-upgrade`**: 7-stage interactive TTY shell upgrade engine.
- **`file-transfer-engine`**: 12-method fallback file transfer (certutil, bitsadmin, curl, wget, etc.).
- **`persistence-engine`**: 16-mechanism automated persistence installer.
- **`reverse-shell-gen`**: 20+ payload generator with AMSI bypass wrappers & Base64 obfuscation.

---

## Real-Time Web Dashboard

The web dashboard is served at `http://localhost:8888` directly from the standard library without external frameworks:

- **Live Session Telemetry**: Real-time status of active shells and transport channels.
- **Host & Service Graph**: Interactive visualization of discovered assets and port maps.
- **MITRE ATT&CK Heatmap**: Auto-populated heatmap of observed techniques during the operation.
- **Loot & Evidence Inventory**: Centralized view of extracted hashes, files, and credentials.

---

## Installation & Execution

```bash
# Clone the repository
git clone https://github.com/vulnquest58/nexshell.git
cd nexshell

# Launch interactive REPL
python nexshell.py
```

```text
(NexShell)> help               # List all 58 commands
(NexShell)> web start          # Launch Web Dashboard at http://localhost:8888
(NexShell)> plugins list       # List all 58 loaded plugins
(NexShell)> health             # Run system health checks
```
