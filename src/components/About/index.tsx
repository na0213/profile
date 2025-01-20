/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__title}>About</div>

      <div className={styles.about__pic}>
        <Image
        src="/mypic.PNG"
        alt="Icon"
        width={200}
        height={200}
        />
        <div className={styles.about__prof}>石﨑 なつみ</div>
      </div>
      <div className={styles.about__pr}>
        <p>個人開発歴4年目。</p>
        <p>ヘアメイクや大学病院での研究補助、化粧品・健康食品メーカーでの物流・品質管理業務を経験しながらオリジナルWEBサイトを開発。</p>
        <p>現在は、個人開発を行う傍ら、牧場訪問を通じて食の背景や代表の方の思いを学び、それを発信する活動を展開中。</p>
        <p>地域の魅力を伝えるインタビューライターやバイヤーとしても活動し、牧場や地域に根ざした食の魅力を広く届けることを目指している。</p>
        <p>学生時代はイルカ・クジラの研究を行い、修士号を取得。人と動物の共存についても考えを深めている。</p>
      </div>

      <div className={styles.about__like}>
        <p><span>活動</span>：インタビューライター、地域バイヤー、個人開発</p>
      </div>
      <div className={styles.about__history}>
        <div className={styles.about__skill}>
          <p className={styles.about__skillTitle}>Skill</p>
          <table className={styles.skillTable}>
            <tbody>
              <tr>
                <td>HTML</td>
                <td>〜4年</td>
              </tr>
              <tr>
                <td>CSS</td>
                <td>〜4年</td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td>〜4年</td>
              </tr>
              <tr>
                <td>PHP/Laravel</td>
                <td>〜4年</td>
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
                <td>〜4年</td>
              </tr>
              <tr>
                <td>Git</td>
                <td>〜4年</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.about__history}>
      <div className={styles.about__skill}>
        <p className={styles.about__skillTitle}>History</p>
        <table className={styles.historyTable}>
          <tbody>
            <tr>
              <td>2024年</td>
              <td>地域バイヤープログラム第4期（（株）WHERE）にて、コミュニティマネージャーとして活動</td>
            </tr>
            <tr>
              <td>2024年</td>
              <td>地域バイヤープログラム第3期（（株）WHERE）受講</td>
            </tr>
            <tr>
              <td>2024年</td>
              <td>インタビューライタープログラム第5期（（株）WHERE）受講</td>
            </tr>
            <tr>
              <td>2023年</td>
              <td>G&apos;s ACADEMY DEVコース受講</td>
            </tr>
            <tr>
              <td>2020年</td>
              <td>SAMURAI ENGINEER エキスパートコース受講</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div className={styles.about__like}>
        <p><span>好き</span>：牧場、旅、温泉、釣り、食べること、トレイルランニング、プログラミング、フェレット</p>
      </div>
    </div>
  );
}

export default About