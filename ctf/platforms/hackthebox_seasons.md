---
layout: page
title: HTB Seasons
subtitle: Seasonal challenges tournament writeups
permalink: /ctf/platforms/hackthebox/seasons/
platform: HackTheBox
---

<div style="margin-bottom: var(--spacing-lg);">
  <a href="{{ '/ctf/platforms/hackthebox/' | relative_url }}" class="mc-btn" style="display: inline-flex; align-items: center; gap: 8px;">← Back to Hack The Box</a>
</div>

<h2>🏆 Seasonal Tournaments</h2>
<p style="color: var(--text-secondary); margin-bottom: var(--spacing-lg);">Click on any season card below to reveal the machines of that season and access their writeups.</p>

<div class="seasons-list-container">

<div class="season-expandable-card" style="margin-bottom: var(--spacing-lg);">
  <div class="season-banner-card" onclick="toggleSeason('11')" style="cursor: pointer; position: relative; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); height: 180px; background-image: url('{{ '/assets/images/seasons/season-11.png' | relative_url }}'); background-size: cover; background-position: center; transition: all var(--transition-normal);">
    <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.3) 60%, rgba(15,23,42,0.1) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: var(--spacing-lg);">
      <h3 style="margin: 0; color: #fff; font-size: 1.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">Season 11: Season of the Punk</h3>
      <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.9rem; text-shadow: 0 1px 2px rgba(0,0,0,0.8);">May - Aug 2026</p>
    </div>
  </div>
  <div id="season-list-11" class="season-machines-drawer" style="display: none; background: var(--bg-card); border: 1px solid var(--border-color); border-top: none; border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg); padding: var(--spacing-md);">
    <div style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-xs);">
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/bedside.png' | relative_url }}" alt="Bedside" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Bedside</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/bedside/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/checkpoint.png' | relative_url }}" alt="Checkpoint" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Checkpoint</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/checkpoint/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/cohort.png' | relative_url }}" alt="Cohort" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Cohort</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/cohort/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/connected.png' | relative_url }}" alt="Connected" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Connected</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/connected/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/danglingtree.png' | relative_url }}" alt="DanglingTree" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">DanglingTree</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/danglingtree/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/darkzeroreturns.png' | relative_url }}" alt="DarkZeroReturns" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">DarkZeroReturns</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/darkzeroreturns/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/devhub.png' | relative_url }}" alt="DevHub" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">DevHub</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/devhub/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/enigma.png' | relative_url }}" alt="Enigma" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Enigma</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/enigma/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/makesense.png' | relative_url }}" alt="MakeSense" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">MakeSense</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/makesense/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/nimbus.png' | relative_url }}" alt="Nimbus" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Nimbus</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/nimbus/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/paperwork.png' | relative_url }}" alt="Paperwork" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Paperwork</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/paperwork/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/reactor.png' | relative_url }}" alt="Reactor" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Reactor</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/reactor/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="season-expandable-card" style="margin-bottom: var(--spacing-lg);">
  <div class="season-banner-card" onclick="toggleSeason('10')" style="cursor: pointer; position: relative; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); height: 180px; background-image: url('{{ '/assets/images/seasons/season-10.png' | relative_url }}'); background-size: cover; background-position: center; transition: all var(--transition-normal);">
    <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.3) 60%, rgba(15,23,42,0.1) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: var(--spacing-lg);">
      <h3 style="margin: 0; color: #fff; font-size: 1.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">Season 10: Season of the Underground</h3>
      <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.9rem; text-shadow: 0 1px 2px rgba(0,0,0,0.8);">Jan - May 2026</p>
    </div>
  </div>
  <div id="season-list-10" class="season-machines-drawer" style="display: none; background: var(--bg-card); border: 1px solid var(--border-color); border-top: none; border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg); padding: var(--spacing-md);">
    <div style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-xs);">
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/cctv.png' | relative_url }}" alt="CCTV" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">CCTV</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/cctv/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/devarea.png' | relative_url }}" alt="DevArea" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">DevArea</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/devarea/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/facts.png' | relative_url }}" alt="Facts" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Facts</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/facts/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/garfield.png' | relative_url }}" alt="Garfield" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Garfield</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/garfield/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/interpreter.png' | relative_url }}" alt="Interpreter" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Interpreter</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/interpreter/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/kobold.png' | relative_url }}" alt="Kobold" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Kobold</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/kobold/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/logging.png' | relative_url }}" alt="Logging" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Logging</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/logging/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="insane" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/pingpong.png' | relative_url }}" alt="PingPong" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">PingPong</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff insane" style="font-size: 0.7rem; padding: 1px 5px;">Insane</span>
          <a href="{{ '/ctf/writeups/hackthebox/pingpong/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/pirate.png' | relative_url }}" alt="Pirate" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Pirate</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/pirate/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/pterodactyl.png' | relative_url }}" alt="Pterodactyl" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Pterodactyl</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/pterodactyl/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/silentium.png' | relative_url }}" alt="Silentium" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Silentium</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/silentium/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/variatype.png' | relative_url }}" alt="VariaType" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">VariaType</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/variatype/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/wingdata.png' | relative_url }}" alt="WingData" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">WingData</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/wingdata/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="season-expandable-card" style="margin-bottom: var(--spacing-lg);">
  <div class="season-banner-card" onclick="toggleSeason('09')" style="cursor: pointer; position: relative; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); height: 180px; background-image: url('{{ '/assets/images/seasons/season-09.png' | relative_url }}'); background-size: cover; background-position: center; transition: all var(--transition-normal);">
    <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.3) 60%, rgba(15,23,42,0.1) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: var(--spacing-lg);">
      <h3 style="margin: 0; color: #fff; font-size: 1.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">Season 9: Season of the Gacha</h3>
      <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.9rem; text-shadow: 0 1px 2px rgba(0,0,0,0.8);">Sep - Dec 2025</p>
    </div>
  </div>
  <div id="season-list-09" class="season-machines-drawer" style="display: none; background: var(--bg-card); border: 1px solid var(--border-color); border-top: none; border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg); padding: var(--spacing-md);">
    <div style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-xs);">
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/conversor.png' | relative_url }}" alt="Conversor" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Conversor</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/conversor/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/darkzero.png' | relative_url }}" alt="DarkZero" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">DarkZero</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/darkzero/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/eighteen.png' | relative_url }}" alt="Eighteen" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Eighteen</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/eighteen/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="insane" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/eloquia.png' | relative_url }}" alt="Eloquia" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Eloquia</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff insane" style="font-size: 0.7rem; padding: 1px 5px;">Insane</span>
          <a href="{{ '/ctf/writeups/hackthebox/eloquia/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/expressway.png' | relative_url }}" alt="Expressway" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Expressway</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/expressway/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/fries.png' | relative_url }}" alt="Fries" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Fries</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/fries/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/gavel.png' | relative_url }}" alt="Gavel" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Gavel</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/gavel/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/giveback.png' | relative_url }}" alt="Giveback" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Giveback</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/giveback/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="insane" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/hercules.png' | relative_url }}" alt="Hercules" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Hercules</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff insane" style="font-size: 0.7rem; padding: 1px 5px;">Insane</span>
          <a href="{{ '/ctf/writeups/hackthebox/hercules/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/imagery.png' | relative_url }}" alt="Imagery" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Imagery</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/imagery/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/monitorsfour.png' | relative_url }}" alt="MonitorsFour" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">MonitorsFour</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/monitorsfour/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/nanocorp.png' | relative_url }}" alt="NanoCorp" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">NanoCorp</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/nanocorp/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/signed.png' | relative_url }}" alt="Signed" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Signed</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/signed/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="season-expandable-card" style="margin-bottom: var(--spacing-lg);">
  <div class="season-banner-card" onclick="toggleSeason('08')" style="cursor: pointer; position: relative; border-radius: var(--border-radius-lg); overflow: hidden; border: 1px solid var(--border-color); height: 180px; background-image: url('{{ '/assets/images/seasons/season-08.png' | relative_url }}'); background-size: cover; background-position: center; transition: all var(--transition-normal);">
    <div style="position: absolute; inset: 0; background: linear-gradient(0deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.3) 60%, rgba(15,23,42,0.1) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: var(--spacing-lg);">
      <h3 style="margin: 0; color: #fff; font-size: 1.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.8);">Season 8: Season of the Depths</h3>
      <p style="margin: 0; color: rgba(255,255,255,0.8); font-size: 0.9rem; text-shadow: 0 1px 2px rgba(0,0,0,0.8);">May - Aug 2025</p>
    </div>
  </div>
  <div id="season-list-08" class="season-machines-drawer" style="display: none; background: var(--bg-card); border: 1px solid var(--border-color); border-top: none; border-radius: 0 0 var(--border-radius-lg) var(--border-radius-lg); padding: var(--spacing-md);">
    <div style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-xs);">
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/artificial.png' | relative_url }}" alt="Artificial" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Artificial</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/artificial/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/certificate.png' | relative_url }}" alt="Certificate" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Certificate</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/certificate/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="insane" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/cobblestone.png' | relative_url }}" alt="Cobblestone" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Cobblestone</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff insane" style="font-size: 0.7rem; padding: 1px 5px;">Insane</span>
          <a href="{{ '/ctf/writeups/hackthebox/cobblestone/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/editor.png' | relative_url }}" alt="Editor" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Editor</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/editor/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/era.png' | relative_url }}" alt="Era" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Era</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/era/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/fluffy.png' | relative_url }}" alt="Fluffy" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Fluffy</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/fluffy/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/mirage.png' | relative_url }}" alt="Mirage" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Mirage</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/mirage/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/outbound.png' | relative_url }}" alt="Outbound" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Outbound</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/outbound/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="easy" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/puppy.png' | relative_url }}" alt="Puppy" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Puppy</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff easy" style="font-size: 0.7rem; padding: 1px 5px;">Easy</span>
          <a href="{{ '/ctf/writeups/hackthebox/puppy/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="hard" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/rustykey.png' | relative_url }}" alt="RustyKey" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">RustyKey</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff hard" style="font-size: 0.7rem; padding: 1px 5px;">Hard</span>
          <a href="{{ '/ctf/writeups/hackthebox/rustykey/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="linux" data-diff="insane" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/sorcery.png' | relative_url }}" alt="Sorcery" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os linux" style="font-size: 0.9rem;">🐧</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Sorcery</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff insane" style="font-size: 0.7rem; padding: 1px 5px;">Insane</span>
          <a href="{{ '/ctf/writeups/hackthebox/sorcery/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/tombwatcher.png' | relative_url }}" alt="TombWatcher" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">TombWatcher</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/tombwatcher/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
      <div class="machine-card" data-os="windows" data-diff="medium" style="margin-bottom: 8px;">
        <div class="mc-left">
          <img src="{{ '/assets/images/machines/voleur.png' | relative_url }}" alt="Voleur" onerror="this.style.display='none';" style="width: 32px; height: 32px; border-radius: var(--border-radius-sm); object-fit: cover; border: 1px solid var(--border-color); margin-right: 8px;" />
          <span class="mc-os windows" style="font-size: 0.9rem;">🪟</span>
          <div>
            <h4 class="mc-name" style="font-size: 0.9rem; margin: 0;">Voleur</h4>
            <span class="mc-ip" style="font-size: 0.7rem; color: var(--text-muted);">10.10.11.x</span>
          </div>
        </div>
        <div class="mc-right">
          <span class="mc-diff medium" style="font-size: 0.7rem; padding: 1px 5px;">Medium</span>
          <a href="{{ '/ctf/writeups/hackthebox/voleur/' | relative_url }}" class="mc-btn" style="font-size: 0.75rem; padding: 3px 8px;">Writeup →</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<style>
.season-banner-card:hover {
  transform: scale(1.01);
  border-color: var(--text-success) !important;
}
</style>

<script>
function toggleSeason(sNum) {
  const drawer = document.getElementById('season-list-' + sNum);
  const banner = drawer.previousElementSibling;
  if (drawer.style.display === 'none') {
    drawer.style.display = 'block';
    banner.style.borderRadius = 'var(--border-radius-lg) var(--border-radius-lg) 0 0';
  } else {
    drawer.style.display = 'none';
    banner.style.borderRadius = 'var(--border-radius-lg)';
  }
}
</script>
