import Header from "./Header";
import Footer from "./Footer";
import HeadTag from "./HeadTag";
import "../asset/fonts/fonts.scss";

const withLayout = Page => {
  return () => (
    <>
      <HeadTag />
      <Header />
      <Page />
      <Footer />
    </>
  );
}

export default withLayout;
