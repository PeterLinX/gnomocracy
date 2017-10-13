import React from 'react'
import { admin } from '../css/Switcher'
import styles from '../css/MeetingAgenda'

import DateTimePicker from './DateTimePicker'
import MeetingTable from './MeetingTable'

const MeetingAgenda = () =>
  <div className={styles.meetingAgenda}>
    <div className={styles.meetingDateDiv}>
      <div>
        <label htmlFor='MettingDate' className='meetingDateLabel'>
          {' '}Meeting Date
          <DateTimePicker />
        </label>
      </div>
    </div>
    <div className={styles.meetingTableWrapper}>
      <MeetingTable />
      <button>Submit</button>
    </div>
  </div>

export default MeetingAgenda
