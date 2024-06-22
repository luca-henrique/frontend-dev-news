'use client'

import styles from './header.module.scss';
import { ActiveLink } from '../ActiveLink/ActiveLink';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src="/logo.svg" alt="DevNews" width={150} height={150} />
        <nav>
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/posts">Posts</ActiveLink>
        </nav>
      </div>
    </header>
  );
};
