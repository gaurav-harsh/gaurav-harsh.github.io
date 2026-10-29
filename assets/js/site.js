(function () {
  var els = document.querySelectorAll('.rv, .doodle');
  function show(e) { e.classList.add('in'); }
  if (!('IntersectionObserver' in window)) { els.forEach(show); }
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { show(e.target); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (e, i) { if (e.classList.contains('rv')) e.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(e); });
  }
  var st = document.querySelector('.stats');
  if (st && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var rows = st.querySelectorAll('.slip li'), num = st.querySelector('.total-n'), busy = false;
    st.classList.add('sc');
    var tick = function () {
      busy = false;
      var r = st.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, (innerHeight * 0.9 - r.top) / (r.height * 0.7)));
      var k = Math.round(p * rows.length);
      rows.forEach(function (li, i) { li.classList.toggle('on', i < k); });
      num.textContent = Math.max(k, 1);
    };
    addEventListener('scroll', function () { if (!busy) { busy = true; requestAnimationFrame(tick); } }, { passive: true });
    tick();
  }
  var where = document.getElementById('where');
  if (where && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) where.textContent = e.target.dataset.label; });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('[data-label]').forEach(function (s) { so.observe(s); });
  }
})();
