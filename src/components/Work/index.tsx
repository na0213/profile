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
        <div className={styles.work__title}>Article</div>

        <div className={styles.work__container}>
        <Link href="">
            <div className={styles.work__pic}>
                <Image
                src="/fooch.png"
                alt="Icon"
                width={200}
                height={200}
                />
                <p className={styles.work__pr}>取材執筆（LOCAL LETTER）</p>
            </div>
        </Link>
        <Link href="http://www.farm360.jp/" target="_blank" rel="noopener noreferrer">
          <div className={styles.work__pic}>
            <img
              src="/farm360.png"
              alt="Farm 360 Project"
              width={200}
              height={200}
            />
            <p className={styles.work__pr}>オリジナルWEBサイト</p>
          </div>
        </Link>
        <Link href="http://www.fooch.jp/" target="_blank" rel="noopener noreferrer">
          <div className={styles.work__pic}>
            <img
              src="/fooch.png"
              alt="Fooch Project"
              width={200}
              height={200}
            />
            <p className={styles.work__pr}>オリジナルWEBサービス</p>
          </div>
        </Link>
        <Link href="">
            <div className={styles.work__pic}>
                <Image
                src="/fooch.png"
                alt="Icon"
                width={200}
                height={200}
                />
                {/* <p className={styles.work__pr}>オリジナルWEBサイト</p> */}
            </div>
        </Link>
        <Link href="">
            <div className={styles.work__pic}>
                <Image
                src="/fooch.png"
                alt="Icon"
                width={200}
                height={200}
                />
                {/* <p className={styles.work__pr}>オリジナルWEBサイト</p> */}
            </div>
        </Link>
        <Link href="">
            <div className={styles.work__pic}>
                <Image
                src="/fooch.png"
                alt="Icon"
                width={200}
                height={200}
                />
                {/* <p className={styles.work__pr}>オリジナルWEBサイト</p> */}
            </div>
        </Link>
        </div>
    </div>
  );
}

export default Work