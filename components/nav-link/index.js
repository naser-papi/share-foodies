"use client";
import Link from "next/link"
import  {usePathname} from "next/navigation";
import classes from "./styles.module.css";
export const NavLink = ({href,children}) => {
  const pathName = usePathname();
  return (
    <Link href={href} className={pathName===href? `${classes.link} ${classes.active}`: classes.link}>{children}</Link>
  )
}
