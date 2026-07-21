---
layout: page
title: "DNSPhantom — Asynchronous DNS Reconnaissance Framework"
subtitle: "High-Speed Subdomain Enumeration, CNAME Takeover Scanner & CDN/Hosting Origin Classifier"
permalink: /tools/my-repo/dnsphantom/
category: my-repo
tags: [dns, recon, subdomain, cdn, takeover, osint, python, async]
status: release
version: "0.2.0"
github_repo: "https://github.com/vulnquest58/dnsphantom"
language: Python 3.8+
date: 2026-07-20
---

<div class="tool-hero" style="background: linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(16,185,129,0.08) 100%); border: 1px solid rgba(59,130,246,0.35); border-radius: 16px; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 8px 30px rgba(0,0,0,0.5);">
  <div style="display:flex; align-items:center; gap:1.25rem; margin-bottom:1rem;">
    <span style="font-size:3.2rem; filter: drop-shadow(0 0 10px rgba(59,130,246,0.4));">🛰️</span>
    <div>
      <h1 style="margin:0; font-size:2rem; color:var(--text-primary); font-weight:800;">DNSPhantom</h1>
      <p style="margin:0.25rem 0 0 0; color:#60a5fa; font-family: var(--font-mono); font-size:0.92rem; font-weight:600;">Async DNS Recon Engine · VulnTrace Origin Classifier · Topology Graph Engine</p>
    </div>
  </div>
  <p style="margin:0; color:var(--text-secondary); line-height:1.75; font-size:1rem;">
    A professional-grade <strong>DNS Reconnaissance & Security Auditing Framework</strong> combining asynchronous DNS resolution (`asyncio` + `dnspython`), a dynamic resolver-health feedback loop, multi-source subdomain discovery, CNAME takeover scanner with 20+ signatures, and an advanced <strong>CDN / Hosting / Origin IP Classifier</strong> ported from VulnTrace.
  </p>

  <div style="display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-top:1.5rem; padding-top:1.25rem; border-top:1px solid rgba(255,255,255,0.08); flex-wrap:wrap;">
    <a href="https://github.com/vulnquest58/dnsphantom" target="_blank" class="btn btn-primary" style="display:inline-flex; align-items:center; gap:0.6rem; padding:10px 20px; font-weight:700; font-size:0.92rem; text-decoration:none; background:#2563eb; border-color:#60a5fa; color:#ffffff; box-shadow:0 0 15px rgba(59,130,246,0.35); border-radius:8px; transition:all 0.25s ease;">
      <i class="fab fa-github" style="font-size:1.15rem;"></i> GitHub Repository
    </a>
    
    <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
      <span style="display:inline-flex; align-items:center; gap:0.45rem; background:rgba(59,130,246,0.15); color:#60a5fa; border:1px solid rgba(59,130,246,0.4); padding:7px 14px; border-radius:8px; font-size:0.82rem; font-weight:700; font-family:var(--font-mono);">
        <i class="fas fa-code-branch"></i> v0.2.0 Release
      </span>
      <span style="display:inline-flex; align-items:center; gap:0.45rem; background:rgba(16,185,129,0.12); color:#34d399; border:1px solid rgba(16,185,129,0.3); padding:7px 14px; border-radius:8px; font-size:0.82rem; font-weight:600; font-family:var(--font-mono);">
        <i class="fas fa-shield-alt"></i> Origin Classifier
      </span>
      <span style="display:inline-flex; align-items:center; gap:0.45rem; background:rgba(245,158,11,0.12); color:#fbbf24; border:1px solid rgba(245,158,11,0.3); padding:7px 14px; border-radius:8px; font-size:0.82rem; font-weight:600; font-family:var(--font-mono);">
        <i class="fas fa-chart-line"></i> HTML Dashboard
      </span>
    </div>
  </div>
</div>

---

## Overview

**DNSPhantom** maps target network perimeters efficiently without hitting performance bottlenecks. Rather than relying on simple dictionary brute-forcing, DNSPhantom integrates a 7-stage automated pipeline that correlates discovered subdomains against threat scoring matrices, network topology graphs, and active IP classification engines.

### Key Capabilities

* 🚀 **Async Concurrent Queries**: High-speed asynchronous queries managed under token-bucket rate limiters.
* 🔄 **Resolver Pool Feedback Loop**: Dynamically scores public DNS resolvers (0-100) based on latency and failure rates to auto-isolate toxic nameservers.
* 🛡️ **VulnTrace Origin IP Classifier**: Categorizes resolved subdomains into four priority levels:
  * 🟢 **Target Direct**: Directly owned infrastructure (e.g., ByteDance networks).
  * 🔵 **Hosting**: General cloud environments (AWS, GCP, Azure, DigitalOcean, Linode, Hetzner).
  * 🟡 **Potential Origin**: Direct web IPs showing no CDN proxy or hosting signature.
  * 🔴 **CDN Cache**: Active proxy nodes (Cloudflare, Akamai, Fastly, CloudFront, Imperva).
* 🎯 **Subdomain Takeover Engine**: Resolves CNAME chains against 20+ vulnerability signatures (GitHub Pages, AWS S3, Shopify, Vercel, Netlify).
* 📊 **Risk Scoring & Graph Topology**: Models network relationships (`Subdomain → IP → NS → MX → CNAME`) into exportable JSON graphs.

---

## 7-Phase Execution Architecture

```
Target ➔ Phase 1: Parallel Async Discovery (Brute-force, CT logs, AXFR)
        ➔ Phase 2: Analysis (Takeover checks & DNS History)
        ➔ Phase 3: Correlation & Deduplication Engine
        ➔ Phase 4: Threat Matrix Risk Assessment
        ➔ Phase 5: Topology Graph Construction
        ➔ Phase 6: IP Classification & Origin Detection (filter_origin)
        ➔ Phase 7: Multi-format Export (CLI, Markdown, JSON, HTML Dashboard)
```

---

## Installation & Execution

```bash
# Clone the repository
git clone https://github.com/vulnquest58/dnsphantom.git
cd dnsphantom

# Install dependencies
pip install -r requirements.txt

# Execute target scan
python main.py target.com
```

### Export Formats

By default, every scan exports detailed reports to `reports/`:
- **HTML Dashboard**: Dark-mode interactive web dashboard with network node maps and charts.
- **Markdown Report**: Executive summary detailing threat findings and recommendations.
- **JSON & Graph Files**: Relational graph node files ready for security pipeline integration.
