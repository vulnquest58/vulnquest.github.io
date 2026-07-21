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

<div class="tool-hero" style="background: linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(6,182,212,0.08) 100%); border: 1px solid rgba(168,85,247,0.35); border-radius: 16px; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 8px 30px rgba(0,0,0,0.5);">
  <div style="display:flex; align-items:center; gap:1.25rem; margin-bottom:1rem;">
    <span style="font-size:3.2rem; filter: drop-shadow(0 0 10px rgba(168,85,247,0.4));">🐚</span>
    <div>
      <h1 style="margin:0; font-size:2rem; color:var(--text-primary); font-weight:800;">NexShell v2.2</h1>
      <p style="margin:0.25rem 0 0 0; color:#a78bfa; font-family: var(--font-mono); font-size:0.92rem; font-weight:600;">Unified Pentest Operations Platform · 58 Professional Plugins · stdlib zero-deps</p>
    </div>
  </div>
  <p style="margin:0; color:var(--text-secondary); line-height:1.75; font-size:1rem;">
    A professional-grade <strong>Unified Pentest Operations Platform</strong> managing sessions, assets, findings, evidence, transport channels, operation scope, credential inventory, timelines, real-time web dashboards, and a <strong>58-plugin attack suite</strong> covering modern 2025/2026 attack vectors — all from a single REPL interface with zero external dependencies.
  </p>

  <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-top:1.5rem; padding-top:1.25rem; border-top:1px solid rgba(255,255,255,0.08); flex-wrap:wrap;">
    <a href="https://github.com/vulnquest58/nexshell" target="_blank" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:0.6rem; padding:10px 20px; font-weight:700; font-size:0.92rem; text-decoration:none; background:#9333ea; border-color:#c084fc; color:#ffffff; box-shadow:0 0 15px rgba(168,85,247,0.35); border-radius:8px; transition:all 0.25s ease;">
      <i class="fab fa-github" style="font-size:1.15rem;"></i> GitHub Repository
    </a>
    
    <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
      <span style="display:inline-flex; align-items:center; gap:0.45rem; background:rgba(168,85,247,0.15); color:#c084fc; border:1px solid rgba(168,85,247,0.4); padding:7px 14px; border-radius:8px; font-size:0.82rem; font-weight:700; font-family:var(--font-mono);">
        <i class="fas fa-tag"></i> v2.2.0 Release
      </span>
      <span style="display:inline-flex; align-items:center; gap:0.45rem; background:rgba(15,160,70,0.12); color:#4ade80; border:1px solid rgba(15,160,70,0.3); padding:7px 14px; border-radius:8px; font-size:0.82rem; font-weight:600; font-family:var(--font-mono);">
        <i class="fas fa-plug"></i> 58 Plugins
      </span>
      <span style="display:inline-flex; align-items:center; gap:0.45rem; background:rgba(59,130,246,0.12); color:#93c5fd; border:1px solid rgba(59,130,246,0.3); padding:7px 14px; border-radius:8px; font-size:0.82rem; font-weight:600; font-family:var(--font-mono);">
        <i class="fas fa-desktop"></i> Web Dashboard
      </span>
    </div>
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
