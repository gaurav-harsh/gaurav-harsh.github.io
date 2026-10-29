(function () {
  var rv = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window)) { rv.forEach(function (e) { e.classList.add('in'); }); }
  else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    rv.forEach(function (e, i) { e.style.transitionDelay = (i % 4) * 70 + 'ms'; io.observe(e); });
  }
  var peek = document.getElementById('peek');
  if (!peek) return;
  var img = peek.querySelector('img'), txt = peek.querySelector('p'), pt = peek.querySelector('.pt');
  function show(a) {
    var li = a.parentNode;
    peek.style.top = li.offsetTop + 'px';
    txt.textContent = a.dataset.line;
    if (a.dataset.img) { img.src = a.dataset.img; img.alt = ''; img.hidden = false; pt.hidden = true; }
    else { img.hidden = true; pt.hidden = false; pt.textContent = a.dataset.big || ''; }
    peek.classList.add('on');
  }
  document.querySelectorAll('.ledger a').forEach(function (a) {
    a.addEventListener('mouseenter', function () { show(a); });
    a.addEventListener('focus', function () { show(a); });
  });
  var l = document.querySelector('.ledger');
  var first = l.querySelector('a');
  show(first);
  l.addEventListener('mouseleave', function () { show(first); });
  l.addEventListener('focusout', function (e) { if (!l.contains(e.relatedTarget)) show(first); });
})();
