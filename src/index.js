// node 需要监听的dom node
// options 配置项

function intersection(node, options) {
  const { once = false, ...observerOptions } = options;
  let hasBeenVisible = false;
  let hasBeenDisVisible = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (once && hasBeenVisible) return;
        node.dispatchEvent(new CustomEvent('enterViewport'));
        if (once) {
          hasBeenVisible = true;
        }
      } else {
        if (once && hasBeenDisVisible) return;
        // 如果是一次曝光，并且已经曝过
        node.dispatchEvent(new CustomEvent('exitViewport'));
        if (once) {
          hasBeenDisVisible = true;
          observer.unobserve(node); // 停止观察
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
