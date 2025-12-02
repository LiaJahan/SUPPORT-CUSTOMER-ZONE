What is JSX, and why is it used?
=> JSX full from Javascript XML; that is a syntax extension for javascript that allows you to write HTML like code inside React.

What is the difference between State and Props?
=> Main difference I would say, state is changeable but props is read-only. also State belongs to Components and props are passed from parents. State is used for dynamic data and Props is to configure the component.

What is the useState hook, and how does it work?
=>useState is a React Hook that lets functional compound store and update state that is generated with an initial value.

How can you share state between components in React?
=>The rules is Parent holds state and children receive props. so move the state to the closet common parent and pass via props.

How is event handling done in React?
=>React uses camelCase event names and passes event handlers as function. 