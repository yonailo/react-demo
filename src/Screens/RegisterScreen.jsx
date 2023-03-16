import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import Nav from "../Components/Navigation";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContextProvider";

function RegisterScreen() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
      firstname: "",
      lastname: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      pass: Yup.string()
        .min(8, "Must be minimum 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setUser({ ...values });
      navigate("/dashboard");
    },
  });

  return (
    <>
      <Nav />
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <p>Registration form :</p>

        <TextField
          variant="filled"
          id="email"
          label="Email address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email ? true : false}
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : false
          }
        />

        <TextField
          variant="filled"
          id="pass"
          type="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.pass}
          error={formik.touched.pass && formik.errors.pass ? true : false}
          helperText={
            formik.touched.pass && formik.errors.pass
              ? formik.errors.pass
              : false
          }
        />

        <TextField
          variant="filled"
          id="firstname"
          label="Firstname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          error={
            formik.touched.firstname && formik.errors.firstname ? true : false
          }
          helperText={
            formik.touched.firstname && formik.errors.firstname
              ? formik.errors.firstname
              : false
          }
        />

        <TextField
          variant="filled"
          id="lastname"
          label="Lastname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          error={
            formik.touched.lastname && formik.errors.emalastnameil
              ? true
              : false
          }
          helperText={
            formik.touched.lastname && formik.errors.lastname
              ? formik.errors.lastname
              : false
          }
        />

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default RegisterScreen;
