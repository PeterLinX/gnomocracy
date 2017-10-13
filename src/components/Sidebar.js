import React from 'react'
import { connect } from 'react-redux'
import Link, { NavLink } from 'redux-first-router-link'

import { goToPage } from '../actions'
import styles from '../css/Sidebar'

const Sidebar = ({ onClick, path }) => (
  <div className={styles.sidebar}>
    <NavLink activeClassName={styles.active} exact to='/'>
      HOME
    </NavLink>

    <div style={{ height: 14 }} />

    <NavLink
      activeClassName={styles.active}
      to={{ type: 'ADMIN', payload: { category: 'meeting-agenda' } }}
    >
      Create Meeting Agenda{' '}
    </NavLink>

    <NavLink
      activeClassName={styles.active}
      to={{ type: 'ISSUE', payload: { issueId: 1 } }}
    >
      Vote on meeting 1{' '}
    </NavLink>
  </div>
)

const active = (currentPath, path) =>
  currentPath === path ? styles.active : ''

const mapDispatch = { onClick: goToPage }
const mapState = ({ location }) => ({ path: location.pathname })

export default connect(mapState, mapDispatch)(Sidebar)
