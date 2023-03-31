import "./cards.scss";

export default function Card01({ props }) {
  console.log(props);
  console.log(props.name);
  return (
    <div className="card01">
      <a href={props.link}>
        <img src={props.src} alt="thumbnail" />
        <div className="card01-container">
          <p className="card01-category">{props.category}</p>
          <h3>
            {props.name.substring(0, 50)}
            {props.name.length >= 50 ? "..." : ""}
          </h3>
          <p>
            {props.description.substring(0, 100)}
            {props.description.length >= 100 ? "..." : ""}
          </p>
        </div>
      </a>
    </div>
  );
}
