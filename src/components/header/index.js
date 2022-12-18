import Image from "next/image";
import Link from "next/link";

export default function Header({ position }) {
  const navList = [
    "router",
    "multipage",
    "multipage_state",
    "layout",
    "head_script",
  ];
  return (
    <header
      className={position === "top" ? "header" : "headerBottom"}
    >
      <Link href="/">
        <div>
          <Image src="/vercel.svg" alt="vercel" width={177} height={40} />
        </div>
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
