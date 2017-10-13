import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeField } from '../actions'
import { selectDraftIssue } from '../selectors/issues'
import styles from '../css/MeetingTable'

class _MeetingTable extends PureComponent {
  onChangeNumVotes = event => {
    this.props.changeField('numVotes', event.currentTarget.value)
  }

  onChangeDescription = event => {
    this.props.changeField('description', event.currentTarget.value)
  }

  onChangeLabel = event => {
    this.props.changeField('label', event.currentTarget.value)
  }

  render() {
    return (
      <div className={styles.meetingTable}>
        <div className={styles.meetingRows}>
          <label htmlFor='ShortDesc' className={styles.meetingLabels}>
            {' '}
            Issue label{' '}
          </label>
          <textarea
            className='form-control'
            value={this.props.draftIssue.get('label')}
            onChange={this.onChangeLabel}
          />
        </div>
        <div className={styles.meetingRows}>
          <label htmlFor='MettingPoint' className={styles.meetingLabels}>
            Issue description
          </label>
          <input
            className='form-control'
            value={this.props.draftIssue.get('description')}
            onChange={this.onChangeDescription}
          />
        </div>
        <div className={styles.meetingRows}>
          <label htmlFor='NumVotes' className={styles.meetingLabels}>
            {' '}
            Num of votes reqd{' '}
          </label>
          <input
            value={this.props.draftIssue.get('numVotes')}
            onChange={this.onChangeNumVotes}
          />
        </div>
      </div>
    )
  }
}

const MeetingTable = connect(
  state => ({
    draftIssue: selectDraftIssue(state),
  }),
  dispatch => ({
    changeField: (field, value) => dispatch(changeField(field, value)),
  })
)(_MeetingTable)

export default MeetingTable
