//https://www.youtube.com/watch?v=Bwq6RHcGn8M&ab_channel=oscargws

## key things to know

- core JS, especially the Array API and when to use array vs object, and the typical JS gotchas like pass by reference
- Promises, async/await and try/catch
- React Testing Library, how to write behavioral tests, and the pitfalls of too much unit testing
- How HTML web forms work, and how to manage its state (dirty/pristine, validation, async validation...)
- useState, useEffect and useContext — and deps arrays. Bonus for knowing useMemo/useCallback and why/when to use them (hint: not that often).
- AJAX calls, middleware, how to bind them to the React rendering system and why RQ/URQL/Apollo are useful
- Typescript, including generics, proper use of Enums, and utility types like Partial, Omit and Record. Big bonus points for understanding discriminated unions and type narrowing
- Semantic HTML and WCAG compliance
- CSS, including modules and variables, and a good understanding of design systems and how to avoid CSS hell
- Contract testing

- How and when to write custom hooks (spoilers: it's pretty much always)
- How to break up components into manageable sizes, and how to isolate business logic from presentation
- Understanding global state managers like Redux, what they do, how to use RTK and when it's an appropriate fit for your problem

### code snippets

#### troubleshooting react elements

```js
export default App => {
    const e = <h1>Hello</h1>
    console.log(e)
    return (//normal react code)
}
```

result: `›{type: "h1", key: null, ref: null, props: {children: "Hello"}, _owner: FiberNode, _store: {}}`

#### inserting props into a string

```js
return (
        <div className="card">
            <img src={`../images/${props.img}`}
        </div>
)
```

### looping through Array and rendering JSX

```js
jokesData = [
  {
    setup: "I got my daughter a fridge for her birthday.",
    punchline: "I can't wait to see her face light up when she opens it.",
  },
  {
    setup: "How did the hacker escape the police?",
    punchline: "He just ransomware!",
  },
];

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return (
      <Joke setup={joke.setup} punchline={joke.punchline} isPun={joke.isPun} />
    );
  });
  return <div>{jokeElements}</div>;
}
```
