const ListMapping = ({title, array}) => (
  <>
    <h4>{title}</h4>
    <ul>
      {array.map((info, i) => (
        <li key={i}>
          <h5>{info.title}</h5>
          <p>{info.item}</p>
        </li>
      ))}
    </ul>
  </>
);

export default ListMapping;