---
layout: page
title: HackMyVM
subtitle: Community-built vulnerable Linux and Windows machines
permalink: /ctf/platforms/hackmyvm/
---

<div class="platform-hero hmv-hero">
  <div class="plat-hero-icon">🎮</div>
  <div class="plat-hero-text">
    <h2>HackMyVM</h2>
    <p>A community-driven hacking platform featuring custom-built machines designed to test lateral thinking and enumeration.</p>
    <div class="plat-hero-badges">
      <span class="badge badge-success">Rank: wassim58 #4</span>
      <span class="badge badge-info">3,756 Points · [GOD]</span>
      <span class="badge badge-warning">364 Machines Rooted</span>
    </div>
  </div>
</div>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:0.6rem;margin:1rem 0 1.5rem;">
  <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);border-radius:8px;padding:0.75rem;text-align:center;">
    <div style="font-size:1.6rem;font-weight:800;color:#4ade80;font-family:var(--font-mono);">364</div>
    <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">Total Roots</div>
  </div>
  <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);border-radius:8px;padding:0.75rem;text-align:center;">
    <div style="font-size:1.6rem;font-weight:800;color:#93c5fd;font-family:var(--font-mono);">363</div>
    <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">Total Users</div>
  </div>
  <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);border-radius:8px;padding:0.75rem;text-align:center;">
    <div style="font-size:1.6rem;font-weight:800;color:#f87171;font-family:var(--font-mono);">3</div>
    <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">First Roots 🩸</div>
  </div>
  <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);border-radius:8px;padding:0.75rem;text-align:center;">
    <div style="font-size:1.6rem;font-weight:800;color:#fbbf24;font-family:var(--font-mono);">1</div>
    <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">First User 🩸</div>
  </div>
  <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);border-radius:8px;padding:0.75rem;text-align:center;">
    <div style="font-size:1.6rem;font-weight:800;color:#a78bfa;font-family:var(--font-mono);">55</div>
    <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">Challenges</div>
  </div>
  <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border-color);border-radius:8px;padding:0.75rem;text-align:center;">
    <div style="font-size:1.6rem;font-weight:800;color:#4ade80;font-family:var(--font-mono);">#4</div>
    <div style="font-size:0.7rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:.05em;margin-top:2px;">Global Rank</div>
  </div>
</div>

<div class="machine-filter-bar">
  <button class="mf-btn active" data-filter="all">All</button>
  <button class="mf-btn" data-filter="linux">🐧 Linux</button>
  <button class="mf-btn" data-filter="windows">🪟 Windows</button>
  <button class="mf-btn" data-filter="easy">Easy</button>
  <button class="mf-btn" data-filter="medium">Medium</button>
  <button class="mf-btn" data-filter="hard">Hard</button>
</div>

---

## Machine List

