import utilStyles from "../../styles/utils.module.css";
// import ConvertDate from "../components/convert-date";
import styles from "../../styles/Home.module.scss";

export default function Profile({}) {
  return (
    <div className={styles.container}>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>ðchuã®ãã­ã°</h2>
        <div className={styles.headBottom}>
          <p>æ°´éé¢ä¿ã®å¶æ¥­ï¼ç´10å¹´ï¼ããWebå¶ä½ä¼ç¤¾ã¸è»¢è·</p>
          <p>WebéçºãWebå¶ä½ãWebåºåã®éç¨ãªã©ãã¦ãã¾ãã</p>
        </div>

        {/* <Link href="/posts/first-post">æåã®æç¨¿ã¯ãã¡ã</Link>  ãã¨ã§å¤ã*/}
      </section>

      {/* gridã§è¡¨ç¤ºããã */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={`${styles.grid}`}>
          <div>
            <img src="./PHP_logo.png" />
          </div>
          <div>
            <img id={styles.micro} src="./wordpress.png" />
          </div>
          <div>
            <img src="./javascript.png" />
          </div>
          <div>
            <img src="./java2.jpeg" />
          </div>
        </div>
      </section>
      {/* <div>
        <p>
          ä»äºãåäººéçºã®ä¸­ã§æ°ãã«å­¦ãã ãã¨ãçµé¨è«ãè¨äºã«ãã¦åå¿é²ã¨ãã¦æ®ãã¦ããããã¨æãã¾ãã
          ã¾ããå¶ä½ç©ããã®å®ææ¬¡ç¬¬ã«æ®ãã¦ãããã¨æãã¾ãã®ã§ãèå³ããæ¹ã¯æ¯éä½¿ã£ã¦ã¿ã¦ãã ããã
        </p>
      </div> */}
    </div>
  );
}
