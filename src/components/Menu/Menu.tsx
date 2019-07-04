import * as React from "react"
import { Link, NavLink } from "react-router-dom"

import styles from "./Menu.module.css"

function Menu() {
  return (
    <div className={styles.Base}>
      <div className={styles.Brand}>
        <Link to="/" className={styles.Link}>
          JAMS
        </Link>
      </div>
      <div>
        <NavLink to="/session" className={styles.Link}>
          Session
        </NavLink>
      </div>
    </div>
  )
}

export default Menu
