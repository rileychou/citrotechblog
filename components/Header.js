import Link from "next/link";

export default function Header(props) {
  return (
    <header className="header">
      <nav
        className="nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div>
          <Link href="/">
            <h1>Citro Tech</h1>
          </Link>
          <h3>Official Blog</h3>
        </div>
        <div classname="links">
          <h3><a href="https://rileychou.github.io/CitroTechWebsite/" target="_blank">Back to main page</a></h3>
        </div>
        <div>
          <Link href={`${typeof window !== "undefined" &&
          window.location.pathname == "/info" ?
          "/" : "/info"}`}>
            <h1>{`${typeof window !== "undefined" &&
          window.location.pathname == "/info" ?
          "close" : "info"}`}</h1>
          </Link>
        </div>
      </nav>
      <style jsx>
        {`
          h1 {
            margin-bottom: 0;
          }
          h1:hover {
            cursor: pointer;
          }
          .links {
            display: flex;
            flex-direction: row;
            margin-top: 15px;
          }
          .links a {
            display: flex;
            align-items: center;
            text-decoration: none;
          }
          nav {
            padding: 1.5rem 1.25rem;
            border-bottom: 1px solid #ebebeb;
            display: flex;
            justify-content: space-between;
            flex-direction: row;
            align-items: center;
          }
          @media (min-width: 768px) {
            .header {
              height: 100vh;
              position: fixed;
              left: 0;
              top: 0;
            }
            .nav {
              padding: 2rem;
              width: 30vw;
              height: 100%;
              border-right: 1px solid #ebebeb;
              border-bottom: none;
              flex-direction: column;
              align-items: flex-start;
            }
          }
        `}
      </style>
    </header>
  );
}

