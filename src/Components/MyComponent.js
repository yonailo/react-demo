import "./MyComponent.css";

function MyComponent({ name, color }) {
  return (
    <div className="nameItem" style={{ color: color }}>
      {name === "Juan Rodriguez" ? (
        <div className="label">TOP employee !! :</div>
      ) : (
        <div className="label">Employee :</div>
      )}

      <div className="value">&nbsp;{name}</div>
    </div>
  );
}

export default MyComponent;
