---
layout: default
title: NexShell v2 — Unified Pentest Operations Platform
description: Professional pentest operations platform with 11 plugins covering Cloud/AWS/GCP/Azure, Active Directory (AD CS/Kerberoast/Shadow Creds), Container/K8s escape (CVE-2024-21626), Lateral Movement, real-time web dashboard, and zero external dependencies.
---

<div class="tool-page">

<!-- ── Hero ───────────────────────────────────────────────────────────────── -->
<div class="tool-hero">
  <div class="tool-hero-icon">🐚</div>
  <div class="tool-hero-info">
    <h1 class="tool-title">NexShell v2</h1>
    <p class="tool-subtitle">Unified Pentest Operations Platform · 11 Professional Plugins · 2025-2026 Coverage</p>
    <div class="tool-badges">
      <span class="badge badge-purple">Python 3.8+</span>
      <span class="badge badge-lime">Zero Dependencies</span>
      <span class="badge badge-cyan">Linux · Windows · Cloud · K8s</span>
      <span class="badge badge-orange">v2.0.0</span>
      <span class="badge badge-red">11 Plugins</span>
      <span class="badge badge-green">MITRE ATT&amp;CK</span>
    </div>
    <div class="tool-links">
      <a href="https://github.com/vulnquest58/nexshell" class="btn btn-primary" target="_blank">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        GitHub
      </a>
      <a href="#installation" class="btn btn-secondary">Installation</a>
      <a href="#plugins" class="btn btn-secondary">Plugins</a>
      <a href="#platform" class="btn btn-secondary">Platform</a>
    </div>
  </div>
</div>

<!-- ── What is NexShell v2 ────────────────────────────────────────────────── -->
<section class="tool-section">
  <h2>What is NexShell v2?</h2>
  <p>
    NexShell v2 is a <strong>Unified Pentest Operations Platform</strong> — a complete evolution beyond the original reverse shell handler.
    It manages sessions, assets, findings, evidence, transport channels, operation scope, credential inventory, and real-time dashboards
    from a single dependency-free REPL interface.
  </p>
  <p>
    The v2 engine ships with <strong>11 professional-grade plugins</strong> covering modern 2025–2026 attack vectors:
    Cloud infrastructure (AWS/GCP/Azure/K8s), Active Directory (AD CS, Shadow Credentials, GMSA),
    Container/Kubernetes escape (runc CVE-2024-21626, etcd, Kubelet), and Lateral Movement assessment.
    Every finding is tagged with <strong>MITRE ATT&amp;CK</strong> techniques and includes actionable exploitation guidance.
  </p>

  <div class="info-grid">
    <div class="info-card">
      <div class="info-icon">🧩</div>
      <h3>11 Professional Plugins</h3>
      <p>Auto-discovered plugins covering Cloud, AD, Container escape, Lateral Movement, PrivEsc, Persistence, and more.</p>
    </div>
    <div class="info-card">
      <div class="info-icon">🌐</div>
      <h3>Real-Time Dashboard</h3>
      <p>WebSocket-powered dark-mode dashboard with 7 views — sessions, hosts, findings, loot, MITRE heatmap, operation center.</p>
    </div>
    <div class="info-card">
      <div class="info-icon">🏛️</div>
      <h3>AD CS &amp; Shadow Creds</h3>
      <p>ESC1-ESC11 template detection, Shadow Credentials (Whisker path), GMSA extraction, RBCD, RODC abuse — no BloodHound needed.</p>
    </div>
    <div class="info-card">
      <div class="info-icon">☁️</div>
      <h3>Cloud IMDS Theft</h3>
      <p>AWS IAM credential chaining, GCP SA token theft, Azure managed identity tokens (ARM/KeyVault/Graph), K8s RBAC — all in one plugin.</p>
    </div>
    <div class="info-card">
      <div class="info-icon">🐳</div>
      <h3>Container Escape v2.0</h3>
      <p>gVisor, Kata, Fargate, ACI, Cloud Run detection. 9 CVE checks (2019-2026). etcd, ephemeral containers, Istio Envoy API.</p>
    </div>
    <div class="info-card">
      <div class="info-icon">🗄️</div>
      <h3>SQLite Operations DB</h3>
      <p>Zero-config persistence. All sessions, findings, loot, credentials, evidence, and notes stored in <code>nexshell.db</code>.</p>
    </div>
  </div>
</section>

