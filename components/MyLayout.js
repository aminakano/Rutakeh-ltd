import Header from "./header/Header";
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