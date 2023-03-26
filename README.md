# StateSurge

StateSurge is a lightweight JavaScript library for managing state and rendering views in web applications.

## Use Case for StateSurgel Library:

Imagine you are building a web application that needs to manage a lot of state changes. You have several components that need to interact with each other and share data. Without a solid framework, this can quickly become messy and difficult to maintain.

This is where the StateSurgel library comes in. It is a simple yet powerful library that helps you manage state changes in your web application. You can use it to define your application's state, and update it when necessary. The library also provides an easy way to define and bind actions to your state, making it easy to handle user interactions.

#### Here are some specific use cases where you might want to use the StateSurgel library:

##### Managing Form Data:

If your web application has several forms that need to be filled out, you can use StateSurgel to manage the data entered by the user. You can define the state for each form, and update it when the user enters new data. You can also bind actions to the form state to handle form submission or validation.

##### Managing User Authentication:

If your web application requires users to log in, you can use StateSurgel to manage the user's authentication status. You can define the state for the user authentication, and update it when the user logs in or out. You can also bind actions to the authentication state to handle user authentication requests.

##### Managing Data Visualization:

If your web application has complex data visualization, you can use StateSurgel to manage the data displayed to the user. You can define the state for the data visualization, and update it when the user interacts with the visualization. You can also bind actions to the visualization state to handle user interactions, such as filtering or sorting.

Overall, the StateSurgel library is a powerful tool for managing state changes in your web application. It helps you keep your code organized and maintainable, and makes it easy to handle complex user interactions.

## Installation

You can install StateSurge via npm:

```bash
npm install state-surge
```

Alternatively, you can include the library in your project via a script tag:

```bash
<script src="https://unpkg.com/state-surge"></script>
```

## Usage

### Initializing State

To create a new instance of StateSurgel, simply pass in a query selector or a DOM element:

```javascript
const app = new StateSurge("body *");
```

### Setting State

To set the state of the application, call the setState method and pass in an object containing the new state:

```javascript
app.setState({
  count: 1,
  message: "Hello, World!",
});
```

### Getting State

To get the current state of the application, call the getState method:

```javascript
const currentState = app.getState();
```

### Binding Computed Properties

StateSurgel allows for easy binding of computed properties. To bind a computed property, call the bindComputed method and pass in an object containing the computed properties:

```javascript
app.bindComputed({
  doubleCount: () => app.getState().count * 2,
});
```

Once bound, the computed properties can be accessed like any other property:

```javascript
console.log(app.doubleCount); // Logs the current value of the computed property
```

### Binding Actions

StateSurgel also allows for easy binding of actions. To bind an action, call the bindActions method and pass in an object containing the actions:

```javascript
app.bindActions({
  incrementCount: (state, amount) => {
    state.count += amount;
  },
});
```

Once bound, the actions can be called like any other method:

```javascript
app.incrementCount(1); // Increments the count property by 1
```

### Adding Middleware

StateSurgel allows for the use of middleware functions that can modify the state before it is updated. To add a middleware function, call the use method and pass in a function that takes the current state and the new state as arguments and returns the modified state:

```javascript
app.use((currentState, newState) => {
  // Modify the state here
  return newState;
});
```

### Destroying State

To destroy the state and clean up any references, call the destroy method:

```javascript
app.destroy();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
