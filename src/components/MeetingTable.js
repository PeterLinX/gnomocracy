import React from 'react'
import styles from '../css/MeetingTable'

const MeetingTable = () =>
  <div className={styles.meetingTable}>
    <div className={styles.meetingRows}>
      <label htmlFor='MettingPoint' className={styles.meetingLabels}>
        Meeting point
      </label>
      <input className='form-control' />
    </div>
    <div className={styles.meetingRows}>
      <label htmlFor='ShortDesc' className={styles.meetingLabels}>
        {' '}Short Desc{' '}
      </label>
      <textarea className='form-control' />
    </div>
    <div className={styles.meetingRows}>
      <label htmlFor='NumVotes' className={styles.meetingLabels}>
        {' '}Num of votes reqd{' '}
      </label>
      <input />
    </div>
  </div>

export default MeetingTable
