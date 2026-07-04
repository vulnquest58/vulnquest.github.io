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

---

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--spacing-lg); margin-top: var(--spacing-xl);">
  
  <a href="{{ '/ctf/platforms/hackthebox/seasons/' | relative_url }}" style="text-decoration: none; display: flex; flex-direction: column; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: var(--spacing-xl); transition: all var(--transition-normal); text-align: center; align-items: center; justify-content: center; min-height: 220px;" class="htb-portal-card">
    <span style="font-size: 3.5rem; margin-bottom: var(--spacing-md);">🏆</span>
    <h3 style="color: var(--text-primary); margin: 0 0 var(--spacing-xs) 0; font-size: 1.4rem;">HTB Seasons Dashboard</h3>
    <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem;">View seasonal tournament machines from Season 8 to Season 11.</p>
  </a>

  <a href="{{ '/ctf/platforms/hackthebox/machines/' | relative_url }}" style="text-decoration: none; display: flex; flex-direction: column; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--border-radius-lg); padding: var(--spacing-xl); transition: all var(--transition-normal); text-align: center; align-items: center; justify-content: center; min-height: 220px;" class="htb-portal-card">
    <span style="font-size: 3.5rem; margin-bottom: var(--spacing-md);">🖥️</span>
    <h3 style="color: var(--text-primary); margin: 0 0 var(--spacing-xs) 0; font-size: 1.4rem;">HTB Classic Machines</h3>
    <p style="color: var(--text-secondary); margin: 0; font-size: 0.9rem;">Browse the complete vertical list of standalone HTB machines.</p>
  </a>

</div>

<style>
.htb-portal-card:hover {
  transform: translateY(-5px);
  border-color: var(--text-success) !important;
  box-shadow: var(--shadow-md);
}
</style>
