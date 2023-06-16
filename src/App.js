import Header from "./components/Header";
import Home from "./Sections/Home/Home";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import { Hidden } from "@mui/material";
import SmallHeader from "./components/SmallHeader";

function App() {
  return (
    <div className="bg-neutral-900">
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
