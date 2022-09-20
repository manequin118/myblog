import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link>
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link>
            <a>ポートフォリオ</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
