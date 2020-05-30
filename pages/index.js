import withLayout from "../components/MyLayout";
import TopCopy from "../components/TopCopy";
import Services from "../components/OurServices";
import About from "../components/About";
import Contact from "../components/Contact";


const Page = () => (
<>
  <TopCopy />
  <Services />
  <About />
  <Contact />
</>  
)


export default withLayout(Page);
