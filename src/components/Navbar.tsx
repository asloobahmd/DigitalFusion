import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";
import ToggleButton from "./ToggleButton";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = async () => {
  const session = await getServerSession(options);

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center h-[70px] p-2">
        <Link href="/" className="text-3xl font-semibold">
          DigitalFusion
        </Link>
        <div className=" hidden md:flex gap-4 items-center">
          <ToggleButton />
          {links.map((link) => (
            <Link key={link.id} href={link.url}>
              {link.title}
            </Link>
          ))}
          {session?.user ? (
            <LogoutBtn />
          ) : (
            <Link
              href="/dashboard/login"
              className=" px-4 py-2 bg-green-600 text-white rounded-sm"
            >
              Sign in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
