import data from "../asset/json/data.json";

const About = props => {
  const infos = data.info.company;
  const histories = data.info.history;
  return (
    <div className="about">
      <h3>About us</h3>
      <h4>会社概要</h4>
      <ul>
        {infos.map((info, i) => (
          <li key={i}>
            <h5>{info.title}</h5>
            <p>{info.item}</p>
          </li>
        ))}
      </ul>
      <h4>沿革</h4>
      <ul>
        {histories.map((history, i) => (
          <li key={i}>
            <h5>{history.title}</h5>
            <p>{history.item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
