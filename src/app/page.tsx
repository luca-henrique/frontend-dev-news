'use client'

import Seo from '@/components/SEO';
import styles from '@/styles/home.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Seo title="Dev News!" excludeTitleSuffix />

      <main className={styles.content}>
        <section className={styles.section}>
          <span>Ola dev</span>
          <h1>
            Bem Vindo e bem vinda ao <br />
            <span>Dev</span>News!
          </h1>
          <p>
            Um blog com conteudos extremamente <br />
            <span>relevantes para o seu aprendizado</span>
          </p>
        </section>

        <Image src="./home.svg" alt="Home img" width={400} height={400} />
      </main>
    </>
  );
}
