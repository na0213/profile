// import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const Farm = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const handleModalOpen = () => {
  //   setIsModalOpen(true);
  // };

  // const handleModalClose = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__con}>
        <Link href="/#works">
          <p>Activity</p>
        </Link>
        <p>＞　牧場行きたい</p>
      </div>

      <div className={styles.farm}>
        <div className={styles.farm__title}>オリジナルWEBサイトー牧場行きたいー</div>
        {/* <div onClick={handleModalOpen} className={styles.farm__link}>
          <p className={styles.farm__pr}>
            巡った牧場をご紹介できるWEBサイトを制作中。<br />
            訪問記録や撮影画像などを掲載し牧場の魅力を伝えられるサイトにしていきます。<br />
            <br />
            ▶︎WEBサイトへ
          </p>
          
          <div className={styles.farm__imagecontainer}>
            <Image
              src="/farmpic.png" // publicフォルダにある画像へのパス
              alt="FOOCH Image"
              width={1200}
              height={400}
              layout="responsive"
              className={styles.farm__image}
            />
          </div>
        </div> */}
        {/* モーダルウィンドウ */}
        {/* {isModalOpen && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p>11月中に公開予定です🐧</p>
              <button onClick={handleModalClose}>閉じる</button>
            </div>
          </div>
        )} */}

        <Link href="https://www.farm360.jp/" target="_blank" rel="noopener noreferrer">
          <p className={styles.farm__pr}>巡った牧場をご紹介できるWEBサイトを制作。<br>
          </br>インタビュー記事や撮影画像などを掲載し牧場の魅力を伝えていきます。<br>
          </br>▶︎WEBサイトへ</p>
          <div className={styles.farm__imagecontainer}>
            <Image
              src="/farmgo.png" // publicフォルダにある画像へのパス
              alt="Farm Image"
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
