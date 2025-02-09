/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Work = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // クライアントサイドでのレンダリングまで何も表示しない
  }

  return (
    <div className={styles.work}>
        <div className={styles.work__title}>Works</div>

        <div className={styles.work__container}>
        <Link href="/portfolio/farm" className={styles.work__item}>
          <div className={styles.work__pic}>
            <Image
              src="/farm360.png"
              alt="Farm 360 Project"
              width={200}
              height={200}
            />
          </div>
          <p className={styles.work__pr}>個人制作<br />「牧場いきたい」</p>
          {/* <p className={styles.work__details}>▶ 詳細を見る</p> */}
        </Link>
        <Link href="/portfolio/article3" className={styles.work__item}>
          <div className={styles.work__pic}>
            <Image
              src="/tokachi.jpg"
              alt="Farm 360 Project"
              width={200}
              height={200}
            />
          </div>
          <p className={styles.work__pr}>取材執筆<br /></p>
          {/* <p className={styles.work__details}>▶ 詳細を見る</p> */}
        </Link>
        <Link href="/portfolio/fooch" className={styles.work__item}>
          <div className={styles.work__pic}>
            <Image
              src="/fooch.png"
              alt="FOOCH Project"
              width={200}
              height={200}
            />
          </div>
          <p className={styles.work__pr}>個人制作<br />WEBサービス</p>
          {/* <p className={styles.work__details}>▶ 詳細を見る</p> */}
        </Link>
        <Link href="/portfolio/article2" className={styles.work__item}>
          <div className={styles.work__pic}>
            <Image
              src="/community.jpg"
              alt="FOOCH Project"
              width={200}
              height={200}
            />
          </div>
          <p className={styles.work__pr}>取材執筆<br /></p>
          {/* <p className={styles.work__details}>▶ 詳細を見る</p> */}
        </Link>
        <Link href="/portfolio/article1" className={styles.work__item}>
          <div className={styles.work__pic}>
            <Image
              src="/gyuya.jpg"
              alt="FOOCH Project"
              width={200}
              height={200}
            />
          </div>
          <p className={styles.work__pr}>取材執筆<br /></p>
          {/* <p className={styles.work__details}>▶ 詳細を見る</p> */}
        </Link>
        </div>
    </div>
  );
}

export default Work