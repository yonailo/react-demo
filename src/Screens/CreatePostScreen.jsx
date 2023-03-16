import Nav from "../Components/Navigation";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "../Store/Action/postActions";

export default function CreatePostScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(addPost(values.title, values.content));
      navigate("/listPosts");
    },
  });

  return (
    <>
      <Nav />

      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <p>Create post :</p>

        <TextField
          variant="filled"
          id="title"
          label="Title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <TextField
          variant="filled"
          id="content"
          type="content"
          label="Content"
          onChange={formik.handleChange}
          value={formik.values.content}
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
