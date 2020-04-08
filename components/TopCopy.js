import Button from "./Button";
const TopCopy = () => {
  const name = "Get started!"
  return (
    <div className="top-copy" id="home">
      <div className="copy-container">
        <h1>Let's set your goals and achieve it!</h1>
        <p>
          私たちは、夢や目標を持って学習し、それにより成長を続ける方を応援します。
          <br />
          ゴールできた時の喜びを忘れずに、さらなる成長に繋げましょう！
        </p>
      </div>
      <Button name={name} url={"#services"}/>
    </div>
  );
};



export default TopCopy;