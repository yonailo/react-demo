import { CREATE_POST } from "../Action/postActions";

const initialState = {
  posts: [],
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        posts: [
          ...state.posts,
          { title: action.payload.title, content: action.payload.content },
        ],
      };
    default:
      break;
  }

  // Without this, state is empty on store creation !!
  return state;
}
