import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/header'
import { Intro } from './components/intro'
import { Functional } from './components/functional'
import { Functionality } from './components/functionality'

export default function Home() {
  return (
    <main className={styles.main}>
        <Header />
        <Intro />
        <Functional />
        <Functionality />
    </main>
  )
}
