import React from 'react'

import styles from '../css/Home'

const Home = () =>
  <div className={styles.home}>
    <div>
      <img
        alt='gnome'
        src='https://people.gnome.org/~engagement/logos/GnomeLogoHorizontal.svg'
      />
    </div>
    <div>
      <h2> Welcome to GNOME blockchains demo </h2>
    </div>
  </div>

export default Home
