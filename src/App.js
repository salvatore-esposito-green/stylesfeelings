import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import SectionHero from "./sections/SectionHero";
import SectionLockup from "./sections/SectionLockup";
import SectionOverflow from "./sections/SectionOverflow";
import BlockQuotes from "./components/BlockQuotes";
import GridGallerySection from "./sections/GridGallerySection";
import SlideShow from "./components/SlideShow";
import SectionProject from "./sections/SectionProject";
import Form from "./sections/Form";
import Footer from "./sections/Footer";

import {
  chiSiamo,
  chiSiamoEn,
  mission,
  missionEn,
  slideShow,
  project,
  projectEn,
  projectArray,
  gallery,
} from "./assets/data";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <article>
        <SectionHero />
        <Switch>
          <Route exact path="/">
            <SectionLockup
              h1={chiSiamo.h1}
              h2={chiSiamo.h2()}
              p={chiSiamo.p()}
              p2={chiSiamo.p2()}
            />
            <SectionOverflow />
            <BlockQuotes />
            <GridGallerySection gallery={gallery} />
            <SectionLockup h2={mission.h2()} p={mission.p()} />
            <SlideShow gallery={slideShow} />
            <SectionLockup white h2={project.h2()} p={project.p()} />
            <SectionProject project={projectArray} />
            <SectionLockup white p={project.p2()} />
          </Route>
          <Route exact path="/en">
            <SectionLockup
              h1={chiSiamoEn.h1}
              h2={chiSiamoEn.h2()}
              p={chiSiamoEn.p()}
              p2={chiSiamoEn.p2()}
            />
            <SectionOverflow />
            <BlockQuotes />
            <GridGallerySection gallery={gallery} />
            <SectionLockup h2={missionEn.h2()} p={missionEn.p()} />
            <SlideShow gallery={slideShow} />
            <SectionLockup white h2={projectEn.h2()} p={projectEn.p()} />
            <SectionProject project={projectArray} />
            <SectionLockup white p={projectEn.p2()} />
          </Route>
        </Switch>
        <Form />
        <Footer />
      </article>
    </Router>
  );
}

export default App;
