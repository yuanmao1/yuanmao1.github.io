// Reveal-on-scroll: adds .revealed to .reveal / .reveal-group elements entering the viewport.
const els = document.querySelectorAll<HTMLElement>('.reveal, .reveal-group');

if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('revealed'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => io.observe(el));
}