<!-- ── What's New in v2 ───────────────────────────────────────────────────── -->
<section class="tool-section" id="whats-new">
  <h2>What's New in v2</h2>

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>v1</th>
          <th>v2</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>SQLite persistence (sessions, loot, findings)</td><td>❌</td><td>✅</td></tr>
        <tr><td>Real-time WebSocket dashboard</td><td>❌</td><td>✅ 7 views</td></tr>
        <tr><td>HTTP tunnel + WebSocket C2 transport</td><td>❌</td><td>✅</td></tr>
        <tr><td>Professional plugin engine (11 plugins)</td><td>❌</td><td>✅</td></tr>
        <tr><td>Cloud recon (AWS/GCP/Azure/K8s)</td><td>❌</td><td>✅ T1552.005</td></tr>
        <tr><td>AD attack suite (AD CS / Shadow Creds / GMSA)</td><td>basic</td><td>✅ v2.0</td></tr>
        <tr><td>Container escape (gVisor/Kata/Fargate/9 CVEs)</td><td>basic</td><td>✅ v2.0</td></tr>
        <tr><td>Lateral movement assessment</td><td>basic</td><td>✅ PTT/SMB/WinRM/SSH</td></tr>
        <tr><td>Operation scope + timeline + checklist</td><td>❌</td><td>✅</td></tr>
        <tr><td>MITRE ATT&amp;CK mapping (30+ TTPs)</td><td>❌</td><td>✅ per finding</td></tr>
        <tr><td>Credential store with dedup + crack tracking</td><td>❌</td><td>✅</td></tr>
        <tr><td>Evidence capture (SHA256 + ZIP export)</td><td>❌</td><td>✅</td></tr>
        <tr><td>Report generation (MD / HTML / JSON)</td><td>❌</td><td>✅</td></tr>
        <tr><td>Attack graph (ASCII)</td><td>❌</td><td>✅</td></tr>
        <tr><td>OPSEC profiles (ghost / paranoid)</td><td>basic</td><td>✅ full</td></tr>
        <tr><td>Rule engine (8 auto-detection rules)</td><td>❌</td><td>✅</td></tr>
        <tr><td>EventBus (async pub/sub → dashboard push)</td><td>❌</td><td>✅</td></tr>
        <tr><td>2025-2026 CVE detection in plugins</td><td>❌</td><td>✅</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ── Installation ───────────────────────────────────────────────────────── -->
<section class="tool-section" id="installation">
  <h2>Installation</h2>

  <div class="tab-group">
    <div class="tab-header">
      <button class="tab-btn active" onclick="showTab(event,'linux-tab')">Linux / Kali</button>
      <button class="tab-btn" onclick="showTab(event,'windows-tab')">Windows</button>
      <button class="tab-btn" onclick="showTab(event,'standalone-tab')">Standalone</button>
    </div>

    <div id="linux-tab" class="tab-content active">
<div class="code-block">
<pre><code># Clone repository
git clone https://github.com/vulnquest58/nexshell
cd nexshell

# Launch immediately — zero dependencies
python3 nexshell.py

# Add alias
echo 'alias nexshell="python3 ~/tools/nexshell/nexshell.py"' >> ~/.zshrc</code></pre>
</div>
    </div>

    <div id="windows-tab" class="tab-content">
<div class="code-block">
<pre><code># PowerShell
git clone https://github.com/vulnquest58/nexshell
cd nexshell
python nexshell.py

# Permanent alias
Set-Alias nexshell "python3 C:\tools\nexshell\nexshell.py"</code></pre>
</div>
    </div>

    <div id="standalone-tab" class="tab-content">
<div class="code-block">
<pre><code># No installation needed — zero external dependencies
wget https://raw.githubusercontent.com/vulnquest58/nexshell/main/nexshell.py
python3 nexshell.py</code></pre>
</div>
    </div>
  </div>
</section>

<!-- ── Quick Start ────────────────────────────────────────────────────────── -->
<section class="tool-section" id="quickstart">
  <h2>Quick Start</h2>

<div class="code-block">
<pre><code class="language-bash"># Launch platform
python3 nexshell.py

# Start real-time dashboard → http://localhost:8888
(NexShell)> web start

# List all 11 loaded plugins
(NexShell)> plugins list

# Run a plugin against an active session
(NexShell)> plugins run cloud-recon
(NexShell)> plugins run ad-attack --adcs
(NexShell)> plugins run container-escape --k8s-only
(NexShell)> plugins run lateral-mover --subnet 10.10.10.0/24

# View critical findings from plugins
(NexShell)> finding list --severity critical

# Generate pentest report
(NexShell)> report generate --format html</code></pre>
</div>
</section>

