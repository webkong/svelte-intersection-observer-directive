function e(e, t) {
  const { once: n = !1, ...r } = t;
  let s = !1;
  const o = new IntersectionObserver((t) => {
    t.forEach((t) => {
      if (t.isIntersecting) {
        if (n && s) return;
        e.dispatchEvent(new CustomEvent('enterViewport')), n && ((s = !0), o.unobserve(e));
      } else e.dispatchEvent(new CustomEvent('exitViewport'));
    });
  }, r);
  return (
    o.observe(e),
    {
      destroy() {
        o.unobserve(e);
      },
    }
  );
}
export { e as default };
