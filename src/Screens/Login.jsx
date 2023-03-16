import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { FormControl, MenuItem, FormHelperText } from "@mui/material";
import * as Yup from "yup";
import Nav from "../Components/Navigation";

function Login() {
  const validate = (values) => {
    const errors = {};

    if (values.pass1 !== values.pass2) {
      errors.pass2 = "The pass1 & pass2 are not the same.";
    }

    return errors;
  };

  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      pass1: "",
      pass2: "",
      type: "",
    },
    validate,
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      pass1: Yup.string()
        .min(8, "Must be minimum 8 characters")
        .required("Required"),
      pass2: Yup.string()
        .min(8, "Must be minimum 8 characters")
        .required("Required"),
      type: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Nav />
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <p>Please login using your email address and password below :</p>

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
          id="pass1"
          type="password"
          label="Password"
          onChange={formik.handleChange}
          value={formik.values.pass1}
          error={formik.touched.pass1 && formik.errors.pass1 ? true : false}
          helperText={
            formik.touched.pass1 && formik.errors.pass1
              ? formik.errors.pass1
              : false
          }
        />

        <TextField
          variant="filled"
          id="pass2"
          type="password"
          label="Repeat password"
          onChange={formik.handleChange}
          value={formik.values.pass2}
          error={formik.touched.pass2 && formik.errors.pass2 ? true : false}
          helperText={
            formik.touched.pass2 && formik.errors.pass2
              ? formik.errors.pass2
              : false
          }
        />

        <FormControl
          error={formik.touched.type && formik.errors.type ? true : false}
        >
          <Select
            labelId="type"
            id="type"
            value={formik.values.type}
            label="Account type"
            onChange={(e) => formik.setFieldValue("type", e.target.value)}
          >
            <MenuItem value="">- None -</MenuItem>
            <MenuItem value={10}>Manager</MenuItem>
            <MenuItem value={20}>Employee</MenuItem>
            <MenuItem value={30}>Stagiaire</MenuItem>
          </Select>
          {formik.touched.type && formik.errors.type && (
            <FormHelperText>Error : {formik.errors.type}</FormHelperText>
          )}
        </FormControl>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}

export default Login;
