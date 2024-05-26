import Link from "next/link";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-6">
      <Link
        href="https://github.com/ceyhunozyilmaz"
        target="_blank"
        className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ceyhun-ozy%C4%B1lmaz/"
        target="_blank"
        className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
      >
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default Socials;
