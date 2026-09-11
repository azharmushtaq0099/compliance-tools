/* ComplianceCalc — Shared UI Scripts */
'use strict';

/* ── Entrance animations via IntersectionObserver ── */
(function(){
  var els = document.querySelectorAll('[data-enter]');
  if(!els.length) return;
  var vh = window.innerHeight;
  /* Immediately enter elements already above fold */
  els.forEach(function(el){
    var rect = el.getBoundingClientRect();
    if(rect.top < vh - 40){el.classList.add('entered')}
  });
  /* Observer for the rest on scroll */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('entered');
        io.unobserve(e.target);
      }
    });
  },{threshold:.08,rootMargin:'0px 0px -40px 0px'});
  els.forEach(function(el){
    if(!el.classList.contains('entered')){io.observe(el)}
  });
})();

/* ── Scroll-aware nav shadow ── */
(function(){
  var nav = document.querySelector('.site-nav');
  if(!nav) return;
  function tick(){nav.classList.toggle('scrolled', window.scrollY > 48)}
  window.addEventListener('scroll', tick, {passive:true});
  tick();
})();

/* ── FAQ Accordion ── */
document.querySelectorAll('.faq-q').forEach(function(btn){
  btn.addEventListener('click',function(){
    var body = btn.nextElementSibling;
    var isOpen = btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    if(isOpen){body.classList.remove('open')}
    else{body.classList.add('open')}
  });
});

/* ── Mobile nav toggle ── */
(function(){
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if(!toggle || !menu) return;
  toggle.addEventListener('click',function(){
    var open = menu.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
