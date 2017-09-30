import React from 'react'
import { admin } from '../css/Switcher'

import DateTimePicker from './DateTimePicker'
import MeetingTable from './MeetingTable'

const MeetingAgenda = () =>
  <div>
    <label htmlFor='MettingDate'> Meeting Date </label>
    <DateTimePicker />
    <div>
      <MeetingTable />
      <button>Add another </button>
    </div>
  </div>

export default MeetingAgenda
