import Link from "next/link";
import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss";
import ConvertDate from "../../components/convert-date";

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

export default function Blog({ blog }) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <article className={styles.article} key={blog.id}>
          <ConvertDate dateISO={blog.createdAt} />
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
