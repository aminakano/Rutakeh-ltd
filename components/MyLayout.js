import Header from "./Header";

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
    </div>
  );
}

export default withLayout;
