import Link from "next/link"
import React from "react"
import Image from "next/image"
import Logo from "@/../public/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <>
            <div className="nav">
                <div className="nav-part1">
                    <Image
                        src={Logo}
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </div>

                <div className="nav-part2">
                    <Link href={"/"} className="nav-elements">Home</Link>
                    <Link href={"/"} className="nav-elements">Create Blogs</Link>
                    <Link href={"/"} className="nav-elements">About Us</Link>
                    <Link href={"/"} className="nav-elements">Contact Us</Link>
                    <FontAwesomeIcon icon={faBars}  className="menu"/>
                </div>
            </div>
        </>
    )
}