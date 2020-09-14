export function StateManager(initialState, stateUpdated) {
  this.state = initialState;
  const setStateInternal = (newState) => {
    this.state = newState;
  };
  this.setState = new Proxy(setStateInternal, {
    apply: function (target, thisArgs, argumentList) {
      target(...argumentList);
      if (stateUpdated) {
        let eventFired = dispatchEvent(stateUpdated);
      }
    },
  });
}

export function createState(initialState, stateUpdated) {
  let tempState = new StateManager(initialState, stateUpdated);
  return tempState;
}
