import { fromJS } from 'immutable'

const updaters = new Map([
  ['@@redux/INIT', state => fromJS(state)],
  ['@@INIT', state => fromJS(state)],
  [
    'COMMIT_ISSUE',
    state =>
      state.set('committed', state.get('committed').push(state.get('draft'))),
  ],
  [
    'UPDATE_ISSUE',
    (state, action) =>
      state.set('draft', state.get('draft').set(action.key, action.value)),
  ],
])

const INITIAL_STATE = fromJS({
  committed: [],
  draft: {},
})

export default (state = fromJS([]), action) => {
  if (updaters.has(action.type)) {
    return updaters.get(action.type)(state, action)
  }
  else {
    return state
  }
}
