export default function ButtonBack(props) {
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <button className="button-64" role="button" onClick={props.func}>
      <span className="text">{props.text}</span>
    </button>
  );
}
