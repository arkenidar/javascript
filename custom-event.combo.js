// custom-event, redux,  "data dependency-tracking"

// https://arkenidar.com/web/redux/basic1.html

class Store {
    #state
    #reducer
    #subscribed
    constructor(reducer, subscribed) {
        this.#reducer = reducer
        this.#subscribed = subscribed
        this.dispatch({ type: 'INIT' })
    }
    getState() {
        return this.#state
    }
    dispatch(action) {
        this.#state = this.#reducer(this.#state, action)
        this.#subscribed(this)
    }
}

function counter(state, action) { // reducer function
    if (typeof state === 'undefined') {
        return 0
    }

    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

function subscribed(store) {
    console.log(store.getState())
}

var store = new Store(counter, subscribed) //Redux.createStore(counter)

/*
function render() {
    //valueEl.innerHTML = store.getState().toString()
    console.log(store.getState())
}
store.subscribe(render)
*/

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })