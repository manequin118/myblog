import Link from "next/link";
import { useContext } from "react";
import utilStyles from "../styles/utils.module.css";
// import ConvertDate from "../components/convert-date";
import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";
import { AppContext } from "./_app";

//SSGã®å ´å
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({}) {
  const { user } = useContext(AppContext);
  return (
    <div className={styles.container}>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>ðchuã®ãã­ã°</h2>
        <div className={styles.headBottom}>
          <p>
            ãã®ãã­ã°ã¯Next.jsã¨ãã¤ã¯ã­CMSãä½¿ã£ãJamstackã¨ããã¢ã¼ã­ãã¯ãã£ãä½¿ã£ãWebãµã¤ãã§ãã
          </p>
          <p>
            SSGãStatic Site Generation
            ãã¨ããæ¹å¼ã§ãã¼ã¸ã¬ã³ããªã³ã°ããéçãµã¤ããçæããä»çµã¿ãä½¿ç¨ãã¦ãã¾ãã
          </p>
        </div>

        {/* <Link href="/posts/first-post">æåã®æç¨¿ã¯ãã¡ã</Link>  ãã¨ã§å¤ã*/}
      </section>

      {/* gridã§è¡¨ç¤ºããã */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <div className={`${styles.grid}`}>
          <div>
            <img src="./jamstack.svg" />
          </div>
          <div>
            <img id={styles.micro} src="./micro-cms.svg" />
          </div>
          <div>
            <img src="./nextJs.jpeg" />
          </div>
          <div>
            <img src="./react5.png" />
          </div>
        </div>
      </section>
      <div>
        <p>
          ä»äºãåäººéçºã®ä¸­ã§æ°ãã«å­¦ãã ãã¨ãçµé¨è«ãåå¿é²ã¨ãã¦æ®ãã¦ããããã¨æãã¾ãã
          ã¾ããå¶ä½ç©ããã®å®ææ¬¡ç¬¬ã«æ®ãã¦ãããã¨æãã¾ãã®ã§ãèå³ããæ¹ã¯æ¯éä½¿ã£ã¦ã¿ã¦ãã ããã
        </p>
      </div>
    </div>
  );
}
