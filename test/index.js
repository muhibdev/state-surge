const app = new SElements("body *");

const actions = {
  increment: (state) => {
    state.count++;
  },
  decrement: (state) => {
    state.count--;
  },
  reset: (state) => {
    state.count = 0;
  },
};

app.bindActions(actions);
