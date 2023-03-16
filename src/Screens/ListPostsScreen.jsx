import { useSelector } from "react-redux";
import Post from "../Components/Post";
import Nav from "../Components/Navigation";

export default function ListPostsScreen() {
  const posts = useSelector((state) => state.posts);
  //console.log(posts);

  return (
    <>
      <Nav />
      {posts.length > 0 &&
        posts.map((post) => {
          return <Post key={crypto.randomUUID()} {...post} />;
        })}

      {posts.length === 0 && <p>No posts yet</p>}
    </>
  );
}
