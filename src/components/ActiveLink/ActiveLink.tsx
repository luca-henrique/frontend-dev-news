'use client'

import Link from 'next/link';
import { ReactNode } from 'react';

import styles from '../Header/header.module.scss';
import { useRouter } from 'next/navigation';

interface ActiveLinkProps {
  href: string;
  children: ReactNode;
}

export const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const path = useRouter();

  const isActivePath = '' === href ? styles.active : '';

  return (
    <Link href={href} className={isActivePath}>
      {children}
    </Link>
  );
};
