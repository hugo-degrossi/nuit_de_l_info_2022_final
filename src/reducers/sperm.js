const initialState = {
  y: 250,
  r: 0,
}

export default (state = initialState, {type} = {}) => {
  switch (type) {
    case 'FLY':
      return {...state, y: state.y - 40, r: -30}
    case 'FALL':
      return {...state, y: state.y + 30, r: 0}
    case 'GAME_OVER':
      return initialState
    default:
      return state
  }
}
