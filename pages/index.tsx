import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Welcome to My Chat app!</h1>

        {/* <div className={styles.card}>
          <Image
            src="/public/logo.png" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="My Chat Logo"
          />
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/valentin-demange"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with &#128154; by Valentin Demange
        </a>
      </footer>
    </div>
  );
}
