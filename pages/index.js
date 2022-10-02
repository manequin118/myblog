import Link from "next/link";
import { useContext } from "react";
import utilStyles from "../styles/utils.module.css";
// import ConvertDate from "../components/convert-date";
import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";
import { AppContext } from "./_app";

//SSGの場合
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
        <h2 className={utilStyles.headingLg}>📝chuのブログ</h2>
        <div className={styles.headBottom}>
          <p>
            このブログはNext.jsとマイクロCMSを使ったJamstackというアーキテクチャを使ったWebサイトです。
          </p>
          <p>
            SSG【Static Site Generation
            】という方式でページレンダリングする静的サイトを生成する仕組みを使用しています。
          </p>
        </div>

        {/* <Link href="/posts/first-post">最初の投稿はこちら</Link>  あとで外す*/}
      </section>

      {/* gridで表示したい */}
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
          仕事や個人開発の中で新たに学んだことや経験談を備忘録として残していきたいと思います。
          また、制作物もその完成次第に残していこうと思いますので、興味ある方は是非使ってみてください。
        </p>
      </div>
    </div>
  );
}
