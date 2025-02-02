/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__title}>About</div>

      <div className={styles.about__career}>
        <div className={styles.about__section}></div>
          <p className={styles.about__sectionTitle}>Profile</p>
          <div className={styles.about__pic}>
            <Image
            src="/mypic.PNG"
            alt="Icon"
            width={200}
            height={200}
            />
            <div className={styles.about__prof}>石﨑 なつみ<br></br>Ishizaki Natsumi</div>
            
          </div>
          <div className={styles.about__pr}>
            <p>2022年より、独学とスクールでプログラミングを学び、HTML/CSS、JavaScript、PHPなどを習得。</p>
            <p>開発の楽しさを知り、個人でWEBサイトの制作に取り組んでいます。</p>
            <p>コミュニケーション力を大切にしながら地域と関わり、人とのつながりを広げる活動も行っています。</p>
            <p>これまで多様な業務に携わった経験を活かし、視点を広く持ちながら、技術と実践力を高めています。</p>
          </div>
      </div>

      <div className={styles.about__career}>
        <div className={styles.about__section}>
          <p className={styles.about__sectionTitle}>Career</p>
          <div className={styles.careerList}>

            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2024年〜</p>
              <p className={styles.careerText}>スポーツ協会の事務</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2024年〜</p>
              <p className={styles.careerText}>インタビューライターとして活動</p>
            </div>

            <div className={styles.careerItem}>
              <p className={styles.careerYear}>〜2023年</p>
              <p className={styles.careerText}>化粧品・健康食品メーカーでの受発注管理・品質管理</p>
            </div>

            <div className={styles.careerItem}>
              <p className={styles.careerYear}>その他</p>
              <p className={styles.careerText}>
                大学病院での研究補助・秘書業務、IT事務、医療系サービス業など
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.about__career}>
        <div className={styles.about__section}>
          <p className={styles.about__sectionTitle}>Skills</p>
          <div className={styles.careerList}>

            <div className={styles.careerItem}>
              <p className={styles.careerYear}>バックエンド</p>
              <p className={styles.careerText}><strong>PHP / Laravel</strong><br />
                MVCモデルの理解と開発<br />
                認証機能や管理画面の実装<br />
                API開発・データ取得処理の実装</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>フロントエンド</p>
              <p className={styles.careerText}><strong>HTML / CSS</strong><br />
              適切なHTML構造<br />
              alt属性の適切な設定、視認性向上<br />
              レスポンシブデザイン
              </p>
            </div>

            <div className={styles.careerItem}>
              <p className={styles.careerYear}></p>
              <p className={styles.careerText}><strong>JavaScript</strong><br />
              フォームのバリデーション・インタラクションの実装<br />
              UI改善のための動的処理の追加<br />（スライダー、モーダル、アコーディオンなど）
              </p>
            </div>

            <div className={styles.careerItem}>
              <p className={styles.careerYear}></p>
              <p className={styles.careerText}><strong>React / Next.js</strong><br />
              Reactの基本構造の理解<br />
              Next.jsを用いたページ遷移の実装
              </p>
            </div>

            <div className={styles.careerItem}>
              <p className={styles.careerYear}>データベース</p>
              <p className={styles.careerText}><strong>MySQL</strong><br />
              データベース設計<br />（テーブル・リレーション設計）
              </p>
            </div>

            <div className={styles.careerItem}>
              <p className={styles.careerYear}>その他</p>
              <p className={styles.careerText}><strong>Git / GitHub</strong><br />
              個人開発プロジェクトのバージョン管理・GitHubを利用したコード管理
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.about__career}>
        <div className={styles.about__section}>
          <p className={styles.about__sectionTitle}>Education</p>

          {/* IT関連 */}
          <div className={styles.about__subSection}>
            <p className={styles.about__subSectionTitle}>IT関連</p>
            <div className={styles.careerList}>
              <div className={styles.careerItem}>
                <p className={styles.careerYear}>2023年</p>
                <p className={styles.careerText}>G&apos;s ACADEMY<br />DEVコース 修了</p>
              </div>
              <div className={styles.careerItem}>
                <p className={styles.careerYear}>2022年</p>
                <p className={styles.careerText}>SAMURAI ENGINEER<br />エキスパートコース 修了</p>
              </div>
            </div>
          </div>

          {/* 地域関連 */}
          <div className={styles.about__subSection}>
            <p className={styles.about__subSectionTitle}>地域関連</p>
            <div className={styles.careerList}>
              <div className={styles.careerItem}>
                <p className={styles.careerYear}>2024年11月〜</p>
                <p className={styles.careerText}>地域バイヤープログラム 第4期（（株）WHERE）<br />
                コミュニティマネージャーとして活動</p>
              </div>
              <div className={styles.careerItem}>
                <p className={styles.careerYear}>2024年9月</p>
                <p className={styles.careerText}>地域バイヤープログラム 第3期（（株）WHERE） 修了</p>
              </div>
              <div className={styles.careerItem}>
                <p className={styles.careerYear}>2024年9月</p>
                <p className={styles.careerText}>インタビューライター養成講座 第5期（（株）WHERE） 修了</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default About