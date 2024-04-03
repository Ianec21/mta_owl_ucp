"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TAuth, useAuth } from "../providers/auth-provider";
import { Context } from "react";
import { DoorOpen } from "lucide-react";

const TopNavigation = () => {
  const pathname = usePathname();
  const auth: TAuth = useAuth();

  if(pathname !== "/sign-in" && pathname !== "/sign-up"){
    return (
      <nav className="h-[200px] w-full flex items-center justify-between p-10">
        <p className="text-3xl font-bold text-primary">MTA UCP OWL</p>

        {
          auth.loggedIn ? <TopNavigationLoggedIn auth={auth}/> : <TopNavigationLoggedOut auth={auth}/>
        }
      </nav>
  )} else return <></>
}

const TopNavigationLoggedIn = ( { auth }: { auth: TAuth } ) => {
  return (
    <div className="flex">
      <div className="flex gap-2">
        <p>Welcome, <span className="font-bold">{auth.name}</span></p>
        <DoorOpen onClick={() => alert("logout")}/>
      </div>
    </div>
  )
}

const TopNavigationLoggedOut = ( { auth }: { auth: TAuth } ) => {
  return (
    <div>
      <Link href={"/sign-in"}>Sign In</Link>
    </div>
  )
}

export default TopNavigation;