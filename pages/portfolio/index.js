import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import ConvertDate from "../../components/convert-date";

//SSGの場合
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "portfolio" });
  console.log(data);
  return {
    props: {
      portfolio: data.contents,
    },
  };
};

export default function Portfolio({ portfolio }) {
  return (
    <div className={styles.container}>
      {portfolio.map((portfolio) => (
        <article className={styles.article} key={portfolio.id}>
          <ConvertDate dateISO={portfolio.createdAt} />
          <Link href={`portfolio/${portfolio.id}`}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <a className={styles.anker} href="">
                {portfolio.title}
                {/* {portfolio.thumbnail} */}
              </a>
              <img src="./carender.png" />
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
