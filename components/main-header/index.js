import Link from "next/link"
import Image from "next/image"
import { NavLink } from "../nav-link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css";
import Background from "./background";

export default function MainHeader() {
    return (        
        <>
        <Background/>
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={logoImg} alt="a plate full of food"/>                
                <span>NextLevel Food</span>
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><NavLink href="/meals">Browse Meals</NavLink></li>
                    <li><NavLink href="/community">Food Community</NavLink></li>
                </ul>
            </nav>
        </header>

        </>
        
    );
}
