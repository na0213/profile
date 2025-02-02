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
        <p>＞　ポートフォリオ</p>
      </div>

      <div className={styles.farm}>
        <div className={styles.farm__title}>個人制作ポートフォリオ</div>
        <div className={styles.about__history}>
          <div className={styles.about__skill}>
            <table className={styles.skillTable}>
              <tbody>
                <tr>
                  <td>目的</td>
                  <td>
                    <div>自身の経歴やスキルを分かりやすく伝える</div>
                    <div>制作実績を整理し、スムーズに閲覧できるようにする</div>
                  </td>
                </tr>
                <tr>
                  <td>ターゲット</td>
                  <td>Web制作会社の採用担当者・エンジニア</td>
                </tr>
                <tr>
                  <td>意識したこと</td>
                  <td>
                    <div>「何ができるのか」が伝わるようにすること</div>
                    <div>直感的にナビゲーションしやすい設計</div>
                  </td>
                </tr>
                <tr>
                  <td>技術</td>
                  <td>
                    <ul className={styles.techList}>
                      <li>React</li>
                      <li>Next.js</li>
                      <li>TypeScript</li>
                      <li>Vercel</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="image-grid">
        {/* 画像一覧 */}
        <div className={styles.imageGrid}>
          {["top.png", "skills.png", "works.png"].map((img, index) => (
              <Image 
                src={`/${img}`} 
                alt={`ポートフォリオ ${index + 1}`} 
                width={400} 
                height={250} 
                layout="intrinsic" // 比率を保つ
                objectFit="contain" // 画像を変形させずに収める
              />
          ))}
        </div>
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
