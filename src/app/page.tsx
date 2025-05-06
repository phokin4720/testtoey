import Image from "next/image"
import styles from "./page.module.css"

export default function Login() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <label>
            Username :
            <input type="text" name="input1" />
          </label>
          <br></br>
          <label>
            Password :
            <input type="text" name="input2" />
          </label>
        </ol>

        <div className={styles.ctas}>
          <a className={styles.primary} href="home" target="_blank">
            Login
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a>Footer</a>
      </footer>
    </div>
  )
}