<!-- ── Plugin Engine ──────────────────────────────────────────────────────── -->
<section class="tool-section" id="plugins">
  <h2>Professional Plugin Engine</h2>
  <p>
    NexShell v2 ships with <strong>11 professional plugins</strong> that auto-discover on startup.
    Each plugin generates findings with severity ratings, MITRE ATT&amp;CK technique IDs, and exploitation guidance —
    all pushed in real-time to the web dashboard via the EventBus.
  </p>

  <!-- Wave 1 -->
  <h3>🔵 Wave 1 — Core Plugins (v3.0)</h3>

  <div class="module-grid">
    <div class="module-card linux">
      <div class="module-os">🐧 Linux · T1082</div>
      <h4>auto-enum-linux v3.0</h4>
      <p>Modern post-exploitation enumeration. Cloud/K8s IMDS context, eBPF process tracking, SELinux/AppArmor, sudo CVE-2023-22809, PwnKit CVE-2021-4034, 2025-2026 CVEs.</p>
      <code>plugins run auto-enum-linux</code>
    </div>
    <div class="module-card windows">
      <div class="module-os">🪟 Windows · T1082</div>
      <h4>auto-enum-windows v3.0</h4>
      <p>Entra ID (dsregcmd + PRT), Defender exclusions, Windows LAPS, DPAPI blobs, GPP cpassword, AppLocker/WDAC policies, BitLocker status, WSUS-over-HTTP (MitM).</p>
      <code>plugins run auto-enum-windows</code>
    </div>
    <div class="module-card linux">
      <div class="module-os">🐧 Linux · T1548</div>
      <h4>privesc-scanner v3.0</h4>
      <p>SUID/GTFOBins mapping, writable PATH, capabilities, kernel exploit mapping. CVEs: CVE-2025-32462/32463, CVE-2026-3888 (Snapd), CVE-2024-1086 (nf_tables), CVE-2023-4911 (Looney Tunables).</p>
      <code>plugins run privesc-scanner</code>
    </div>
    <div class="module-card all">
      <div class="module-os">🌐 All Platforms · T1552</div>
      <h4>cred-hunter v3.0</h4>
      <p>IaC Terraform state files, SaaS tokens (Stripe/Twilio/SendGrid/Vercel/NPM), DB connection strings (MongoDB/Postgres/MSSQL URIs), AWS keys, GCP ADC, SSH keys, browser profiles.</p>
      <code>plugins run cred-hunter</code>
    </div>
    <div class="module-card all">
      <div class="module-os">🌐 All Platforms · T1046</div>
      <h4>network-scout v3.0</h4>
      <p>IPv4+IPv6, nmap integration with banner grab, K8s/DevOps ports (etcd 2379, Kubelet 10250, Prometheus 9090), gRPC/Istio detection, SMBv1 EternalBlue, 80+ service fingerprints.</p>
      <code>plugins run network-scout</code>
    </div>
    <div class="module-card all">
      <div class="module-os">🌐 All Platforms · T1547</div>
      <h4>persistence-check v3.0</h4>
      <p>Linux: D-Bus/Polkit/udev/logrotate/apt hooks, Python sitecustomize, cloud-init, eBPF. Windows: COM hijack, SSP/LSA, WMI subscriptions, AppInit_DLLs, WSL, IIS webshells. Azure AD app secrets.</p>
      <code>plugins run persistence-check</code>
    </div>
  </div>

  <!-- Wave 2 -->
  <h3>🔴 Wave 2 — New Critical Plugins (v1.0)</h3>

  <div class="module-grid">
    <div class="module-card cloud">
      <div class="module-os">☁️ All Platforms · T1552.005</div>
      <h4>cloud-recon v1.0</h4>
      <p>
        <strong>AWS (16):</strong> IMDSv1/v2, IAM role credential chaining, user-data secrets, ECS/Lambda credentials, SSO cache.<br>
        <strong>GCP (12):</strong> SA OAuth2 token theft, instance attributes, SSH keys in metadata, ADC files.<br>
        <strong>Azure (9):</strong> Managed identity tokens for ARM, Key Vault, Microsoft Graph, App Service MSI.<br>
        <strong>K8s (12):</strong> JWT token, RBAC can-i list, cluster-admin detection, secrets listing.<br>
        <strong>IaC (7):</strong> Terraform state, tfvars, Pulumi credentials, Ansible vault.
      </p>
      <code>plugins run cloud-recon --provider aws</code>
    </div>
    <div class="module-card windows">
      <div class="module-os">🪟 Windows · T1558</div>
      <h4>ad-attack v2.0</h4>
      <p>
        <strong>Kerberos:</strong> Kerberoasting (SPN enum), AS-REP Roasting, Unconstrained/Constrained/RBCD delegation.<br>
        <strong>AD CS (ESC1-ESC11):</strong> Vulnerable templates, SubCA, Web Enrollment, template ACLs.<br>
        <strong>Modern:</strong> Shadow Credentials (msDS-KeyCredentialLink), GMSA password extraction, RODC abuse.<br>
        <strong>Access:</strong> DCSync ACE, GenericAll/WriteDACL detection, Exchange PrivExchange path.<br>
        <strong>Infrastructure:</strong> Print Spooler (PetitPotam), DNS Admins DLL injection, Backup Operators NTDS.DIT, LAPS (Legacy + Windows), MAQ, KRBTGT age.
      </p>
      <code>plugins run ad-attack --adcs</code>
    </div>
    <div class="module-card linux">
      <div class="module-os">🐧 Linux · T1611</div>
      <h4>container-escape v2.0</h4>
      <p>
        <strong>Runtimes:</strong> Docker, Podman, containerd, LXC, gVisor, Kata, Fargate, ACI, Cloud Run, Singularity.<br>
        <strong>Caps:</strong> CapEff hex decode, CAP_SYS_ADMIN/MODULE/PTRACE, Seccomp, AppArmor, Landlock.<br>
        <strong>Escapes:</strong> Docker socket, cgroup v1 release_agent, binfmt_misc, core_pattern, /proc/1/root, block devices, host / mounted RW.<br>
        <strong>K8s:</strong> etcd (2379), Kubelet unauthenticated (10250), ephemeral containers, cluster-admin, Istio Envoy.<br>
        <strong>CVEs:</strong> runc CVE-2024-21626, Docker CVE-2024-41110, containerd CVE-2024-45310, BuildKit CVE-2024-23651-3, Ubuntu OverlayFS CVE-2023-2640/32629.
      </p>
      <code>plugins run container-escape --k8s-only</code>
    </div>
    <div class="module-card all">
      <div class="module-os">🌐 All Platforms · T1021</div>
      <h4>lateral-mover v1.0</h4>
      <p>
        <strong>Windows:</strong> Kerberos ticket cache (Pass-the-Ticket), WDigest caching (plaintext in LSASS), stored credentials (cmdkey), SMB/WMI/WinRM access, LLMNR/NBT-NS relay surface, SMB signing check.<br>
        <strong>Linux:</strong> Kerberos cache files, SSH private key reuse (known_hosts), .netrc/.pgpass, Git remote URLs.<br>
        <strong>Remote:</strong> SMB null sessions, ADMIN$/C$ access, SSH key auth test — up to 20 targets or full /24 subnet.
      </p>
      <code>plugins run lateral-mover --subnet 10.10.10.0/24</code>
    </div>
  </div>
