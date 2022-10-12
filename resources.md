Crypto
https://github.com/rugpullindex/awesome-ethereum-rollups 

React
JSX Markdown: https://beta.reactjs.org/learn/writing-markup-with-jsx



What's a DOM
- The HTML + Javascript renders content

Declerative vs Imperative
- Imperative: How to do something, e.g. go to the store and buy bread, etc
- Declarative: What to do, e.g. Make a sandwich

React
- react core library
- reactDOM provides DOM methods
- Bringing react in, add both to the project
`https://unpkg.com/react@17/umd/react.development.js"`
`https://unpkg.com/react-dom@17/umd/react-dom.development.js`
- Also add Babel to compile JSX to JS
`https://unpkg.com/@babel/standalone/babel.min.js`

Difference
HTML + JavaScript (Imperative)

```const header = document.createElement('h1')
const headerText = document.createTextNode('Hello World');
header.appendChild(headerText)```

React + JSX (Declerative)
- add script type = text/jsx
```const header = document.getElementById('header')
ReactDOM.render(<h1>Hello, World</h1>, header)```

Differences
- React uses JSX (not JS)
- Babel compiles JSX to JS
- React is declerative

# JS
- functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
- arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
- classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
- objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
- arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
- Ternary operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
- ES Modules and import / export: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

# React
- Components
- - like building blocks, combined together are the structure to a website
- Props
- State

# React Hooks
## rendering 
<!-- render whatevers on the left into the right -->
`<div id="app"></div>`
`ReactDOM.render(<Header />, app);`