const initialState = {
    last_score: 0,
    score: 0,
}

export default (state = initialState, {type} = {}) => {
    switch (type) {
        case 'PROGRESS':
            return {...state, last_score: state.last_score, score: state.score + 10}
        case 'END':
            return {...state, last_score: state.score, score: 0}
        default:
            return state
    }
}
