"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import Styles from "../../assets/styles/Header.module.css"

const Header = () => {
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();

    return (
        <>
            <nav className={`navbar navbar-expand-lg ${Styles.header}`}>
                <div className="container">
                    <div className={`logo-container ${Styles.logoContainer}`}>
                        <Link href="/" legacyBehavior>
                            <a className="navbar-brand">
                                {/* <Image
                                    src={logo}
                                    alt="Logo"
                                    width={150}
                                    height={60}
                                    className='img-fluid'
                                /> */}
                                Color Vision
                            </a>
                        </Link>     
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setExpanded(expanded ? false : "expanded")}
                        aria-expanded={expanded ? true : false}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
                        <ul className="navbar-nav ms-auto">
                            <li className={router.pathname == "/" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
                                <Link href="/" legacyBehavior>
                                    <a className="nav-link ">Home</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/color-blind-test" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
                                <Link href="/color-blind-test" legacyBehavior>
                                    <a className="nav-link">Color Blind Test</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/blog" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
                                <Link href="/blog" legacyBehavior>
                                    <a className="nav-link">Blog</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/about-us" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
                                <Link href="/about-us" legacyBehavior>
                                    <a className="nav-link">About Us</a>
                                </Link>
                            </li>
                            <li className={router.pathname == "/language" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
                                <Link href="/language" legacyBehavior>
                                    <a className="nav-link">En</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;


// "use client"
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useState } from 'react'
// import { useRouter } from "next/navigation"
// import Styles from "../../assets/styles/Header.module.css"

// const Header = () => {
//     const [expanded, setExpanded] = useState(false);
//     const router = useRouter();
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg">
//                 <div className="container">
//                     <Link href="/" legacyBehavior>
//                         <a className="navbar-brand">
//                             Color Vision
//                             {/* <Image
//              src={logo }
//              alt="Logo"
//              width={150}
//              height={60}
//              className='img-fluid'
//            /> */}
//                         </a>
//                     </Link>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         onClick={() => setExpanded(expanded ? false : "expanded")}
//                         aria-expanded={expanded ? true : false}
//                         aria-label="Toggle navigation"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className={`collapse navbar-collapse ${expanded ? 'show' : ''}`}>
//                         <ul className="navbar-nav ms-auto">
//                             <li className={router.pathname == "/" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
//                                 <Link href="/" legacyBehavior>
//                                     <a className="nav-link ">Home</a>
//                                 </Link>
//                             </li>
//                             <li className={router.pathname == "/color-blind-test" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
//                                 <Link href="/color-blind-test" legacyBehavior>
//                                     <a className="nav-link">Color Blind Test</a>
//                                 </Link>
//                             </li>
//                             <li className={router.pathname == "/blog" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
//                                 <Link href="/blog" legacyBehavior>
//                                     <a className="nav-link">Blog</a>
//                                 </Link>
//                             </li>
//                             <li className={router.pathname == "/about-us" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
//                                 <Link href="/about-us" legacyBehavior>
//                                     <a className="nav-link">About Us</a>
//                                 </Link>
//                             </li>
//                             <li className={router.pathname == "/language" ? `active nav-item ${Styles.navmenuItem}` : `nav-item ${Styles.navmenuItem}`}>
//                                 <Link href="/language" legacyBehavior>
//                                     <a className="nav-link">En</a>
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Header