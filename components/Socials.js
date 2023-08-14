import Link from "next/link";
import {
  RiInstagramLine,
  RiFacebookBoxFill,
  RiLinkedinFill,
  RiWhatsappLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div target="_blank" className="flex items-center gap-x-5 text-2xl">
      <Link
        href={"https://www.linkedin.com/in/zakifadlan/"}
        target="_blank"
        className="hover:text-blue-400 transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"https://www.instagram.com/zackyfdlnn/"}
        target="_blank"
        className="hover:text-red-400 transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/zaki.f03"}
        target="_blank"
        className="hover:text-blue-600 transition-all duration-300"
      >
        <RiFacebookBoxFill />
      </Link>
      <Link
        href={"https://wa.me/+6282130442643"}
        target="_blank"
        className="hover:text-green-500 transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