</section>

<!-- ── CVE Coverage ────────────────────────────────────────────────────────── -->
<section class="tool-section" id="cves">
  <h2>2024–2026 CVE Coverage</h2>
  <p>Plugins automatically detect vulnerable versions and generate Critical/High findings with exploitation paths:</p>

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>CVE</th>
          <th>Affected</th>
          <th>Description</th>
          <th>Severity</th>
          <th>Plugin</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>CVE-2024-21626</td><td>runc &lt; 1.1.12</td><td>Leaky Vessels — workingDir escape from container</td><td class="sev-crit">Critical</td><td>container-escape</td></tr>
        <tr><td>CVE-2024-10220</td><td>runc &lt; 1.1.13</td><td>Container breakout via symlink</td><td class="sev-crit">Critical</td><td>container-escape</td></tr>
        <tr><td>CVE-2024-41110</td><td>Docker &lt; 27.3.1</td><td>AuthZ plugin bypass → privilege escalation</td><td class="sev-crit">Critical</td><td>container-escape</td></tr>
        <tr><td>CVE-2024-45310</td><td>containerd &lt; 1.7.22</td><td>shim API escape to host</td><td class="sev-crit">Critical</td><td>container-escape</td></tr>
        <tr><td>CVE-2024-23651</td><td>BuildKit &lt; 0.16.0</td><td>Secret leak via mount cache</td><td class="sev-high">High</td><td>container-escape</td></tr>
        <tr><td>CVE-2024-23652</td><td>BuildKit &lt; 0.16.0</td><td>Container breakout via Dockerfile</td><td class="sev-crit">Critical</td><td>container-escape</td></tr>
        <tr><td>CVE-2024-53425</td><td>Podman &lt; 5.2.2</td><td>Information leak</td><td class="sev-med">Medium</td><td>container-escape</td></tr>
        <tr><td>CVE-2023-2640 / 32629</td><td>Ubuntu OverlayFS</td><td>Local privilege escalation (AlienCrash)</td><td class="sev-crit">Critical</td><td>container-escape</td></tr>
        <tr><td>CVE-2025-32462</td><td>sudo</td><td>Heap overflow → privilege escalation</td><td class="sev-crit">Critical</td><td>privesc-scanner</td></tr>
        <tr><td>CVE-2025-32463</td><td>sudo</td><td>Privilege escalation via chroot</td><td class="sev-crit">Critical</td><td>privesc-scanner</td></tr>
        <tr><td>CVE-2026-3888</td><td>Snapd</td><td>Snapd privilege escalation</td><td class="sev-high">High</td><td>privesc-scanner</td></tr>
        <tr><td>CVE-2024-1086</td><td>Linux kernel</td><td>nf_tables use-after-free → root</td><td class="sev-crit">Critical</td><td>privesc-scanner</td></tr>
        <tr><td>CVE-2023-4911</td><td>glibc</td><td>Looney Tunables SUID LD_PRELOAD</td><td class="sev-crit">Critical</td><td>privesc-scanner</td></tr>
        <tr><td>CVE-2024-21320</td><td>Windows AD</td><td>Kerberos Relay attack</td><td class="sev-high">High</td><td>ad-attack</td></tr>
        <tr><td>CVE-2021-1675</td><td>Print Spooler</td><td>PrintNightmare — SYSTEM on DC</td><td class="sev-crit">Critical</td><td>ad-attack</td></tr>
        <tr><td>CVE-2022-26923</td><td>AD CS</td><td>Certified Pre-Owned certificate abuse</td><td class="sev-crit">Critical</td><td>ad-attack</td></tr>
        <tr><td>CVE-2019-5736</td><td>runc &lt; 1.0.0</td><td>runc exec binary overwrite</td><td class="sev-crit">Critical</td><td>container-escape</td></tr>
        <tr><td>CVE-2020-15257</td><td>containerd &lt; 1.6.0</td><td>shim API exposure</td><td class="sev-high">High</td><td>container-escape</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ── MITRE ATT&CK ───────────────────────────────────────────────────────── -->
