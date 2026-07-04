---
layout: page
title: Hack The Box
subtitle: Seasonal challenges & classic machines writeup portal
permalink: /ctf/platforms/hackthebox/
platform: HackTheBox
---

<div class="platform-hero htb-hero">
  <div class="plat-hero-icon">⬡</div>
  <div class="plat-hero-text">
    <h2>Hack The Box</h2>
    <p>Standalone machines, Active Directory ProLabs, Sherlocks (DFIR), and competitive seasonal challenges.</p>
    <div class="plat-hero-badges">
      <span class="badge badge-success">Rank: Pro Hacker</span>
      <span class="badge badge-info">100+ Machines Owned</span>
      <span class="badge badge-warning">25+ Challenges</span>
    </div>
  </div>
</div>

<div class="machine-filter-bar">
  <button class="mf-btn active" data-filter="all">All</button>
  <button class="mf-btn" data-filter="linux">🐧 Linux</button>
  <button class="mf-btn" data-filter="windows">🪟 Windows</button>
  <button class="mf-btn" data-filter="active-directory">🏢 Active Directory</button>
  <button class="mf-btn" data-filter="easy">Easy</button>
  <button class="mf-btn" data-filter="medium">Medium</button>
  <button class="mf-btn" data-filter="hard">Hard</button>
  <button class="mf-btn" data-filter="insane">Insane</button>
</div>

---

## 🏆 HTB Seasons (Season 8 → Season 11)

<div class="season-block" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: var(--spacing-lg); margin-bottom: var(--spacing-lg);">
  <div class="season-header" style="display: flex; align-items: center; gap: var(--spacing-md); margin-bottom: var(--spacing-md); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: var(--spacing-sm);">
    <img src="{{ '/assets/images/seasons/season-11.png' | relative_url }}" alt="Season 11" onerror="this.src='{{ '/assets/images/logo.png' | relative_url }}'; this.style.width='60px'; this.style.height='60px';" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border-color);" />
    <div>
      <h3 style="margin: 0; color: var(--text-primary); font-size: 1.3rem;">HTB Season 11</h3>
      <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">May – Aug 2026</p>
    </div>
  </div>
  <div class="machines-list" style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-sm);">
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/bedside.png' | relative_url }}" alt="Bedside" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Bedside</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/bedside/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/checkpoint.png' | relative_url }}" alt="Checkpoint" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Checkpoint</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/checkpoint/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/cohort.png' | relative_url }}" alt="Cohort" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Cohort</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/cohort/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/connected.png' | relative_url }}" alt="Connected" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Connected</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/connected/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/danglingtree.png' | relative_url }}" alt="DanglingTree" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">DanglingTree</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/danglingtree/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/darkzeroreturns.png' | relative_url }}" alt="DarkZeroReturns" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">DarkZeroReturns</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/darkzeroreturns/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/devhub.png' | relative_url }}" alt="DevHub" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">DevHub</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/devhub/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/enigma.png' | relative_url }}" alt="Enigma" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Enigma</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/enigma/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/makesense.png' | relative_url }}" alt="MakeSense" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">MakeSense</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/makesense/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/nimbus.png' | relative_url }}" alt="Nimbus" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Nimbus</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/nimbus/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/paperwork.png' | relative_url }}" alt="Paperwork" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Paperwork</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/paperwork/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/reactor.png' | relative_url }}" alt="Reactor" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Reactor</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 11 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/reactor/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
  </div>
</div>

