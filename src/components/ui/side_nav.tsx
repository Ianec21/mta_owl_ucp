"use client";
import Link from "next/link"
import { usePathname } from "next/navigation";

const navButtons = [
  { id: "nav_button_0", title: "Home", href: "/" },
  { id: "nav_button_1", title: "Characters", href: "/characters" },
  { id: "nav_button_2", title: "Factions", href: "/factions" },
  { id: "nav_button_3", title: "Premium Central", href: "/premium" },
]

const SideNavigation = () => {
  const pathname = usePathname();

  if(pathname !== "/sign-in" && pathname !== "/sign-up"){
    return (
      <nav className="bg-secondary rounded-md flex flex-col w-[350px]">
        <div className="p-5 bg-secondary" style={{
          borderTopLeftRadius: 5
        }}>
          <p className="text-primary font-bold text-xl">MTA UCP OWL</p>
        </div>
  
        <div className="flex flex-col p-2 gap-2">
          {navButtons.map(button => 
            <div key={button.id} className="relative">
              { pathname === button.href && <div className="absolute rounded-md w-full h-full bg-primary opacity-10"/>}
              <SideNavigationButton title={button.title} href={button.href} current={pathname === button.href}/>
            </div>
            )}
        </div>
      </nav>
    )
  } else return <></>
}

const SideNavigationButton = ({
  title,
  href,
  current
} : { title: string, href: string, current: boolean } ) => {
  return (
    <div className={`hover:cursor-pointer flex items-center relative p-2`}>
      { current && <div className="bg-primary w-[5px] h-[5px] rounded-lg mr-2"/>}
      <Link className="text-2sm" href={href}>{ title }</Link>
    </div>
  )
}

export default SideNavigation;