<section class="tool-section" id="mitre">
  <h2>MITRE ATT&amp;CK Coverage</h2>
  <p>All plugin findings are automatically tagged with MITRE ATT&amp;CK Enterprise techniques:</p>

  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Plugin</th>
          <th>Primary Technique</th>
          <th>Additional Techniques</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>auto-enum-linux</td><td>T1082 — System Information Discovery</td><td>T1033, T1016, T1049, T1057</td></tr>
        <tr><td>auto-enum-windows</td><td>T1082 — System Information Discovery</td><td>T1033, T1016, T1518, T1615</td></tr>
        <tr><td>privesc-scanner</td><td>T1548 — Abuse Elevation Control Mechanism</td><td>T1068, T1055, T1574</td></tr>
        <tr><td>cred-hunter</td><td>T1552 — Unsecured Credentials</td><td>T1555, T1083, T1552.001</td></tr>
        <tr><td>network-scout</td><td>T1046 — Network Service Discovery</td><td>T1018, T1135, T1040</td></tr>
        <tr><td>persistence-check</td><td>T1547 — Boot or Logon Autostart Execution</td><td>T1053, T1543, T1546, T1505</td></tr>
        <tr><td>cloud-recon</td><td>T1552.005 — Cloud Instance Metadata API</td><td>T1078.004, T1613, T1530</td></tr>
        <tr><td>ad-attack</td><td>T1558 — Steal or Forge Kerberos Tickets</td><td>T1484, T1552.001, T1649</td></tr>
        <tr><td>container-escape</td><td>T1611 — Escape to Host</td><td>T1613, T1552.005, T1610</td></tr>
        <tr><td>lateral-mover</td><td>T1021 — Remote Services</td><td>T1550, T1558.003, T1021.004</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- ── Platform ───────────────────────────────────────────────────────────── -->
<section class="tool-section" id="platform">
  <h2>Operations Platform</h2>
  <p>Beyond plugins, NexShell v2 provides a complete operations platform with 57 CLI commands:</p>

  <!-- Transport -->
  <h3>📡 Transport Channels</h3>
  <div class="module-grid">
    <div class="module-card linux">
      <div class="module-os">HTTP Covert Channel</div>
      <h4>HTTP / HTTPS Tunnel</h4>
      <p>XOR obfuscation + base64url. Random URL paths (anti-pattern). Multi-agent. Jitter support.</p>
      <code>transport http 8080</code>
    </div>
    <div class="module-card windows">
      <div class="module-os">WebSocket C2</div>
      <h4>WebSocket / WSS</h4>
      <p>RFC 6455 full implementation. Multi-client, ping/pong keepalive. TLS support. Browser-like traffic pattern.</p>
      <code>transport ws 9001</code>
    </div>
    <div class="module-card all">
      <div class="module-os">Agent Generators</div>
      <h4>Payload Generation</h4>
      <p>Linux bash, HTTPS bash, PowerShell (.NET WebSockets), Python stdlib — all generated in-REPL.</p>
      <code>transport agent powershell 10.10.14.1 8080</code>
    </div>
  </div>

  <!-- Dashboard -->
  <h3>🖥️ Real-Time Web Dashboard</h3>
<div class="code-block">
<pre><code>(NexShell)> web start 8888
[+] Dashboard started → http://localhost:8888

# 7 interactive views:
# · Dashboard    — live stat cards, activity feed, recent findings
# · Sessions     — all active/historical sessions
# · Hosts        — asset inventory with risk scores
# · Findings     — severity-filtered (Critical/High/Medium/Low)
# · Loot         — collected loot by category/source
# · MITRE ATT&CK — observed techniques heatmap
# · Operation    — current engagement details

