import Header from "./Header";
import Footer from "./Footer";
import HeadTag from "./HeadTag";
import "../asset/fonts/fonts.scss";

const withLayout = Page => {
  return () => (
    <div>
      <HeadTag />
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default withLayout;
