export default function Post({ title, content }) {
  return (
    <div className="post">
      <h1>{title}</h1>
      <div>{content}</div>
    </div>
  );
}
