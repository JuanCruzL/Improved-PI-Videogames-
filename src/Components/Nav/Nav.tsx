import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav () {
  return (
    <div className={styles.navContainer}>
      <h1><Link href='/home'>Home</Link></h1>
      <h1><Link href='/create'>Create Videogame</Link></h1>
    </div>
  )
}
