import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import userStore from 'src/zustand/stores/userStore';

export default function Home() {
  const { userReducer } = userStore();
  return (
    <div className={styles.container}>
      <Head>
        <title>Unacademy Web Boilerplate</title>
        <meta name="description" content="Unacademy Web Boilerplate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        onClick={() => {
          userReducer('SIGN_IN_USER', { id: '1', name: 'some name' });
        }}
      >
        something
      </button>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href="https://github.com/unacademy">Unacademy Boilerplate!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>. This boilerplate
          is built on top of Next.js.
        </p>

        <p className={styles.description}>
          Use any design system that&apos;s needed. This boilerplate comes
          pre-packaged with:
        </p>

        <ul>
          <li>ES Lint</li>
          <li>Testing With Jest and React Testing Library</li>
          <li>Material UI 5</li>
          <li>Emotion</li>
          <li>SWR</li>
        </ul>
        <div onClick={() => void 0} role="presentation" />

        <p className={styles.description}>
          Run <code className={styles.code}>yarn dev</code> to start the
          project, <code className={styles.code}>yarn build</code> to build it
          and <code className={styles.code}>yarn test</code> to run tests.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
