import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const Farm = () => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__con}>
        <Link href="/#works">
          <p>Work</p>
        </Link>
        <p>＞　article</p>
      </div>

      <div className={styles.farm}>
        <div className={styles.farm__title}>イベント開催</div>
        <Link href="" target="_blank" rel="noopener noreferrer">

          <p className={styles.farm__pr}>🍠焼き芋食べ比べ＆牛乳飲み比べ🐮<br>
          </br>◾️2024年12月7日（土）<br>
          </br>◾️11:00〜16:00</p>

          <div className={styles.farm__imagecontainer}>
            <Image
              src="/event.png" // publicフォルダにある画像へのパス
              alt="Image"
              width={1200} // 画像の幅
              height={400} // 画像の高さ
              layout="responsive" // 画像をレスポンシブに表示
              className={styles.farm__image}
            />
          </div>
        </Link>
      </div>

      {/* 戻る */}
      <div className={styles.back}>
        <Link href="/#works">
        <p className={styles.backButton}>◀︎ 戻る</p>
        </Link>
      </div>
    </div>
  );
};

export default Farm;
