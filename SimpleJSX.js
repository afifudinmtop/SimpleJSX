const SimpleJSX = (() => {
  const components = {};

  function render(component, container) {
    const element = component();
    if (element && element.type) {
      container.innerHTML = createElement(
        element.type,
        element.props,
        ...element.children
      );
    } else {
      console.error("Invalid component format.");
    }
  }

  function define(name, componentFunction) {
    components[name] = componentFunction;
  }

  function createElement(type, props = {}, ...children) {
    if (components[type]) {
      return components[type]();
    }

    let propString = Object.keys(props)
      .map((key) => {
        if (key === "className") {
          return `class="${props[key]}"`;
        }
        return `${key}="${props[key]}"`;
      })
      .join(" ");

    return `<${type} ${propString}>${children.join("")}</${type}>`;
  }

  function bindEvents(element, props) {
    const eventProps = Object.keys(props).filter((key) => /^on[A-Z]/.test(key));
    for (const eventProp of eventProps) {
      const eventType = eventProp.slice(2).toLowerCase();
      if (typeof props[eventProp] === "function") {
        element.addEventListener(eventType, props[eventProp]);
      }
    }
  }

  // Register JSX factory function
  window.React = {
    createElement: (type, props, ...children) => {
      const elementStr = createElement(type, props, ...children);
      const div = document.createElement("div");
      div.innerHTML = elementStr;
      const element = div.firstElementChild;

      bindEvents(element, props);

      return element.outerHTML;
    },
  };

  return {
    render,
    define,
  };
})();