<div class="season-block" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: var(--spacing-lg); margin-bottom: var(--spacing-lg);">
  <div class="season-header" style="display: flex; align-items: center; gap: var(--spacing-md); margin-bottom: var(--spacing-md); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: var(--spacing-sm);">
    <img src="{{ '/assets/images/seasons/season-10.png' | relative_url }}" alt="Season 10" onerror="this.src='{{ '/assets/images/logo.png' | relative_url }}'; this.style.width='60px'; this.style.height='60px';" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border-color);" />
    <div>
      <h3 style="margin: 0; color: var(--text-primary); font-size: 1.3rem;">HTB Season 10</h3>
      <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Jan – Apr 2026</p>
    </div>
  </div>
  <div class="machines-list" style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-sm);">
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/cctv.png' | relative_url }}" alt="CCTV" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">CCTV</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/cctv/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/devarea.png' | relative_url }}" alt="DevArea" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">DevArea</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/devarea/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/facts.png' | relative_url }}" alt="Facts" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Facts</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/facts/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/garfield.png' | relative_url }}" alt="Garfield" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Garfield</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/garfield/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/interpreter.png' | relative_url }}" alt="Interpreter" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Interpreter</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/interpreter/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/kobold.png' | relative_url }}" alt="Kobold" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Kobold</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/kobold/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/logging.png' | relative_url }}" alt="Logging" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Logging</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/logging/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="insane">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/pingpong.png' | relative_url }}" alt="PingPong" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">PingPong</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff insane">Insane</span>
        <a href="{{ '/ctf/writeups/hackthebox/pingpong/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/pirate.png' | relative_url }}" alt="Pirate" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Pirate</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/pirate/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/pterodactyl.png' | relative_url }}" alt="Pterodactyl" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Pterodactyl</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/pterodactyl/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/silentium.png' | relative_url }}" alt="Silentium" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Silentium</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/silentium/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/variatype.png' | relative_url }}" alt="VariaType" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">VariaType</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/variatype/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/wingdata.png' | relative_url }}" alt="WingData" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">WingData</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 10 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/wingdata/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
  </div>
</div>

<div class="season-block" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: var(--spacing-lg); margin-bottom: var(--spacing-lg);">
  <div class="season-header" style="display: flex; align-items: center; gap: var(--spacing-md); margin-bottom: var(--spacing-md); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: var(--spacing-sm);">
    <img src="{{ '/assets/images/seasons/season-09.png' | relative_url }}" alt="Season 09" onerror="this.src='{{ '/assets/images/logo.png' | relative_url }}'; this.style.width='60px'; this.style.height='60px';" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border-color);" />
    <div>
      <h3 style="margin: 0; color: var(--text-primary); font-size: 1.3rem;">HTB Season 9</h3>
      <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">Sep – Dec 2025</p>
    </div>
  </div>
  <div class="machines-list" style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-sm);">
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/conversor.png' | relative_url }}" alt="Conversor" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Conversor</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/conversor/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/darkzero.png' | relative_url }}" alt="DarkZero" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">DarkZero</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/darkzero/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/eighteen.png' | relative_url }}" alt="Eighteen" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Eighteen</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/eighteen/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="insane">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/eloquia.png' | relative_url }}" alt="Eloquia" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Eloquia</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff insane">Insane</span>
        <a href="{{ '/ctf/writeups/hackthebox/eloquia/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/expressway.png' | relative_url }}" alt="Expressway" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Expressway</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/expressway/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/fries.png' | relative_url }}" alt="Fries" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Fries</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/fries/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/gavel.png' | relative_url }}" alt="Gavel" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Gavel</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/gavel/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/giveback.png' | relative_url }}" alt="Giveback" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Giveback</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/giveback/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="insane">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/hercules.png' | relative_url }}" alt="Hercules" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Hercules</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff insane">Insane</span>
        <a href="{{ '/ctf/writeups/hackthebox/hercules/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/imagery.png' | relative_url }}" alt="Imagery" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Imagery</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/imagery/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/monitorsfour.png' | relative_url }}" alt="MonitorsFour" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">MonitorsFour</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/monitorsfour/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/nanocorp.png' | relative_url }}" alt="NanoCorp" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">NanoCorp</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/nanocorp/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/signed.png' | relative_url }}" alt="Signed" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Signed</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 9 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/signed/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
  </div>
</div>

