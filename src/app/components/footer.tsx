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
                    <div className="terms">

                        <div className="terms-condition">
                            <p>Terms of Service</p>
                            <p>Privacy</p>
                            <p>Content Policy</p>
                        </div>
                        <div className="social-links">
                            <Link href={"https://www.instagram.com/hzaifa_nadeem/"} className="links">
                                <Image
                                    className="social"
                                    src={Insta}
                                    width={200}
                                    height={200}
                                    alt="Instagram"
                                />
                            </Link>
                            <Link href={"https://www.linkedin.com/in/huzaifa-khan-b6bb76308/"} className="links">
                                <Image
                                    className="social"
                                    src={LinkedIn}
                                    width={200}
                                    height={200}
                                    alt="Instagram"
                                />
                            </Link>
                            <Link href={"https://github.com/HuzaifaKhan32"} className="links">
                                <Image
                                    className="social"
                                    src={Github}
                                    width={200}
                                    height={200}
                                    alt="Instagram"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="credit">
                        <p className="copyright">All © rights reserved by Blogger 2024.</p>
                        Created with ❤️ by Huzaifa Nadeem
                    </div>
                </div>
            </div>
        </>
    )
}