import styles from './home.module.css'
import Nav from '../../Components/Nav/Nav'

export default function page () {
  return (
    <>
      <Nav />
      <div className={styles.homeContainer}>
        Home
      </div>
    </>
  )
}
