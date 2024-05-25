import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Cey <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* DESKTOP NAV & HIRE ME BUTTON */}
        <div className="hidden xl:flex">
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
