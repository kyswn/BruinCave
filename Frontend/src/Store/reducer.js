//default informations to show on pages
const defaultState = {
  id: 0,
};

export default (state = defaultState, action) => {
  // actions to change Date state in redux
  if (action.type === "changeid") {
    let newState = JSON.parse(JSON.stringify(state));
    newState.id = action.value;
    return newState;
  }

  return state;
};
