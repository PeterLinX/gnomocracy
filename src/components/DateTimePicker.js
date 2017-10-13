import React from 'react'
import DateTime from 'react-datetime'

import styles from '../css/DatetimePick'

const DateTimePicker = () =>
  <div className={styles.datetimePicker}>
    <DateTime />
  </div>

export default DateTimePicker
