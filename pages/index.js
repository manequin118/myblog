import Link from "next/link";
import { client } from "../libs/client";
import styles from "../styles/Home.module.scss";

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

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <article className={styles.article} key={blog.id}>
          <time>{blog.createdAt}</time>
          <Link href={`blog/${blog.id}`}>
            <a className={styles.anker} href="">
              {blog.title}
            </a>
          </Link>
        </article>
      ))}
    </div>
  );
}