<div class="season-block" style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: var(--spacing-lg); margin-bottom: var(--spacing-lg);">
  <div class="season-header" style="display: flex; align-items: center; gap: var(--spacing-md); margin-bottom: var(--spacing-md); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: var(--spacing-sm);">
    <img src="{{ '/assets/images/seasons/season-08.png' | relative_url }}" alt="Season 08" onerror="this.src='{{ '/assets/images/logo.png' | relative_url }}'; this.style.width='60px'; this.style.height='60px';" style="width: 80px; height: 80px; border-radius: 8px; object-fit: cover; border: 1px solid var(--border-color);" />
    <div>
      <h3 style="margin: 0; color: var(--text-primary); font-size: 1.3rem;">HTB Season 8</h3>
      <p style="margin: 0; font-size: 0.85rem; color: var(--text-secondary);">May – Aug 2025</p>
    </div>
  </div>
  <div class="machines-list" style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-sm);">
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/artificial.png' | relative_url }}" alt="Artificial" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Artificial</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/artificial/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/certificate.png' | relative_url }}" alt="Certificate" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Certificate</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/certificate/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="insane">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/cobblestone.png' | relative_url }}" alt="Cobblestone" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Cobblestone</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff insane">Insane</span>
        <a href="{{ '/ctf/writeups/hackthebox/cobblestone/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/editor.png' | relative_url }}" alt="Editor" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Editor</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/editor/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/era.png' | relative_url }}" alt="Era" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Era</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/era/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/fluffy.png' | relative_url }}" alt="Fluffy" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Fluffy</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/fluffy/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/mirage.png' | relative_url }}" alt="Mirage" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Mirage</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/mirage/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/outbound.png' | relative_url }}" alt="Outbound" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Outbound</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/outbound/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="easy">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/puppy.png' | relative_url }}" alt="Puppy" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Puppy</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff easy">Easy</span>
        <a href="{{ '/ctf/writeups/hackthebox/puppy/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="hard">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/rustykey.png' | relative_url }}" alt="RustyKey" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">RustyKey</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff hard">Hard</span>
        <a href="{{ '/ctf/writeups/hackthebox/rustykey/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="linux" data-diff="insane">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/sorcery.png' | relative_url }}" alt="Sorcery" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os linux">🐧</span>
        <div>
          <h4 class="mc-name">Sorcery</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff insane">Insane</span>
        <a href="{{ '/ctf/writeups/hackthebox/sorcery/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/tombwatcher.png' | relative_url }}" alt="TombWatcher" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">TombWatcher</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/tombwatcher/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
    <div class="machine-card" data-os="windows" data-diff="medium">
      <div class="mc-left">
        <img src="{{ '/assets/images/machines/voleur.png' | relative_url }}" alt="Voleur" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
        <span class="mc-os windows">🪟</span>
        <div>
          <h4 class="mc-name">Voleur</h4>
          <span class="mc-ip">10.10.11.x</span>
        </div>
      </div>
      <div class="mc-mid">
        <span class="mc-tech">Hack The Box Season 8 Challenge - Walkthrough &amp; exploitation steps</span>
      </div>
      <div class="mc-right">
        <span class="mc-diff medium">Medium</span>
        <a href="{{ '/ctf/writeups/hackthebox/voleur/' | relative_url }}" class="mc-btn">Writeup →</a>
      </div>
    </div>
  </div>
</div>

---

