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
            <p>これまで多様な業務に携わり、コミュニケーションを大切にしながら経験を積んできました。</p>
            <p>2022年より、独学とスクールでプログラミングを学び、HTML/CSS、JavaScript、PHPなどを習得。</p>
            <p>開発の楽しさを知り、自らWEBサイトの制作に取り組んでいます。</p>
            <p>また、地域の魅力を伝える活動にも力を入れ、多様な人との関わりを通じて新たな視点を学び続けています。</p>
          </div>
      </div>

      <div className={styles.about__career}>
        <div className={styles.about__section}>
          <p className={styles.about__sectionTitle}>Career</p>
          <div className={styles.careerList}>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2008年</p>
              <p className={styles.careerText}>大学院卒業後、医療系企業でルートサービス業を担当（正社員）</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2012年</p>
              <p className={styles.careerText}>ヘアメイクとして勤務（アルバイト）</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2014年</p>
              <p className={styles.careerText}>大学病院で研究補助・秘書業務を担当（契約社員）</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2017年</p>
              <p className={styles.careerText}>化粧品・健康食品メーカーで受発注業務、品質管理を担当（正社員）</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2024年</p>
              <p className={styles.careerText}>スポーツ協会の事務を担当（派遣社員）<br></br>
              インタビューライターとして活動（業務委託）</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.about__career}>
        <div className={styles.about__section}></div>
          <p className={styles.about__sectionTitle}>Skills</p>
      </div>
      <div className={styles.about__history}>
        <div className={styles.about__skill}>
          <table className={styles.skillTable}>
            <tbody>
              <tr>
                <td>HTML</td>
                <td>〜3年</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>〜3年</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>〜3年</td>
              </tr>
              <tr>
                <td>PHP/Laravel</td>
                <td>〜3年</td>
              </tr>
              <tr>
                <td>React</td>
                <td>〜1年</td>
              </tr>
              <tr>
                <td>Next.js</td>
                <td>〜1年</td>
              </tr>
              <tr>
                <td>MySQL</td>
                <td>〜3年</td>
              </tr>
              <tr>
                <td>Git</td>
                <td>〜3年</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.about__career}>
        <div className={styles.about__section}>
          <p className={styles.about__sectionTitle}>Education</p>
          <div className={styles.careerList}>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2022年</p>
              <p className={styles.careerText}>SAMURAI ENGINEER エキスパートコース受講</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2023年</p>
              <p className={styles.careerText}>G&apos;s ACADEMY DEVコース受講</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2024年</p>
              <p className={styles.careerText}>地域バイヤープログラム第3期（（株）WHERE）受講</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2024年</p>
              <p className={styles.careerText}>インタビューライタープログラム第5期（（株）WHERE）受講</p>
            </div>
            <div className={styles.careerItem}>
              <p className={styles.careerYear}>2024年</p>
              <p className={styles.careerText}>地域バイヤープログラム第4期（（株）WHERE）にて、コミュニティマネージャーとして活動</p>
            </div>
          </div>

          <div className={styles.about__career}>
            <div className={styles.about__section}></div>
              <p className={styles.about__sectionTitle}>Licenses</p>
          </div>
          <div className={styles.about__history}>
            <div className={styles.about__license}>
              <table className={styles.licenseTable}>
                <tbody>
                  <tr>
                    <td>・普通自動車第一種運転免許（AT）</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>・化粧品成分検定２級</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

      </div>
    </div>
    </div>
  );
}

export default About