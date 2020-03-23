class Events {
  addEventListener(eventName, handler) {
    if (!this.eventHandlers) {
      this.eventHandlers = {};
    }
    if (!this.eventHandlers[eventName]) {
      this.eventHandlers[eventName] = [];
    }
    this.eventHandlers[eventName].push(handler);
    return handler;
  }

  dispatch(eventName, ...args) {
    if (this.eventHandlers[eventName]) {
      this.eventHandlers[eventName].forEach(handler => {
        handler.apply(this, args);
      });
    }
  }

  remove(eventName, handler) {
    let handlers = this.eventHandlers && this.eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);
      }
    }
  }
}

let a = new Events();

let eventListener = a.addEventListener("console", (...args) => {
  console.log(args);
});

let eventListener2 = a.addEventListener("console", (...args) => {
  console.log(args, 2);
});

a.dispatch("console", "test");

a.remove("console", eventListener);