## 🔬 Classic & Custom Machines
<div class="machines-list" style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-sm);">
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/baby.png' | relative_url }}" alt="Baby" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Baby</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/baby/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/codeparttwo.png' | relative_url }}" alt="CodePartTwo" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">CodePartTwo</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/codeparttwo/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/data.png' | relative_url }}" alt="Data" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Data</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/data/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/down.png' | relative_url }}" alt="Down" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Down</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/down/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/forgotten.png' | relative_url }}" alt="Forgotten" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Forgotten</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/forgotten/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/manage.png' | relative_url }}" alt="Manage" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Manage</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/manage/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/nexus.png' | relative_url }}" alt="Nexus" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Nexus</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/nexus/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/orion.png' | relative_url }}" alt="Orion" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Orion</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/orion/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/reset.png' | relative_url }}" alt="Reset" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Reset</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/reset/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/retro.png' | relative_url }}" alt="Retro" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Retro</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/retro/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/soulmate.png' | relative_url }}" alt="Soulmate" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Soulmate</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/soulmate/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/abducted.png' | relative_url }}" alt="Abducted" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Abducted</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/abducted/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/bamboo.png' | relative_url }}" alt="Bamboo" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Bamboo</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/bamboo/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/barrier.png' | relative_url }}" alt="Barrier" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Barrier</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/barrier/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/build.png' | relative_url }}" alt="Build" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Build</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/build/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/fireflow.png' | relative_url }}" alt="Fireflow" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Fireflow</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/fireflow/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/hacknet.png' | relative_url }}" alt="HackNet" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">HackNet</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/hacknet/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/helix.png' | relative_url }}" alt="Helix" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Helix</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/helix/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/previous.png' | relative_url }}" alt="Previous" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Previous</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/previous/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/principal.png' | relative_url }}" alt="Principal" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Principal</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/principal/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/slonik.png' | relative_url }}" alt="Slonik" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Slonik</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/slonik/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/smarthire.png' | relative_url }}" alt="SmartHire" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">SmartHire</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/smarthire/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/watcher.png' | relative_url }}" alt="Watcher" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Watcher</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/watcher/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/dump.png' | relative_url }}" alt="Dump" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Dump</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/dump/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/guardian.png' | relative_url }}" alt="Guardian" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Guardian</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/guardian/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/race.png' | relative_url }}" alt="Race" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Race</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/race/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/snapped.png' | relative_url }}" alt="Snapped" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Snapped</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/snapped/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/store.png' | relative_url }}" alt="Store" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Store</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/store/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/ten.png' | relative_url }}" alt="Ten" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Ten</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/ten/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="insane">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/brainfuck.png' | relative_url }}" alt="Brainfuck" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Brainfuck</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff insane">Insane</span>
      <a href="{{ '/ctf/writeups/hackthebox/brainfuck/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="insane">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/zero.png' | relative_url }}" alt="Zero" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Zero</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff insane">Insane</span>
      <a href="{{ '/ctf/writeups/hackthebox/zero/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/lock.png' | relative_url }}" alt="Lock" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Lock</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/lock/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/retrotwo.png' | relative_url }}" alt="RetroTwo" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">RetroTwo</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/retrotwo/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/support.png' | relative_url }}" alt="Support" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Support</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/support/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/vulnescape.png' | relative_url }}" alt="VulnEscape" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">VulnEscape</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/vulnescape/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/babytwo.png' | relative_url }}" alt="BabyTwo" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">BabyTwo</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/babytwo/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/breach.png' | relative_url }}" alt="Breach" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Breach</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/breach/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/bruno.png' | relative_url }}" alt="Bruno" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Bruno</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/bruno/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/delegate.png' | relative_url }}" alt="Delegate" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Delegate</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/delegate/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/job.png' | relative_url }}" alt="Job" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Job</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/job/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/media.png' | relative_url }}" alt="Media" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Media</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/media/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/phantom.png' | relative_url }}" alt="Phantom" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Phantom</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/phantom/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/sendai.png' | relative_url }}" alt="Sendai" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Sendai</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/sendai/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/sweep.png' | relative_url }}" alt="Sweep" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Sweep</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/sweep/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/vulncicada.png' | relative_url }}" alt="VulnCicada" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">VulnCicada</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/vulncicada/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/atlas.png' | relative_url }}" alt="Atlas" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Atlas</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/atlas/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/ghostlink.png' | relative_url }}" alt="Ghostlink" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Ghostlink</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/ghostlink/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/jobtwo.png' | relative_url }}" alt="JobTwo" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">JobTwo</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/jobtwo/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/lustroustwo.png' | relative_url }}" alt="LustrousTwo" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">LustrousTwo</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/lustroustwo/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/rainbowtwo.png' | relative_url }}" alt="RainbowTwo" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">RainbowTwo</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/rainbowtwo/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/redelegate.png' | relative_url }}" alt="Redelegate" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Redelegate</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/redelegate/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/shibuya.png' | relative_url }}" alt="Shibuya" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Shibuya</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/shibuya/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="insane">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/odyssey.png' | relative_url }}" alt="Odyssey" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Odyssey</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff insane">Insane</span>
      <a href="{{ '/ctf/writeups/hackthebox/odyssey/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="insane">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/reaper.png' | relative_url }}" alt="Reaper" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Reaper</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff insane">Insane</span>
      <a href="{{ '/ctf/writeups/hackthebox/reaper/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="insane">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/reapertwo.png' | relative_url }}" alt="ReaperTwo" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">ReaperTwo</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff insane">Insane</span>
      <a href="{{ '/ctf/writeups/hackthebox/reapertwo/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/usage.png' | relative_url }}" alt="Usage" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Usage</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/usage/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/perfection.png' | relative_url }}" alt="Perfection" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Perfection</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/perfection/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/headless.png' | relative_url }}" alt="Headless" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Headless</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/headless/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/editorial.png' | relative_url }}" alt="Editorial" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Editorial</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/editorial/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/builder.png' | relative_url }}" alt="Builder" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Builder</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/builder/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/boardlight.png' | relative_url }}" alt="BoardLight" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">BoardLight</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/boardlight/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/bizness.png' | relative_url }}" alt="Bizness" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Bizness</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/bizness/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/chemistry.png' | relative_url }}" alt="Chemistry" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Chemistry</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/chemistry/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/titanic.png' | relative_url }}" alt="Titanic" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Titanic</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/titanic/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/planning.png' | relative_url }}" alt="Planning" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Planning</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/planning/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/cap.png' | relative_url }}" alt="Cap" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Cap</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/cap/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="insane">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/whiterabbit.png' | relative_url }}" alt="WhiteRabbit" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">WhiteRabbit</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff insane">Insane</span>
      <a href="{{ '/ctf/writeups/hackthebox/whiterabbit/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/twomillion.png' | relative_url }}" alt="TwoMillion" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">TwoMillion</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/twomillion/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/strutted.png' | relative_url }}" alt="Strutted" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Strutted</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/strutted/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/browsed.png' | relative_url }}" alt="Browsed" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Browsed</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/browsed/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/airtouch.png' | relative_url }}" alt="AirTouch" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">AirTouch</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/airtouch/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/overwatch.png' | relative_url }}" alt="Overwatch" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Overwatch</h4>
        <span class="mc-ip">10.10.x.x</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/overwatch/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/knife.png' | relative_url }}" alt="Knife" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Knife</h4>
        <span class="mc-ip">10.10.10.242</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/knife/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/nibbles.png' | relative_url }}" alt="Nibbles" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Nibbles</h4>
        <span class="mc-ip">10.10.10.75</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/nibbles/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/bountyhunter.png' | relative_url }}" alt="BountyHunter" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">BountyHunter</h4>
        <span class="mc-ip">10.10.11.100</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/bountyhunter/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/horizontall.png' | relative_url }}" alt="Horizontall" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Horizontall</h4>
        <span class="mc-ip">10.10.11.105</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/horizontall/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/writer.png' | relative_url }}" alt="Writer" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Writer</h4>
        <span class="mc-ip">10.10.11.101</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/writer/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/scrambled.png' | relative_url }}" alt="Scrambled" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Scrambled</h4>
        <span class="mc-ip">10.10.11.168</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/scrambled/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/blue.png' | relative_url }}" alt="Blue" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Blue</h4>
        <span class="mc-ip">10.10.10.40</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/blue/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/legacy.png' | relative_url }}" alt="Legacy" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Legacy</h4>
        <span class="mc-ip">10.10.10.4</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/legacy/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/resolute.png' | relative_url }}" alt="Resolute" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Resolute</h4>
        <span class="mc-ip">10.10.10.169</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/resolute/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/sauna.png' | relative_url }}" alt="Sauna" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Sauna</h4>
        <span class="mc-ip">10.10.10.175</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/sauna/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="windows" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/mantis.png' | relative_url }}" alt="Mantis" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os windows">🪟</span>
      <div>
        <h4 class="mc-name">Mantis</h4>
        <span class="mc-ip">10.10.10.52</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/mantis/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="active-directory" data-diff="hard">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/active.png' | relative_url }}" alt="Active" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os active-directory">🏢</span>
      <div>
        <h4 class="mc-name">Active</h4>
        <span class="mc-ip">10.10.10.100</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff hard">Hard</span>
      <a href="{{ '/ctf/writeups/hackthebox/active/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="active-directory" data-diff="insane">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/offshore.png' | relative_url }}" alt="Offshore ProLab" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os active-directory">🏢</span>
      <div>
        <h4 class="mc-name">Offshore ProLab</h4>
        <span class="mc-ip">ProLab</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff insane">Insane</span>
      <a href="{{ '/ctf/writeups/hackthebox/offshore/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="easy">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/brutus.png' | relative_url }}" alt="Brutus" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Brutus</h4>
        <span class="mc-ip">auth.log · wtmp</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff easy">Easy</span>
      <a href="{{ '/ctf/writeups/hackthebox/brutus/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
  <div class="machine-card" data-os="linux" data-diff="medium">
    <div class="mc-left">
      <img src="{{ '/assets/images/machines/noted.png' | relative_url }}" alt="Noted" onerror="this.style.display='none';" style="width: 42px; height: 42px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
      <span class="mc-os linux">🐧</span>
      <div>
        <h4 class="mc-name">Noted</h4>
        <span class="mc-ip">Memory dump</span>
      </div>
    </div>
    <div class="mc-mid">
      <span class="mc-tech">Classic Hack The Box machine - Initial access &amp; privilege escalation analysis</span>
    </div>
    <div class="mc-right">
      <span class="mc-diff medium">Medium</span>
      <a href="{{ '/ctf/writeups/hackthebox/noted/' | relative_url }}" class="mc-btn">Writeup →</a>
    </div>
  </div>
</div>

---

<script>
// Machine filter functionality
document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.mf-btn');
  const machineCards = document.querySelectorAll('.machine-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      machineCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else if (card.dataset.os === filter || card.dataset.diff === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
</script>
