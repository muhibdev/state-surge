# Stateful

Stateful is a lightweight JavaScript library for managing state and rendering views in web applications.

## Installation

You can install Stateful via npm:

```bash
npm install stateful-js
```

Alternatively, you can include the library in your project via a script tag:

```bash
<script src="https://unpkg.com/stateful-js"></script>
```

## Usage

### Initializing State

To create a new instance of StateFull, simply pass in a query selector or a DOM element:

```javascript
const app = new Stateful("#app");
```

### Setting State

To set the state of the application, call the setState method and pass in an object containing the new state:

```javascript
state.setState({
  count: 1,
  message: "Hello, World!",
});
```

### Getting State

To get the current state of the application, call the getState method:

```javascript
const currentState = state.getState();
```

### Binding Computed Properties

StateFull allows for easy binding of computed properties. To bind a computed property, call the bindComputed method and pass in an object containing the computed properties:

```javascript
state.bindComputed({
  doubleCount: () => state.getState().count * 2,
});
```

Once bound, the computed properties can be accessed like any other property:

```javascript
console.log(state.doubleCount); // Logs the current value of the computed property
```

### Binding Actions

StateFull also allows for easy binding of actions. To bind an action, call the bindActions method and pass in an object containing the actions:

```javascript
state.bindActions({
  incrementCount: (state, amount) => {
    state.count += amount;
  },
});
```

Once bound, the actions can be called like any other method:

```javascript
state.incrementCount(1); // Increments the count property by 1
```

### Adding Middleware

StateFull allows for the use of middleware functions that can modify the state before it is updated. To add a middleware function, call the use method and pass in a function that takes the current state and the new state as arguments and returns the modified state:

```javascript
state.use((currentState, newState) => {
  // Modify the state here
  return newState;
});
```

### Destroying State

To destroy the state and clean up any references, call the destroy method:

```javascript
state.destroy();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
