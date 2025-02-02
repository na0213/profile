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
          <p className={styles.work__details}>▶ 詳細を見る</p>
        </Link>
        <Link href="/portfolio/portfolio" className={styles.work__item}>
          <div className={styles.work__pic}>
            <Image
              src="/portfolio.png"
              alt="Farm 360 Project"
              width={200}
              height={200}
            />
          </div>
          <p className={styles.work__pr}>個人制作<br />ポートフォリオ</p>
          <p className={styles.work__details}>▶ 詳細を見る</p>
        </Link>
        {/* <Link href="/portfolio/fooch">
          <div className={styles.work__pic}>
            <Image
                src="/fooch.png"
                alt="Icon"
                width={200}
                height={200}
            />
            <p className={styles.work__pr}>オリジナルWEBサービス<br></br>FOOCH</p>
          </div>
        </Link> */}
        {/* <Link href="/portfolio/article2">
            <div className={styles.work__pic}>
                <Image
                src="/community.jpg"
                alt="Icon"
                width={200}
                height={200}
                />
                <p className={styles.work__pr}>取材執筆<br></br>鼎談記事</p>
            </div>
        </Link>
        <Link href="/portfolio/article1">
            <div className={styles.work__pic}>
                <Image
                src="/gyuya.jpg"
                alt="Icon"
                width={200}
                height={200}
                />
                <p className={styles.work__pr}>取材執筆<br></br>「氷見 牛屋」代表の取材記事</p>
            </div>
        </Link> */}
        </div>
    </div>
  );
}

export default Work