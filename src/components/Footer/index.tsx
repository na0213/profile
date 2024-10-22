import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <Link href="https://www.instagram.com/natsugoro___" target="_blank" rel="noopener noreferrer">
          <Image
            src="/Insta.png"
            alt="Twitter"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://note.com/natsugoro___" target="_blank" rel="noopener noreferrer">
          <Image
            src="/square.png"
            alt="Facebook"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <p className={styles.footer__title}>Natomi.works</p>
    </footer>
  );
}

export default Footer;
