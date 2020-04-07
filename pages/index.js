import "../asset/scss/main.scss";
import withLayout from "../components/MyLayout";
import TopCopy from "../components/TopCopy";
import Services from "../components/OurServices";


const Page = () => (
<div>
  <TopCopy />
  <Services />
</div>  
)


export default withLayout(Page);
