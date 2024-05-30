import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto  p-2 min-h-[100px] flex justify-between items-center">
      <h1 className="text-xl">Developed by Asloob</h1>
      <div className="flex gap-2">
        <Link href="/">
          <Image src="/images/1.png" width={20} height={20} alt="image" />
        </Link>
        <Link href="/">
          <Image src="/images/2.png" width={20} height={20} alt="image" />
        </Link>
        <Link href="/">
          <Image src="/images/3.png" width={20} height={20} alt="image" />
        </Link>
        <Link href="/">
          <Image src="/images/4.png" width={20} height={20} alt="image" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
