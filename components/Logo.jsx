import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[100px]"
        src="/logo.png"
        alt="PhotoFeed"
        height={100}
        width={100}
      />
    </Link>
  );
};

export default Logo;
