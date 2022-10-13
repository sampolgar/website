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

````const header = document.createElement('h1')
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

## object property vs template literals
- object property: `function(props){ console.log('props.title + " sam polgar"') }`
- template literal: `function({title}){ console.log({`${title} sam polgar`})}` 


## destructuring
Without
```
function getFullName(nameObj) {
    return `${nameObj.firstName} ${nameObj.lastName}`
}
```
With
```
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```    

# React
- Components
- - like building blocks, combined together are the structure to a website
- Props
- - like arguments to a function
<<<<<<< HEAD
- - use them to pass data from parent to child to change behaviour or look of things
- - data flows down, not up
- State
=======
- State
-- info in the interface that changes over time e.g. toggle

## Components - create a homepage with a header, inside the header have a logo, title, and navbar
```
function NavBar() { return <h1> navbar </h1> }
function Title() { return <h1> title </h1> }
function Logo() { return <h1> logo </h1> }

function Header() { return ( <div> <NavBar /> <Title /> <Logo /> </div> ) }

function HomePage() { return (<div> <Header /> </div>);}
ReactDOM.render(<HomePage />, document.getElementById('app'));
```
## Props - display a header from props. display "default title" if no props
```
function Header({myTitle}){
    return <h1>{ myTitle ? myTitle : "default title" }</h1>
}
function DisplayPage() {
    return <div> <Header myTitle = "sam title"/> </div>
}
ReactDOM.render(<DisplayPage />,document.getElementById('app'))
```
## State - display a counter
```
<div id="app"></div>
function DisplayPage(){
    function handleClick(){ setCount(count +1) }
    const [count, setCount] = React.useState(0);
    return (<div> <button onClick={handleClick}> Count: ({count})</button> </div>)
}
ReactDOM.render(<DisplayPage />, document.getElementById('app'));
```
## import export - import and export a component
-header.js
```
function Header() { return <h1> header </h1>}
export default function HomePage() { return (<div> <Header /> </div>);}

ReactDOM.render(<HomePage />, document.getElementById('app'));
```
```
-display.js
```
import Header from './header.js'
export default function DisplayPage() { return <div> <Header /> </div> }
```






# React Hooks
## rendering
<!-- render whatevers on the left into the right -->
`<div id="app"></div>`
`ReactDOM.render(<Header />, app);`

## Trnary
### before
````

function Header({title}) {
return <h1>{createTitle(title)}</h1>
}

function createTitle(title) {
if (title) {
return title;
} else {
return 'Default title';
}
}

```
### after
```

function Header({title}) {
return <h1>{title ? title : 'Default title'}</h1>
}

```



## map
`const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];`
`<ul>names.map(name => <li>{name}</li>);</ul>`
```
>>>>>>> 30313ccab4f1ae4ab03366b60d69d1e45861433c
