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
          <p>Works</p>
        </Link>
        <p>＞　牧場いきたい</p>
      </div>

      <div className={styles.farm}>
        <div className={styles.farm__title}>個人制作「牧場いきたい」</div>
        <div className={styles.about__history}>
          <div className={styles.about__skill}>
            <table className={styles.skillTable}>
              <tbody>
                <tr>
                  <td>目的</td>
                  <td>
                    <div>牧場（一次産業）に興味をもってもらうこと</div>
                    <div>足を運んでみたいと思ってもらうこと</div>
                  </td>
                </tr>
                <tr>
                  <td>ターゲット</td>
                  <td>動物が好きな人・食に関心のある人・ファミリー層</td>
                </tr>
                {/* <tr>
                  <td>意識したこと</td>
                  <td>
                    <div>やわらかくナチュラルな印象で親しみをだすこと</div>
                    <div>牧場の自然な雰囲気を表現する色合いにすること</div>
                  </td>
                </tr>
                <tr>
                  <td>技術</td>
                  <td>
                    <ul className={styles.techList}>
                      <li>Laravel</li>
                      <li>AWS S3</li>
                      <li>Tailwind CSS</li>
                      <li>Heroku</li>
                    </ul>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.farm__links}>
          <Link href="https://www.farm360.jp/" target="_blank" rel="noopener noreferrer">
          🔗 サイトを開く
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
