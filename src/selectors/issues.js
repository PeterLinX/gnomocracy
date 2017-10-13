import { createSelector } from 'reselect'

import { selectLocation } from './location'

const selectIssues = state => state.issues

export const selectCurrentIssue = createSelector(
  selectIssues,
  selectLocation,
  (issues, location) => issues.get(location.payload.issueId)
)

export const selectDraftIssue = createSelector(selectIssues, issues =>
  issues.get('draft')
)
