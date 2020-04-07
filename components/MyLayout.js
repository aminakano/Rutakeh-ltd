import Header from "./Header";
import Footer from "./Footer";

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // background: "#17a2b8",
  // border: "1px solid #DDD"
};

const withLayout = Page => {
  return () => (
    <div style={layoutStyle}>
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default withLayout;
