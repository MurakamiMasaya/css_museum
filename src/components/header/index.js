import Image from "next/image";
import Link from "next/link";

import { navList } from "../../data/nav";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
          <Image loader={({src}) => src} src="/vercel.svg" alt="vercel" width={177} height={40} />
      </Link>
      <nav>
        <ul className="nav">
          {navList.map((item) => {
            return (
              <li key={item}>
                <Link href={`/${item}`}>
                  <div className="link">{item}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
