import Link from "next/link";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.body}>
      <ul className={styles.navTitle}>
        <li>
          <Link href={`/`}>home</Link>
        </li>
        <li>
          <Link href={`profile`}>plofile</Link>
        </li>
        <li>
          <Link href={`blog`}>blog</Link>
        </li>
        <li>
          <Link href={`portfolio`}>portfolio</Link>
        </li>
        <li>
          <Link href={`blog`}>works</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
