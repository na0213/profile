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
        <div className={styles.work__title}>Work</div>

        <div className={styles.work__container}>
        <Link href="/portfolio/article2">
            <div className={styles.work__pic}>
                <Image
                src="/community.jpg"
                alt="Icon"
                width={200}
                height={200}
                />
                <p className={styles.work__pr}>取材執筆<br></br>コミュニティマネージャー養成講座卒業生の鼎談記事</p>
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
                <p className={styles.work__pr}>取材執筆<br></br>氷見牛屋代表の記事</p>
            </div>
        </Link>
        <Link href="/portfolio/farm">
          <div className={styles.work__pic}>
            <Image
              src="/farm360.png"
              alt="Farm 360 Project"
              width={200}
              height={200}
            />
            <p className={styles.work__pr}>オリジナルWEBサイト<br></br>「牧場へ行こう」</p>
          </div>
        </Link>
        <Link href="/portfolio/fooch">
          <div className={styles.work__pic}>
            <Image
                src="/fooch.png"
                alt="Icon"
                width={200}
                height={200}
            />
            <p className={styles.work__pr}>オリジナルWEBサービス<br></br>FOOCH</p>
          </div>
        </Link>
        </div>
    </div>
  );
}

export default Work