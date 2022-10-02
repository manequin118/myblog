import utilStyles from "../../styles/utils.module.css";
// import ConvertDate from "../components/convert-date";
import styles from "../../styles/Home.module.scss";

export default function Profile({}) {
  return (
    <div className={styles.container}>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>📝chuのブログ</h2>
        <div className={styles.headBottom}>
          <p>水道関係の営業（約10年）からWeb制作会社へ転職</p>
          <p>Web開発やWeb制作、Web広告の運用などしています。</p>
        </div>

        {/* <Link href="/posts/first-post">最初の投稿はこちら</Link>  あとで外す*/}
      </section>

      {/* gridで表示したい */}
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
          仕事や個人開発の中で新たに学んだことや経験談を記事にして備忘録として残していきたいと思います。
          また、制作物もその完成次第に残していこうと思いますので、興味ある方は是非使ってみてください。
        </p>
      </div> */}
    </div>
  );
}
