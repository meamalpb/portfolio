    // Cursor
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    function animateCursor() {
      cursor.style.left = mx - 5 + 'px';
      cursor.style.top = my - 5 + 'px';
      rx += (mx - rx - 18) * 0.15;
      ry += (my - ry - 18) * 0.15;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', () => { ring.style.transform = 'scale(1.6)'; cursor.style.transform = 'scale(0.5)'; });
      el.addEventListener('mouseleave', () => { ring.style.transform = 'scale(1)'; cursor.style.transform = 'scale(1)'; });
    });

    // Scroll reveal
    const observer = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (i * 0.05) + 's';
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
