## Crypto
https://github.com/rugpullindex/awesome-ethereum-rollups

## React
- JSX Markdown: https://beta.reactjs.org/learn/writing-markup-with-jsx
- React tutorial https://reactjs.org/tutorial/tutorial.html
- Better React Tutorail https://beta.reactjs.org/learn
- JS reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview
- https://babeljs.io/docs/en/editors/

## What's a DOM
- The HTML + Javascript renders content
- React DOM has built-in functions e.g. onClick

### Declerative vs Imperative
- Imperative: How to do something, e.g. go to the store and buy bread, etc
- Declarative: What to do, e.g. Make a sandwich

# React
- react core library
- reactDOM provides DOM methods
- Bringing react in, add both to the project
  `https://unpkg.com/react@17/umd/react.development.js"`
  `https://unpkg.com/react-dom@17/umd/react-dom.development.js`
- Also add Babel to compile JSX to JS
  `https://unpkg.com/@babel/standalone/babel.min.js`

## notes
- conventional to use on[Event] and handle[Event] for props

## Difference
### HTML + JavaScript (Imperative)

``const header = document.createElement('h1')
const headerText = document.createTextNode('Hello World');
header.appendChild(headerText)``

### React + JSX (Declerative)
- add script type = text/jsx
``const header = document.getElementById('header')
ReactDOM.render(<h1>Hello, World</h1>, header) ``

### Differences
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
- Without
`` function getFullName(nameObj) {
    return `${nameObj.firstName} ${nameObj.lastName}`
}``
- With
```
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
```    

# React
- Components
- - like building blocks, combined together are the structure to a website
- Props
- - short for properties, returns hierarchy of views
- - like arguments to a function
- - use them to pass data from parent to child to change behaviour or look of things
- - data flows down, not up
- State
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
```
`const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];`
`<ul>names.map(name => <li>{name}</li>);</ul>`
```

## Classes
### board rendering i
- Board renders squares & sends props to Sqare
- Square receives value i from board as props
- square is rendered by board calling renderSquare (renderClass)
```
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

### square rendering x
- add a function to the button click
- the function written inside {}
```
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        onClick = {
          function () {
            console.log('click');
          }
        }
        {this.props.value}
      </button>
    );
  }
}
```
- better writen as an arrow function
```
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        onClick = {
          () => console.log('click')
        }
        {this.props.value}
      </button>
    );
  }
}
```

### using React state to remember who called last x or o
- add a state to the Square because square is being pressed
- create a constructor to initialize the state
- state is private to the component its called in
- all React components need super(props) in their constructor because Javascript classes call super
```
class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
    };
  }
  render() /////
}
```
use the state in the onClick function
- change this.props.value to this.state.value
- change function to set initial value to X
```
class Square extends ////////
return (
  <button className="square">
    onClick = {
      () => this.setState({value: 'X'})
    }
    {this.state.value}
  </button>
```

## send the state from the square to the board
- add the checking logic to 1 place, not in the square, in the board
- need to declare the shared stated in the parent component
- parent can pass the state down to the child as props



## 

# JS
## functions
### standard
```
function () {console.log("click"); }
```
### arrow
```
() => console.log("click")
```
### arrow with return
```
() => { return console.log("click") }
```



Current progress
https://reactjs.org/tutorial/tutorial.html#function-components