# Zero dependencies — pure Python stdlib HTTP + WebSocket server
# Real-time EventBus push — findings appear in &lt;1 second</code></pre>
</div>

  <!-- Operation -->
  <h3>📋 Engagement Management</h3>
<div class="code-block">
<pre><code class="language-bash"># Create new engagement
(NexShell)> operation new "Internal-Pentest-Corp"
(NexShell)> template apply internal_pentest

# Scope management
(NexShell)> scope add 192.168.1.0/24
(NexShell)> scope domain corp.local
(NexShell)> scope check 192.168.1.50      # → IN SCOPE

# Timeline events
(NexShell)> timeline add "Initial access via SQLi"
(NexShell)> timeline show

# Pentest checklist (25 items)
(NexShell)> checklist show
(NexShell)> checklist complete recon</code></pre>
</div>

  <!-- Reporting -->
  <h3>📄 Reporting &amp; Evidence</h3>
<div class="code-block">
<pre><code class="language-bash"># Evidence capture with SHA256 hash
(NexShell)> evidence capture /tmp/passwd
[+] SHA256: a4f3c... | Stored: evidence/passwd_2026-07-06_20-44.txt

# Export ZIP archive (chain of custody)
(NexShell)> evidence export

# Generate professional pentest report
(NexShell)> report generate
(NexShell)> report generate --format html
(NexShell)> report generate --format json</code></pre>
</div>

  <!-- OPSEC -->
  <h3>🕵️ OPSEC Profiles</h3>
  <div class="module-grid three-col">
    <div class="module-card linux">
      <div class="module-os">Profile: normal</div>
      <h4>Normal</h4>
      <p>Full logging, no delay. Internal assessments and CTF environments.</p>
      <code>config set normal</code>
    </div>
    <div class="module-card windows">
      <div class="module-os">Profile: ghost</div>
      <h4>Ghost</h4>
      <p>Minimal logging, 0–1s jitter. Evasion-aware penetration tests.</p>
      <code>config set ghost</code>
    </div>
    <div class="module-card all">
      <div class="module-os">Profile: paranoid</div>
      <h4>Paranoid</h4>
      <p>No logging, 1–3s jitter, in-memory only. Full APT simulation.</p>
      <code>config set paranoid</code>
    </div>
  </div>
</section>

<!-- ── Plugin Dev ─────────────────────────────────────────────────────────── -->
<section class="tool-section" id="plugin-dev">
  <h2>Plugin Development</h2>
  <p>Drop a Python file in <code>plugins/</code> — it's auto-discovered on startup. No registration needed.</p>

<div class="code-block">
<pre><code class="language-python">from core.plugin import NexPlugin

class MyPlugin(NexPlugin):
    name        = "my-plugin"
    description = "Example plugin"
    version     = "1.0"
    platform    = "linux"      # linux | windows | all
    category    = "recon"      # recon | privesc | lateral
    mitre_id    = "T1082"

    def run(self, session, args: list):
        # Run commands in active session
        out = self._exec(session, "id; hostname; whoami")

        # Save to SQLite loot database
        self.loot(out, category="recon")

        # Create finding with MITRE mapping
        if "root" in out:
            self.finding(
                title          = "Root shell obtained",
                description    = out[:500],
                severity       = "Critical",
                recommendation = "Harden sudo configuration",
                mitre_id       = self.mitre_id,
            )
            # Push to real-time dashboard via EventBus
            self.emit("finding.created", severity="critical", plugin=self.name)

        return out</code></pre>
</div>
</section>

<!-- ── Session Management ─────────────────────────────────────────────────── -->
<section class="tool-section" id="sessions">
  <h2>Session Management</h2>

<div class="code-block">
<pre><code class="language-text"># List sessions with OS, user, privilege level
(NexShell)> sessions

  ➤  10.10.11.5  ◆ ROOT  [cloud-server]
  ┌──────┬──────┬──────────┬───────┬──────────────┬────────────┐
  │  ID  │ Shell│   OS     │  User │     Tag      │  Duration  │
  ├──────┼──────┼──────────┼───────┼──────────────┼────────────┤
  │  1   │ PTY  │ Linux    │ root  │ cloud-server │  00:12:47  │
  │  2   │ Basic│ Windows  │ user  │ DC01.corp    │  00:04:22  │
  │  3   │ PTY  │ Linux    │ www   │ k8s-pod      │  00:01:05  │
  └──────┴──────┴──────────┴───────┴──────────────┴────────────┘

# Run cloud recon on session 1
(NexShell)> use 1
(NexShell)> plugins run cloud-recon

# Run AD attack on Windows session 2
(NexShell)> use 2
(NexShell)> plugins run ad-attack --adcs

# Run container escape on K8s pod (session 3)
(NexShell)> use 3
(NexShell)> plugins run container-escape --k8s-only</code></pre>
</div>
</section>

