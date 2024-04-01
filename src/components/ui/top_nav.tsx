"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const TopNavigation = () => {
  const pathname = usePathname();

  if(pathname !== "/sign-in" && pathname !== "/sign-up"){
    return (
      <nav className="h-[200px] w-full flex items-center justify-between p-10">
        <p className="text-3xl font-bold text-primary">MTA UCP OWL</p>

        <Link href={"/sign-in"}>Sign In</Link>
      </nav>
  )} else return <></>
}

export default TopNavigation;