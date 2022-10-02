import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import ConvertDate from "../../components/convert-date";

//SG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log(context);
  const data = await client.get({ endpoint: "works", contentId: id });

  return {
    props: {
      works: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "works" });
  const paths = data.contents.map((content) => `/works/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default function Works({ works }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{works.title}</h1>
      {/* <p className={styles.publishedAt}>{works.publishedAt}</p> */}
      <ConvertDate dateISO={works.createdAt} />

      <div
        className={`${styles.post} ${styles.blogImg}`}
        dangerouslySetInnerHTML={{ __html: `${works.url}` }}
      ></div>
      <div>{works.contents}</div>
    </main>
  );
}