<!-- ── Pro Tips ───────────────────────────────────────────────────────────── -->
<section class="tool-section" id="tips">
  <h2>Pro Tips</h2>

  <div class="tips-grid">
    <div class="tip-card">
      <h4>☁️ Cloud Full Sweep</h4>
      <p>Run <code>plugins run cloud-recon</code> immediately on any cloud shell — detects provider, steals IAM/SA tokens, checks K8s RBAC in one command.</p>
    </div>
    <div class="tip-card">
      <h4>🏛️ AD CS Fast Path</h4>
      <p>Run <code>plugins run ad-attack --adcs</code> to enumerate ESC1-ESC11 vulnerable templates without BloodHound, SharpHound, or external tools.</p>
    </div>
    <div class="tip-card">
      <h4>🐳 Container Check</h4>
      <p>On any Linux shell, run <code>plugins run container-escape</code> — auto-detects if you're inside Docker/K8s/gVisor/Fargate and shows available escape paths.</p>
    </div>
    <div class="tip-card">
      <h4>🔑 Credential Chain</h4>
      <p>Run <code>plugins run cred-hunter</code> then <code>creds list</code> to view all discovered credentials with type detection, dedup, and severity tagging.</p>
    </div>
    <div class="tip-card">
      <h4>🌐 Dashboard First</h4>
      <p>Always start with <code>web start</code> — as you run plugins, all findings appear live in the dashboard within &lt;1 second via WebSocket push.</p>
    </div>
    <div class="tip-card">
      <h4>➡️ Subnet Sweep</h4>
      <p>Run <code>plugins run lateral-mover --subnet 10.10.10.0/24</code> to test SMB null sessions, SSH key auth, and admin share access across 254 hosts automatically.</p>
    </div>
    <div class="tip-card">
      <h4>📋 Engagement Template</h4>
      <p>Use <code>template apply red_team</code> to instantly configure paranoid OPSEC profile, full checklist, and red team objectives for the engagement.</p>
    </div>
    <div class="tip-card">
      <h4>📊 Attack Graph</h4>
      <p>After adding hosts and findings, run <code>graph</code> to render an ASCII attack graph showing relationships between compromised hosts and lateral movement paths.</p>
    </div>
  </div>
</section>

<!-- ── Stats ──────────────────────────────────────────────────────────────── -->
<section class="tool-section" id="stats">
  <h2>Platform Statistics</h2>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-number">52</div>
      <div class="stat-label">Python Files</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">11</div>
      <div class="stat-label">Professional Plugins</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">19K+</div>
      <div class="stat-label">Lines of Code</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">57</div>
      <div class="stat-label">CLI Commands</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">18</div>
      <div class="stat-label">CVEs Detected</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">0</div>
      <div class="stat-label">Dependencies</div>
    </div>
  </div>
</section>

</div>

<!-- ── Styles ──────────────────────────────────────────────────────────────── -->
<style>
.tool-page { max-width: 1100px; margin: 0 auto; padding: 2rem 1rem; font-family: 'Inter', sans-serif; }

