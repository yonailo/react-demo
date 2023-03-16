export const CREATE_POST = "CREATE_POST";

export function addPost(title, content) {
  return {
    type: CREATE_POST,
    payload: {
      title,
      content,
    },
  };
}
