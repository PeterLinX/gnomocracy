import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { commitIssue } from '../actions'

import { admin } from '../css/Switcher'
import styles from '../css/MeetingAgenda'

import DateTimePicker from './DateTimePicker'
import MeetingTable from './MeetingTable'

class _MeetingAgenda extends PureComponent {
  onSubmit = () => {}

  render() {
    return (
      <div className={styles.meetingAgenda}>
        <div className={styles.meetingDateDiv}>
          <div>
            <label htmlFor='MettingDate' className='meetingDateLabel'>
              {' '}
              Meeting Date
              <DateTimePicker />
            </label>
          </div>
        </div>
        <div className={styles.meetingTableWrapper}>
          <MeetingTable />
          <button onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

const MeetingAgenda = connect(
  () => ({}),
  dispatch => ({
    onSubmit: () => dispatch(commitIssue()),
  })
)(_MeetingAgenda)

export default MeetingAgenda
