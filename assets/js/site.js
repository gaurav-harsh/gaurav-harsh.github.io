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
  var where = document.getElementById('where');
  if (where && 'IntersectionObserver' in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) where.textContent = e.target.dataset.label; });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('[data-label]').forEach(function (s) { so.observe(s); });
  }
})();
