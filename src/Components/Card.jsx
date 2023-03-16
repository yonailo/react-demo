function Card({ title, children }) {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: 40,
        padding: 20,
        margin: 50,
      }}
    >
      {title && <h1>{title}</h1>}
      {children}
    </div>
  );
}

export default Card;