<div class="machines-list">
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Always</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ysnmrtksk - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/always/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Alzheimer</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/alzheimer/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Animetronic</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ziyos - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/animetronic/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Apaches</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by eMVee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/apaches/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Aria</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/aria/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Arroutada</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by RiJaba1 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/arroutada/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Art</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/art/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Artig</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Analogman - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/artig/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Atom</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/atom/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Aurora</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/aurora/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Azer</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/azer/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">bah</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/bah/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">BaseME</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/baseme/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Beloved</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/beloved/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Blackhat</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/blackhat/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Bonjour</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by M0rPH3U5 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/bonjour/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Breakout</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by icex64 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/breakout/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Bruteforcelab</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by terminal - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/bruteforcelab/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">buster</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tao - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/buster/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Canto</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Pylon - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/canto/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Chromatica</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/chromatica/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Codeshield</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by eMVee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/codeshield/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">CoffeeShop</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by MrMidnight - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/coffeeshop/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Comingsoon</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by rpj7 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/comingsoon/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Connection</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by whitecr0wz - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/connection/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Convert</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/convert/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Coolpg</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cool - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/coolpg/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Crack</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/crack/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Crazymed</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/crazymed/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Crossroads</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/crossroads/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Cve1</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by InfayerTS - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/cve1/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Darkside</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by boyras200 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/darkside/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">DC01</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/dc01/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Decode</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/decode/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Deeper</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by AceOmn - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/deeper/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Dejavu</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by InfayerTS - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/dejavu/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Demons</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by b4el7d - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/demons/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Devoops</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 20206675 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/devoops/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Djinn</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by zenmpi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/djinn/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Doc</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/doc/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Doll</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/doll/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Doubletrouble</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/doubletrouble/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Driftingblues3</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/driftingblues3/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Driftingblues5</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/driftingblues5/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Driftingblues6</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/driftingblues6/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Driftingblues7</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/driftingblues7/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Driftingblues8</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/driftingblues8/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Driftingblues9</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/driftingblues9/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Drippingblues</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/drippingblues/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Economists</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by eMVee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/economists/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Ephemeral3</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Proxy - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/ephemeral3/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Faust</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/faust/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Find</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by powerful - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/find/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">First</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by WWFYMN - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/first/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Flower</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by alienum - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/flower/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Flute</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/flute/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Friendly</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by RiJaba1 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/friendly/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Friendly2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by RiJaba1 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/friendly2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Friendly3</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by RiJaba1 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/friendly3/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Fuxa</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by hel2zy_hl - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/fuxa/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Fuzzz</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 20206675 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/fuzzz/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Gameshell</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/gameshell/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Gameshell2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/gameshell2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Gameshell3</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/gameshell3/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Gameshell5</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/gameshell5/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Gift</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/gift/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Gigachad</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/gigachad/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Gigachard</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/gigachard/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Greatwall</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 20206675 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/greatwall/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hannah</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/hannah/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Helium</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/helium/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Helix</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by M0rPH3U5 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/helix/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Helpdesk</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by MrMidnight - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/helpdesk/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hidden</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by noname - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/hidden/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">hommie</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/hommie/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hostname</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/hostname/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hotel</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/hotel/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hunter</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/hunter/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Icecream</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/icecream/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Insomnia</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by alienum - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/insomnia/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Isengard</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by bit - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/isengard/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Jabita</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by RiJaba1 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/jabita/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Jan</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/jan/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Latestwasalie</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Lenam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/latestwasalie/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Lazzycorp</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by anonmahaa - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/lazzycorp/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Liar</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/liar/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Liceo</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by iHarzzi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/liceo/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Literal</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Lanz - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/literal/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">ll104567</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/ll104567/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Locker</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/locker/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Luz</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/luz/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Mathdop</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by LingMj - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/mathdop/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Medusa</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by noname - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/medusa/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Meltdown</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by kaada - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/meltdown/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Method</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/method/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Motto</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Yliken - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/motto/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Nebula</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Kretinga - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/nebula/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Nessus</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/nessus/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Newbee</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by hyh - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/newbee/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Nexus</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ShellDredd - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/nexus/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">NightCity</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Waidroc - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/nightcity/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Noob</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/noob/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Observer</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/observer/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Oliva</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/oliva/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">OMG</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/omg/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">P4l4nc4</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by elpensador - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/p4l4nc4/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">pdf</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/pdf/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Pipy</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ruycr4ft - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/pipy/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Preload</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/preload/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Publisher</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/publisher/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Pwned</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by annlynn - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/pwned/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Quick</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by eMVee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/quick/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Quick2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by eMVee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/quick2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Quick3</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by eMVee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/quick3/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Quick4</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by eMVee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/quick4/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Quick5</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by eMVee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/quick5/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">quoted</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ysnmrtksk - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/quoted/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">React</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by LingMj - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/react/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Ripper</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/ripper/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">RoosterRun</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/roosterrun/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Runas</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ysnmrtksk - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/runas/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">SaveSanta</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by eMVee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/savesanta/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Simple</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by GatoGamer - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/simple/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Skid</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by zedd9001 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/skid/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Slackware</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by kerszi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/slackware/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Slowman</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Pylon - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/slowman/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Stars</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/stars/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Superhuman</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/superhuman/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Sysadmin</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/sysadmin/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">System</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/system/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">t800</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/t800/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Talk</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/talk/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Teacher</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by WWFYMN - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/teacher/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Thefinals</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 20206675 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/thefinals/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">TheWall</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Claor - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/thewall/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Thirteen</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/thirteen/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Todd</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ll104567 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/todd/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">tpN</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Eecho - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/tpn/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Translator</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/translator/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">TriplAdvisor</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/tripladvisor/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Tron</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by noname - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/tron/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Twelve</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/twelve/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Twisted</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/twisted/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Umz</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by LingMj - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/umz/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">University</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/university/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Up</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/up/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Uvalde</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/uvalde/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Versteckt</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/versteckt/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Victorique</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/victorique/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Vinylizer</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/vinylizer/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Visions</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/visions/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">VivifyTech</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/vivifytech/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">VMessage</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/vmessage/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Vulny</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/vulny/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">W140</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/w140/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Warez</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/warez/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Warfare</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/warfare/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Warrior</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/warrior/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Wave</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/wave/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">WebMaster</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/webmaster/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Whitedoor</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/whitedoor/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Wild</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/wild/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Winter</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/winter/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">WMessage</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/wmessage/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Ximai</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/ximai/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">XMAS</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/xmas/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Yuan111</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/yuan111/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Yuan112</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/yuan112/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Yuan113</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/yuan113/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Yuan114</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/yuan114/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Yulian</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/yulian/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Za1</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/za1/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Zday</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/zday/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Zen</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/zen/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Zero</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/zero/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Zeug</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/zeug/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Zon</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/zon/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Zurrak</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Community - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/hackmyvm/zurrak/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Adria</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/adria/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Airbind</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/airbind/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Anaximandre</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/anaximandre/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Aqua</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by h1dr0 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/aqua/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Area51</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by bit - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/area51/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Attack</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/attack/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Away</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/away/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Birdeye</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sevil - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/birdeye/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Blackhat2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/blackhat2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Bounty</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/bounty/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Boxing</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/boxing/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Broken</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/broken/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Cachalot</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by mindsflee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/cachalot/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Calc</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by kaada - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/calc/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Casino</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 0xH3rshel - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/casino/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Catland</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/catland/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Chromee</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by primary - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/chromee/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Chronos</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by alienum - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/chronos/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Clover</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 0xJin - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/clover/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Colors</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 0xH3rshel - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/colors/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Comet</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/comet/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Condor</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/condor/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Confusion</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/confusion/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Console</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/console/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Corrosion3</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Proxy - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/corrosion3/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Crossbow</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/crossbow/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">DC02</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/dc02/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">DC03</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/dc03/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Democracy</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/democracy/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Dentacare</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/dentacare/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Devguru</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by zayotic - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/devguru/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Discover</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by powerful - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/discover/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">easypwn</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by D1ngTom - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/easypwn/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Echoed</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/echoed/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Ephemeral2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Proxy - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/ephemeral2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Espo</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/espo/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Eyes</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/eyes/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Factorspace</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/factorspace/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Family</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/family/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Family2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/family2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Family3</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/family3/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Fate</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/fate/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Five</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/five/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Flossy</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/flossy/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">forbidden</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/forbidden/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Fromytoy</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by kaada - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/fromytoy/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Gameshell4</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/gameshell4/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Gitdwn</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/gitdwn/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Government</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 0xJin - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/government/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Griffin</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/griffin/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Grotesque</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/grotesque/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Grotesque2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/grotesque2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Grotesque3</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by tasiyanci - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/grotesque3/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">HackingToys</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/hackingtoys/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hero</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/hero/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Homage</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/homage/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Homelab</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 20206675 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/homelab/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Horse</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/horse/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Icarus</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/icarus/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Immortal</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by boyras200 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/immortal/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Influencer</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by d3b0o - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/influencer/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Inkplot</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/inkplot/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">JO2024</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/jo2024/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Klim</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/klim/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Krustykrab</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by hyh - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/krustykrab/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Learn2Code</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by x4v1l0k - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/learn2code/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Light</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/light/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Listen</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/listen/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Logan</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by d3b0o - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/logan/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Logan2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by d3b0o - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/logan2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Lookup</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/lookup/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Lupinone</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by icex64 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/lupinone/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Matrioshka</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by G41i130Q - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/matrioshka/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">May</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/may/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Memories</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/memories/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Messages</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by rpj7 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/messages/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">MessedUP</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by skinny - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/messedup/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Milk</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/milk/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Minimal</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 0xH3rshel - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/minimal/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Momentum</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by alienum - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/momentum/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Momentum2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by alienum - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/momentum2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Movie</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/movie/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">MS02423</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 12138 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/ms02423/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Murph</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/murph/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Narcos</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ch4rm - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/narcos/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Neobank</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by alienum - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/neobank/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Nightfall</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/nightfall/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Noport</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by akared777 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/noport/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Nowords</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/nowords/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Number</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/number/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Oldschool</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/oldschool/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Opacity</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by mindsflee - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/opacity/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Pam</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/pam/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Phantom</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 12138 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/phantom/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Pingme</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by rpj7 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/pingme/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Poppins</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/poppins/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Principle</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by kaian - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/principle/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Principle2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by kaian - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/principle2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Printer2</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/printer2/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Pycrt</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by LingMj - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/pycrt/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Pyrat</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/pyrat/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Qweasd</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by An0ma1 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/qweasd/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Realsaga</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by AnGrY - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/realsaga/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Reversteg</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by LingMj - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/reversteg/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Rubies</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ch4rm - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/rubies/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Run</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/run/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Sabulaji</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/sabulaji/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Satori</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/satori/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Sedem</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/sedem/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Shemhamphorash</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by InfayerTS - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/shemhamphorash/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Silentdev</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Conper - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/silentdev/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Smol</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/smol/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Soc1</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by SuuuuRi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/soc1/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Speed</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/speed/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Stardust</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/stardust/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Suidy</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/suidy/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Suuk</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/suuk/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Tagged</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/tagged/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Tajer</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/tajer/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Taurus</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/taurus/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Tellme</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/tellme/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Texte</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/texte/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Tornado</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by catch_me75 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/tornado/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Tranquil</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/tranquil/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Troya</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/troya/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Tryharder</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/tryharder/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Type</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff medium">Medium</span><a href="{{ '/ctf/writeups/hackmyvm/type/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Adroit</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by alienum - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/adroit/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Again</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/again/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Alive</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/alive/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Birthday</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/birthday/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">BlackWidow</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 0xJin - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/blackwidow/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Bunny</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/bunny/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Choc</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/choc/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Christmas</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/christmas/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Controller</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by nls - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/controller/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Dance</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/dance/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">DarkMatter</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/darkmatter/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="hard">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">DC04</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by josemlwdf - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/dc04/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Deba</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by nolose - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/deba/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Diophante</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/diophante/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Disguise</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by he110wor1d - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/disguise/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Eighty</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/eighty/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Emma</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/emma/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Ephemeral</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Proxy - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/ephemeral/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Fianso</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/fianso/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Galera</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Lenam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/galera/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Ginger</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/ginger/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hacked</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/hacked/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hash</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/hash/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hell</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by GatoGamer - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/hell/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hoshi</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/hoshi/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Hundred</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/hundred/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Juggling</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/juggling/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Keys</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/keys/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Kitty</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/kitty/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Leet</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/leet/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Magifi</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by x4v1l0k - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/magifi/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Metamorphose</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/metamorphose/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Moosage</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/moosage/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Multi</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/multi/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Nebula1</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/nebula1/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Omura</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/omura/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Orasi</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by alienum - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/orasi/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">OTP</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by avijneyam - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/otp/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Otte</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/otte/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Perlman</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/perlman/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Pickle</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 0xEEX75 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/pickle/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Printer</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/printer/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Quandary1</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Proxy - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/quandary1/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Random</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/random/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Registry</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by GatoGamer - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/registry/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Rick</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/rick/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Rsscross</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by Sublarge - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/rsscross/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">SingDanceRap</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by he110wor1d - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/singdancerap/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Soul</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/soul/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Stagiaire</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/stagiaire/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">SuidyRevenge</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/suidyrevenge/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Supra</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by alienum - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/supra/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Takedown</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by h1dr0 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/takedown/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">TheFool</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/thefool/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Tiny</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by cromiphi - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/tiny/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Titan</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by sml - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/titan/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Transmission</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by 20206675 - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/transmission/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">UnbakedPie</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by ch4rm - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/unbakedpie/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left"><span class="mc-os linux">🐧</span><div><h4 class="mc-name">Universe</h4><span class="mc-ip">DHCP</span></div></div>
    <div class="mc-mid"><span class="mc-tech">HackMyVM machine by c4rta - Initial foothold &amp; local privilege escalation</span></div>
    <div class="mc-right"><span class="mc-diff hard">Hard</span><a href="{{ '/ctf/writeups/hackmyvm/universe/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>
</div>

---


<script>
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.machine-filter-bar .mf-btn');
  const machineCards = document.querySelectorAll('.machine-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      machineCards.forEach(card => {
        if (filter === 'all' || card.dataset.os === filter || card.dataset.diff === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
</script>
