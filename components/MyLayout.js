// import "../asset/fonts/fonts.scss";
import Header from "./Header";
import Footer from "./Footer";
import HeadTag from "./HeadTag";

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
