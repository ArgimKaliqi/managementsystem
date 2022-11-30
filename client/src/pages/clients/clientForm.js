import { Box, Button, TextField, Select, FormControl, InputLabel, NativeSelect } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { registerClient } from "../../util/fetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const history = useNavigate()
  const [error, setError] = useState(null);

  const handleFormSubmit = async (values) => {
    console.log(values)

    await registerClient({
        Name: values.name,
        Surname: values.surname,
        Gender: values.gender,
        CivilStatus: values.civilstatus,
        City: values.city,
        Address: values.address,
        HouseNumber: values.housenumber,
        DoorNumber: values.doornumber,
        StairsNumber: values.stairsnumber,
        Postal: values.postal,
        Email: values.email,
        Status: values.lifestatus,
        Bank: values.bank,
        IBAN: values.iban,
        SwiftCode: values.swiftcode,
        Disease: values.disease,
    })
    .catch((error) => {
        if(error.response) {
            throw Error(
                "Client already exists, Try again"
            )
        } else if (error.request) {
            throw Error("HTTP REQUEST FAIL")
        } else {
            throw Error(error)
        }
    }).catch((error) => {
        setError(error.message)
    })
    .then((error) => {
        if(!error.response) {
            history('/clients')
        }
    })

  };

  return (
    <Box m="20px">
      <Header title="Add Clients" subtitle="Fill in the clients information" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Surname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.surname}
                name="surname"
                error={!!touched.surname && !!errors.surname}
                helperText={touched.surname && errors.surname}
                sx={{ gridColumn: "span 1" }}
              />
                <FormControl fullWidth sx={{ gridColumn: "span 1"}}>
                 <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Gender
                 </InputLabel>
                 <NativeSelect
                    onChange={handleChange}
                    error={touched.gender && !!errors.gender }
                    helperText={touched.gender && !!errors.gender }
                    inputProps={{
                        name: "gender",
                        id: 'uncontrolled-native',
                    }}
                    >
                        <option value={values.gender}>Male</option>
                        <option value={values.gender}>Female</option>
                    </NativeSelect>
                </FormControl>


              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name="city"
                error={!!touched.city && !!errors.city}
                helperText={touched.city && errors.city}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Civil Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.civilstatus}
                name="civilstatus"
                error={!!touched.civilstatus && !!errors.civilstatus}
                helperText={touched.civilstatus && errors.civilstatus}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="House Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.housenumber}
                name="housenumber"
                error={!!touched.housenumber && !!errors.housenumber}
                helperText={touched.housenumber && errors.housenumber}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Door Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.doornumber}
                name="doornumber"
                error={!!touched.doornumber && !!errors.doornumber}
                helperText={touched.doornumber && errors.doornumber}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Stairs Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.stairsnumber}
                name="stairsnumber"
                error={!!touched.stairsnumber && !!errors.stairsnumber}
                helperText={touched.stairsnumber && errors.stairsnumber}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Postal"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.postal}
                name="postal"
                error={!!touched.postal && !!errors.postal}
                helperText={touched.postal && errors.postal}
                sx={{ gridColumn: "span 1" }}
              />
               <FormControl fullWidth>
                 <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Status
                 </InputLabel>
                 <NativeSelect
                    error={touched.lifestatus && !!errors.lifestatus}
                    helperText={touched.lifestatus && !!errors.lifestatus}
                    inputProps={{
                        name: "lifestatus",
                        id: 'uncontrolled-native',
                    }}
                    >
                        <option value={values.lifestatus}>true</option>
                        <option value={values.lifestatus}>false</option>
                    </NativeSelect>
                </FormControl>

                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Bank"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.bank}
                name="bank"
                error={!!touched.bank && !!errors.bank}
                helperText={touched.bank && errors.bank}
                sx={{ gridColumn: "span 2" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="IBAN"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.iban}
                name="iban"
                error={!!touched.iban && !!errors.iban}
                helperText={touched.iban && errors.iban}
                sx={{ gridColumn: "span 2" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Swift Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.swiftcode}
                name="swiftcode"
                error={!!touched.swiftcode && !!errors.swiftcode}
                helperText={touched.swiftcode && errors.swiftcode}
                sx={{ gridColumn: "span 1" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Disease"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.disease}
                name="disease"
                error={!!touched.disease && !!errors.disease}
                helperText={touched.disease && errors.disease}
                sx={{ gridColumn: "span 1" }}
              />
                <FormControl fullWidth>
                 <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Worker ID
                 </InputLabel>
                 <NativeSelect
                    defaultValue={"ID"}
                    inputProps={{
                        name: "workerid",
                        id: 'uncontrolled-native',
                    }}
                    >
                        <option value={"No info"}>No info</option>
                        <option value={"No info"}>No info</option>
                    </NativeSelect>
                </FormControl>
                <FormControl fullWidth>
                 <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Advocate ID
                 </InputLabel>
                 <NativeSelect
                    defaultValue={"ID"}
                    inputProps={{
                        name: "advocateid",
                        id: 'uncontrolled-native',
                    }}
                    >
                        <option value={"No info"}>No info</option>
                        <option value={"No info"}>No info</option>
                    </NativeSelect>
                </FormControl>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  surname: yup.string().required("required"),
  gender: yup.string().required("required"),
  civilstatus: yup.string().required("required"),
  city: yup.string().required("required"),
  address: yup.string().required("required"),
  housenumber: yup.number().required("required"),
  doornumber: yup.number().required("required"),
  stairsnumber: yup.number().required("required"),
  postal: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  lifestatus: yup.string().required("required"),
  bank: yup.string().required("required"),
  iban: yup.string().required("required"),
  swiftcode: yup.string().required("required"),
  disease: yup.string().required("required"),
  
  
});
const initialValues = {
  name: "",
  surname: "",
  gender: false,
  civilstatus: "",
  city: "",
  address: "",
  housenumber: 0,
  doornumber: 0,
  stairsnumber: 0,
  postal: "",
  email: "",
  lifestatus: false,
  bank: "",
  iban: "",
  swiftcode: "",
  disease: ""
};

export default Form;