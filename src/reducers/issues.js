import { fromJS } from 'immutable'

const updaters = new Map([
  ['@@redux/INIT', state => fromJS(state)],
  ['@@INIT', state => fromJS(state)],
])

export default (state = fromJS({}), action) => {
  if (updaters.has(action.type)) {
    return updaters.get(action.type)(state, action)
  }
  else {
    return state
  }
}
