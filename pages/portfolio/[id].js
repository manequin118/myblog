import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import ConvertDate from "../../components/convert-date";

//SG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log(context);
  const data = await client.get({ endpoint: "portfolio", contentId: id });

  return {
    props: {
      portfolio: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "portfolio" });
  const paths = data.contents.map((content) => `/portfolio/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ portfolio }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{portfolio.title}</h1>
      {/* <p className={styles.publishedAt}>{portfolio.publishedAt}</p> */}
      <ConvertDate dateISO={portfolio.createdAt} />

      <div
        className={`${styles.post} ${styles.blogImg}`}
        dangerouslySetInnerHTML={{ __html: `${portfolio.url}` }}
      ></div>
      <div>{portfolio.contents}</div>
    </main>
  );
}
