import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import ConvertDate from "../../components/convert-date";

//SG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  console.log(context);
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);

  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      {/* <p className={styles.publishedAt}>{blog.publishedAt}</p> */}
      <ConvertDate dateISO={blog.createdAt} />
      <div
        className={styles.post}
        dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
      ></div>
    </main>
  );
}
