---
layout: page
title: TheHackersLabs Writeups
subtitle: Standalone machines & rooms walkthrough catalog
permalink: /ctf/platforms/thehackerslabs/
---

<div class="platform-hero generic-hero">
  <div class="plat-hero-icon">🛡️</div>
  <div class="plat-hero-text">
    <h2>TheHackersLabs</h2>
    <p>Walkthrough catalog detailing exploitation pathways, footholds, and privilege escalation.</p>
    <div class="plat-hero-badges">
      <span class="badge badge-success">Active</span>
      <span class="badge badge-info">6 Labs</span>
    </div>
  </div>
</div>

<div class="machine-filter-bar">
  <button class="mf-btn active" data-filter="all">All</button>
  <button class="mf-btn" data-filter="easy">Easy</button>
  <button class="mf-btn" data-filter="medium">Medium</button>
  <button class="mf-btn" data-filter="hard">Hard</button>
</div>

---

## Machine List

<div class="machines-list">

  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Quokka</h4><span class="mc-ip">10.10.x.x</span></div></div>
    <div class="mc-mid"><span class="mc-tech">TheHackersLabs Challenge - Initial access vector & privilege escalation details</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/thehackerslabs/quokka/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>

  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Microchoft</h4><span class="mc-ip">10.10.x.x</span></div></div>
    <div class="mc-mid"><span class="mc-tech">TheHackersLabs Challenge - Initial access vector & privilege escalation details</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/thehackerslabs/microchoft/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>

  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Ensalá Papas</h4><span class="mc-ip">10.10.x.x</span></div></div>
    <div class="mc-mid"><span class="mc-tech">TheHackersLabs Challenge - Initial access vector & privilege escalation details</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/thehackerslabs/ensal-papas/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>

  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Accounting</h4><span class="mc-ip">10.10.x.x</span></div></div>
    <div class="mc-mid"><span class="mc-tech">TheHackersLabs Challenge - Initial access vector & privilege escalation details</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/thehackerslabs/accounting/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>

  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Cocido Andaluz</h4><span class="mc-ip">10.10.x.x</span></div></div>
    <div class="mc-mid"><span class="mc-tech">TheHackersLabs Challenge - Initial access vector & privilege escalation details</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/thehackerslabs/cocido-andaluz/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>

  <div class="machine-card" data-os="windows" data-diff="easy">
    <div class="mc-left"><span class="mc-os windows">🪟</span><div><h4 class="mc-name">Espeto Malagueño</h4><span class="mc-ip">10.10.x.x</span></div></div>
    <div class="mc-mid"><span class="mc-tech">TheHackersLabs Challenge - Initial access vector & privilege escalation details</span></div>
    <div class="mc-right"><span class="mc-diff easy">Easy</span><a href="{{ '/ctf/writeups/thehackerslabs/espeto-malagueo/' | relative_url }}" class="mc-btn">Writeup →</a></div>
  </div>

</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mf-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const filter = this.dataset.filter;
      document.querySelectorAll('.mf-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      document.querySelectorAll('.machine-card').forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.diff === filter) ? 'flex' : 'none';
      });
    });
  });
});
</script>
