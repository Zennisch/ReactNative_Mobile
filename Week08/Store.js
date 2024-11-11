import { createStore } from 'redux'

const initialState = [{"task":"task 1","check":true,"id":"1"},{"task":"task 2","check":false,"id":"2"},{"task":"task 3","check":true,"id":"3"},{"task":"task 4","check":false,"id":"4"},{"task":"task 5","check":true,"id":"5"},{"task":"task 6","check":false,"id":"6"},{"task":"task 7","check":true,"id":"7"},{"task":"task 8","check":false,"id":"8"},{"task":"task 9","check":true,"id":"9"},{"task":"task 10","check":false,"id":"10"},{"task":"task 11","check":true,"id":"11"},{"task":"task 12","check":false,"id":"12"},{"task":"task 13","check":true,"id":"13"},{"task":"task 14","check":false,"id":"14"},{"task":"task 15","check":true,"id":"15"},{"task":"task 16","check":false,"id":"16"},{"task":"task 17","check":true,"id":"17"},{"task":"task 18","check":false,"id":"18"},{"task":"task 19","check":true,"id":"19"},{"task":"task 20","check":false,"id":"20"}]

function reducer(state = initialState, action) {
  switch (action.type) {
    case "check":
      return state.map(item =>
        item.id === action.payload.id ? { ...item, check: !item.check } : item
      );
    default:
      return state
  }
}

store = createStore(reducer, initialState)

export default store;