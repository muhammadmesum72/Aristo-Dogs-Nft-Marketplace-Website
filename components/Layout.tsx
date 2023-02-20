import Head from "next/head";
import { useState } from "react"
import SideNav from "./SideNav"
import TopNav from "./TopNav"
// import {GlobalProvider}  from "../Context/GlobalContext"

const Layout = ({children}:any) => {
  const [isWalletConnect, setIsWalletConnect] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onConnect = () => {
    setIsWalletConnect((prev) => !prev);
  };
  const openMobMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  return (
    <div>
      <Head>
        <title>Dogs</title>
        <link rel="icon" href="/Logo.jpg" />
      </Head>
        <main>
            <TopNav isWalletConnect={isWalletConnect} onConnect={onConnect} openMobMenu= {openMobMenu} isMenuOpen={isMenuOpen} />
            <SideNav isMenuOpen={isMenuOpen} />
            {children}
        </main>
    </div>
  )
}

export default Layout
