# SimpleJSX

A minimalistic JavaScript library to provide basic JSX-like functionality for building web components.

## Features

- **Basic Components**: Create and render lightweight components directly to the DOM.
- **Event Binding**:
  - Bind various event handlers (e.g., `onClick`, `onKeyUp`, `onChange`) to components.
  - Automatic recognition and binding of functions prefixed with `on`.
- **Attributes and Properties**:
  - Utilize `className` for JSX compatibility, which translates to the `class` attribute in HTML.
  - Effortless addition of other properties as HTML attributes (like `id`, `type`, etc.).
- **Component Registration**: Register components for their use as custom JSX tags.
- **JSX Syntax Support**: Design components using JSX syntax, facilitated by Babel.
- **Component Separation**: Maintain a clean project structure by separating code into distinct component files.
- **Modular Approach**: The library's design supports modular expansion and easy modification.

## Getting Started

### Prerequisites

Ensure you have a basic understanding of JavaScript, HTML, and JSX.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/afifudinmtop/SimpleJSX.git
```

2. Include the library in your HTML file:

```html
<script src="./SimpleJSX.js"></script>
```

3. If you're using JSX syntax, ensure you also include Babel for transpilation:

```html
<script src="https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js"></script>
```

4. Write your JSX code within a `text/babel` script tag:

```html
<script type="text/babel">
  // Your JSX code here
</script>
```

## Usage

### Defining a Component

You can define a component using a simple function. For instance, to create a button component:

```javascript
function MyButton() {
  return (
    <button className="my-btn" onClick={() => alert("Button clicked!")}>
      Click Me!
    </button>
  );
}

SimpleJSX.define("MyButton", MyButton);
```

### Rendering a Component

After defining your component, you can render it to any container in your HTML:

```javascript
// Assuming you have a <div id="app"></div> in your HTML
const appContainer = document.getElementById("app");

SimpleJSX.render(MyButton, appContainer);
```

This will display a button inside the `app` div, and clicking the button will show an alert.

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License