/* Hero */
.tool-hero { display: flex; gap: 2rem; align-items: flex-start; padding: 2.5rem; background: linear-gradient(135deg, #0f0f1a, #1a0a2e); border-radius: 16px; border: 1px solid rgba(139,92,246,0.3); margin-bottom: 3rem; }
.tool-hero-icon { font-size: 4rem; }
.tool-title { font-size: 2.5rem; font-weight: 800; background: linear-gradient(90deg, #a855f7, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0 0 0.25rem; }
.tool-subtitle { color: #94a3b8; margin: 0 0 1rem; font-size: 1.05rem; }
.tool-badges { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.2rem; }
.badge { padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.78rem; font-weight: 600; }
.badge-purple { background: rgba(168,85,247,0.2);  color: #a855f7; border: 1px solid rgba(168,85,247,0.4); }
.badge-lime   { background: rgba(132,204,22,0.15); color: #84cc16; border: 1px solid rgba(132,204,22,0.4); }
.badge-cyan   { background: rgba(6,182,212,0.15);  color: #06b6d4; border: 1px solid rgba(6,182,212,0.4); }
.badge-orange { background: rgba(249,115,22,0.15); color: #f97316; border: 1px solid rgba(249,115,22,0.4); }
.badge-red    { background: rgba(239,68,68,0.15);  color: #ef4444; border: 1px solid rgba(239,68,68,0.4); }
.badge-green  { background: rgba(34,197,94,0.15);  color: #22c55e; border: 1px solid rgba(34,197,94,0.4); }
.tool-links { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.btn { padding: 0.5rem 1.25rem; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 0.9rem; display: flex; align-items: center; gap: 0.4rem; transition: all 0.2s; }
.btn-primary  { background: #7c3aed; color: #fff; border: 1px solid #7c3aed; }
.btn-primary:hover { background: #6d28d9; transform: translateY(-1px); }
.btn-secondary { background: rgba(255,255,255,0.05); color: #cbd5e1; border: 1px solid rgba(255,255,255,0.1); }
.btn-secondary:hover { background: rgba(255,255,255,0.1); }

/* Sections */
.tool-section { margin-bottom: 3rem; }
.tool-section h2 { font-size: 1.6rem; font-weight: 700; color: #e2e8f0; border-left: 3px solid #7c3aed; padding-left: 0.75rem; margin-bottom: 1.2rem; }
.tool-section h3 { font-size: 1.1rem; font-weight: 700; color: #94a3b8; margin: 1.5rem 0 0.75rem; }
.tool-section p { color: #94a3b8; line-height: 1.7; }
.tool-section a { color: #a78bfa; }

/* Info grid */
.info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1.5rem; }
.info-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 1.25rem; }
.info-icon { font-size: 2rem; margin-bottom: 0.5rem; }
.info-card h3 { color: #e2e8f0; font-size: 1rem; margin: 0 0 0.5rem; }
.info-card p { font-size: 0.88rem; color: #64748b; margin: 0; }
.info-card code { color: #84cc16; font-size: 0.82rem; }

/* Table */
.table-wrapper { overflow-x: auto; }
table { width: 100%; border-collapse: collapse; }
th { background: rgba(124,58,237,0.2); color: #a78bfa; padding: 0.75rem 1rem; text-align: left; font-size: 0.9rem; }
td { padding: 0.6rem 1rem; color: #94a3b8; font-size: 0.85rem; border-bottom: 1px solid rgba(255,255,255,0.05); }
tr:hover td { background: rgba(255,255,255,0.02); }
.sev-crit { color: #ef4444; font-weight: 700; }
.sev-high { color: #f97316; font-weight: 700; }
.sev-med  { color: #eab308; font-weight: 700; }

/* Tabs */
.tab-group { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; }
.tab-header { display: flex; border-bottom: 1px solid rgba(255,255,255,0.08); }
.tab-btn { padding: 0.75rem 1.25rem; background: none; border: none; color: #64748b; cursor: pointer; font-size: 0.9rem; font-weight: 600; transition: all 0.2s; }
.tab-btn.active, .tab-btn:hover { color: #a855f7; background: rgba(168,85,247,0.1); }
.tab-content { display: none; padding: 1rem; }
.tab-content.active { display: block; }

/* Code */
.code-block { background: #0d1117; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; overflow-x: auto; margin-bottom: 1rem; }
.code-block pre { margin: 0; padding: 1.25rem; }
.code-block code { color: #e2e8f0; font-family: 'Fira Code', 'Cascadia Code', monospace; font-size: 0.85rem; line-height: 1.6; }

/* Module grid */
.module-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 1rem; }
.module-grid.three-col { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
.module-card { background: rgba(255,255,255,0.03); border-radius: 10px; padding: 1.1rem 1.25rem; border: 1px solid; }
.module-card.linux   { border-color: rgba(132,204,22,0.25); }
.module-card.windows { border-color: rgba(6,182,212,0.25); }
.module-card.cloud   { border-color: rgba(249,115,22,0.25); }
.module-card.all     { border-color: rgba(168,85,247,0.25); }
.module-os { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.4rem; color: #64748b; }
.module-card h4 { color: #e2e8f0; font-size: 1rem; margin: 0 0 0.4rem; }
.module-card p { font-size: 0.84rem; color: #64748b; margin: 0 0 0.6rem; line-height: 1.6; }
.module-card code { background: rgba(124,58,237,0.15); color: #a78bfa; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; }

/* Tips */
.tips-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1rem; }
.tip-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 1.1rem; }
.tip-card h4 { color: #e2e8f0; font-size: 0.95rem; margin: 0 0 0.4rem; }
.tip-card p { font-size: 0.84rem; color: #64748b; margin: 0; }
.tip-card code { color: #84cc16; }

/* Stats */
.stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 1rem; margin-top: 1rem; }
.stat-card { background: linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.05)); border: 1px solid rgba(124,58,237,0.2); border-radius: 12px; padding: 1.5rem 1rem; text-align: center; }
.stat-number { font-size: 2rem; font-weight: 800; background: linear-gradient(90deg, #a855f7, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.stat-label { font-size: 0.8rem; color: #64748b; margin-top: 0.3rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }

@media (max-width: 640px) {
  .tool-hero { flex-direction: column; gap: 1rem; padding: 1.5rem; }
  .tool-title { font-size: 1.8rem; }
  .module-grid { grid-template-columns: 1fr; }
  .stats-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>

<script>
function showTab(event, tabId) {
  document.querySelectorAll('.tab-content').forEach(t => { t.style.display = 'none'; t.classList.remove('active'); });
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).style.display = 'block';
  document.getElementById(tabId).classList.add('active');
  event.currentTarget.classList.add('active');
}
</script>
