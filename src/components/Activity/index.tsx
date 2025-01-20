/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const Activity = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // クライアントサイドでのレンダリングまで何も表示しない
  }

  return (
    <div className={styles.work}>
        <div className={styles.work__title}>Event</div>

        <div className={styles.work__container}>
        <Link href="/portfolio/event1">
            <div className={styles.work__pic}>
                <Image
                src="/event.png"
                alt="Icon"
                width={200}
                height={200}
                />
                <p className={styles.work__pr}>イベント開催<br></br>焼き芋食べ比べ＆牛乳飲み比べ</p>
            </div>
        </Link>
        </div>
    </div>
  );
}

export default Activity