/* ComplianceCalc — Shared UI Scripts */
'use strict';

/* ── Entrance animations via IntersectionObserver ── */
(function(){
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('entered');
        io.unobserve(e.target);
      }
    });
  },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('[data-enter]').forEach(function(el){io.observe(el)});
})();

/* ── FAQ Accordion ── */
document.querySelectorAll('.faq-q').forEach(function(btn){
  btn.addEventListener('click',function(){
    const body = btn.nextElementSibling;
    const isOpen = btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    if(isOpen){body.classList.remove('open')}
    else{body.classList.add('open')}
  });
});

/* ── Mobile nav toggle ── */
(function(){
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  if(!toggle || !menu) return;
  toggle.addEventListener('click',function(){
    const open = menu.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
