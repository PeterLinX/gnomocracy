import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { commitIssue } from '../actions'

import { admin } from '../css/Switcher'

import DateTimePicker from './DateTimePicker'
import MeetingTable from './MeetingTable'

class _MeetingAgenda extends PureComponent {
  onSubmit = () => {}

  render() {
    return (
      <div>
        <label htmlFor='MettingDate'> Meeting Date </label>
        <DateTimePicker />
        <div>
          <MeetingTable />
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

const MeetingAgenda = connect(
  () => ({}),
  dispatch =>
    ({
      onSubmit: () => dispatch(commitIssue()),
    }(_MeetingAgenda))
)

export default MeetingAgenda
