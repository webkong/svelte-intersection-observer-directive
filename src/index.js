function intersection(node, options) {
  const { once = false, ...observerOptions } = options;
  let hasBeenVisible = false;
  let hasBeenDisVisible = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (once && hasBeenVisible) return;
        node.dispatchEvent(new CustomEvent('enterViewport'));
        console.log('Element has entered the viewport---');
        if (once && !hasBeenVisible) {
          hasBeenVisible = true;
          observer.unobserve(node); // 停止观察
        }
      } else {
        console.log(once, hasBeenVisible);
        // 如果是一次曝光，并且已经曝过
        node.dispatchEvent(new CustomEvent('exitViewport'));
        if (once) {
          hasBeenDisVisible = true;
        }
      }
    });
  }, observerOptions);
  observer.observe(node);
  return {
    destroy() {
      observer.unobserve(node);
    },
  };
}

export { intersection as default };
