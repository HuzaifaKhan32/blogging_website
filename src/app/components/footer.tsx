import Insta from "@/../public/Instagram.png"
import LinkedIn from "@/../public/linkedIn.png"
import Github from "@/../public/github.png"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="back-to-top">
                    Back to top
                </div>
                <div className="content">
                    <div className="social-links">
                        <Link href={"https://www.instagram.com/hzaifa_nadeem/"}>
                        <Image
                            className="social"
                            src={Insta}
                            width={200}
                            height={200}
                            alt="Instagram"
                        />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/huzaifa-khan-b6bb76308/"}>
                        <Image
                            className="social"
                            src={LinkedIn}
                            width={200}
                            height={200}
                            alt="Instagram"
                        />
                        </Link>
                        <Link href={"https://github.com/HuzaifaKhan32"}>
                        <Image
                            className="social"
                            src={Github}
                            width={200}
                            height={200}
                            alt="Instagram"
                        />
                        </Link>
                    </div>
                    <div className="credit">
                        Created with ❤️ by Huzaifa Nadeem
                    </div>
                </div>
            </div>
        </>
    )
}