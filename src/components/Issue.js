import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { selectCurrentIssue } from '../selectors/issues'

const Issue = () => <div />

export default connect(
  state => ({
    vote: selectCurrentIssue(state),
  }),
  dispatch => ({})
)(Issue)
