'use client'

import ReactFullpage from "@fullpage/react-fullpage";
import Image from "next/image";
import { useState } from "react";
import '@animated-burgers/burger-squeeze/dist/styles.css'
import MainSection from "@/components/MainSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Burger from '@animated-burgers/burger-squeeze'
import Hamburger from "hamburger-react";

export default function Home() {
  const [mobile, setMobile] = useState(false);
  const anchors = ["Home", "About", "Projects"];
  const [menuActive, setMenuActive] = useState(false);

  const verifyMenuActive = () => {
    if (menuActive) {
      setMenuActive(false);
    }
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth < 570) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });
  return (
    <>
      <div className={`transition-effect ${menuActive ? 'menu-content' : 'main-content'}`}>
        <div className={`${menuActive ? '' : 'hidden'}`}>
          <span>aaa</span>
        </div>
      </div>
      <header>
        <nav aria-label="Contact menu" className={`shadow contact-menu ${menuActive ? 'open': 'close'}`}>
          <ul itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement" className="cross-site-nav">
            <li><a href="https://olaolu.dev/work">My Work</a></li>
            <li><a href="https://olaolu.dev/shelf">My Shelf</a></li>
            <li><a href="https://olaolu.dev/resume" target="_blank" rel="noreferrer noopener">My Résumé</a></li>
          </ul>
          <div className="basic-contact BsRLL">
            <span className="say-hello">Say Hello</span>
            <ul>
              <li><a href="mailto:hello@olaolu.dev">hello@olaolu.dev</a></li>
              <li><a href="https://t.me/mrolaolu" aria-label="t dot me forward slash mrolaolu" target="_blank" rel="noreferrer noopener">t.me/mrolaolu</a></li>
            </ul>
          </div>
          <ul className="social-contact iMAreF">
            <li><a href="https://twitter.com/mrolaolu" aria-label="Olaolu on Twitter" target="_blank" rel="noreferrer noopener">TW</a></li>
            <li><a href="https://github.com/whizkydee" aria-label="Olaolu on GitHub" target="_blank" rel="noreferrer noopener">GH</a></li>
            <li><a href="https://linkedin.com/in/mrolaolu" aria-label="Olaolu on LinkedIn" target="_blank" rel="noreferrer noopener">LN</a></li>
            <li><a href="https://youtube.com/channel/UC5UiydmTsiN17NmsYmmWqEA" aria-label="Olaolu's YouTube channel" target="_blank" rel="noreferrer noopener">YT</a></li>
          </ul>
        </nav>
        <div className="btn-menu" >
          <Hamburger toggled={menuActive} toggle={() => setMenuActive(!menuActive)} />
        </div>
      </header>
      <main className={`flex min-h-screen w-full ${menuActive ? 'hidden' : ''}`}>
        {!mobile && !menuActive ? <ReactFullpage
          //fullpage options

          anchors={anchors}
          navigation
          navigationTooltips={anchors}
          licenseKey={'YOUR_KEY_HERE'}
          scrollingSpeed={1000} /* Options here */

          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <MainSection />
                <AboutSection />
                <ProjectsSection />
              </ReactFullpage.Wrapper>
            );
          }}
        /> :
          <div className="w-full">
            <MainSection />
            <AboutSection />
            <ProjectsSection />
          </div>}
      </main>
    </>
  );
}
