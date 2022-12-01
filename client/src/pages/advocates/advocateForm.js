import { Box, Button, TextField, Select, FormControl, InputLabel, NativeSelect } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { registerClient } from "../../util/fetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdvocateForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const history = useNavigate();
  const notify = () => toast.success("Advocate Successfully created")


  const handleFormSubmit =  (values) => {

    
    
    axios.post("http://localhost:5000/api/advocate",{
      Name: values.Name,
      LastName: values.LastName,
      Gender: values.Gender,
      CivilStatus: values.CivilStatus,
      City: values.City,
      Location: values.Location,
      Address: values.Address,
      Street: values.Street,
      HouseNumber: values.HouseNumber,
      DoorNumber: values.DoorNumber,
      StairsNumber: values.StairsNumber,
      Postal: values.Postal,
      Email: values.Email,
      Bank: values.Bank,
      IBAN: values.IBAN,
      SwiftCode: values.SwiftCode,
      Department: values.Department
    }).catch(function (error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request)
      } else {
        console.log('Error', error.message);
      }
    }).finally(
      notify(),
      history('/advocate')
    )
    
    
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
          submitForm,
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
                value={values.Name}
                name="Name"
                error={!!touched.Name && !!errors.Name}
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Surname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.LastName}
                name="LastName"
                error={!!touched.LastName && !!errors.LastName}
               
                sx={{ gridColumn: "span 2" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Gender"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Gender}
                name="Gender"
                error={!!touched.Gender && !!errors.Gender}
                sx={{ gridColumn: "span 1" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Email}
                name="Email"
                error={!!touched.Email && !!errors.Email}
                sx={{ gridColumn: "span 1" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.City}
                name="City"
                error={!!touched.City && !!errors.City}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Address}
                name="Address"
                error={!!touched.Address && !!errors.Address}
                
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Location"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Location}
                name="Location"
                error={!!touched.Location && !!errors.Location}
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Street"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Street}
                name="Street"
                error={!!touched.Street && !!errors.Street}
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Civil Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CivilStatus}
                name="CivilStatus"
                error={!!touched.CivilStatus && !!errors.CivilStatus}
               
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="House Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.HouseNumber}
                name="HouseNumber"
                error={!!touched.HouseNumber && !!errors.HouseNumber}
        
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Door Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.DoorNumber}
                name="DoorNumber"
                error={!!touched.DoorNumber && !!errors.DoorNumber}
              
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Stairs Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.StairsNumber}
                name="StairsNumber"
                error={!!touched.StairsNumber && !!errors.StairsNumber}
             
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Postal"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Postal}
                name="Postal"
                error={!!touched.Postal && !!errors.Postal}
              
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Bank"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Bank}
                name="Bank"
                error={!!touched.Bank && !!errors.Bank}
               
                sx={{ gridColumn: "span 2" }}
              />
              
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="IBAN"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.IBAN}
                name="IBAN"
                error={!!touched.IBAN && !!errors.IBAN}
             
                sx={{ gridColumn: "span 2" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Swift Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.SwiftCode}
                name="SwiftCode"
                error={!!touched.SwiftCode && !!errors.SwiftCode}
           
                sx={{ gridColumn: "span 1" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Department"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.Department}
                name="Department"
                error={!!touched.Department && !!errors.Department}
           
                sx={{ gridColumn: "span 1" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Salary"
                onBlur={handleBlur}
                onChange={handleChange}
                name="Salary"
           
                sx={{ gridColumn: "span 1" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="number"
                label="AdministrativeTax"
                onBlur={handleBlur}
                onChange={handleChange}
                name="AdministrativeTax"
           
                sx={{ gridColumn: "span 1" }}
              />
                <FormControl fullWidth>
                 <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    IsDisabled
                 </InputLabel>
                 <NativeSelect
                    defaultValue={"ID"}
                    inputProps={{
                        name: "IsDisabled",
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


const checkoutSchema = yup.object().shape({
  Name: yup.string().required("required"),
  LastName: yup.string().required("required"),
  Gender: yup.string().required("required"),
  CivilStatus: yup.string().required("required"),
  City: yup.string().required("required"),
  Location: yup.string().required("required"),
  Address: yup.string().required("required"),
  Street: yup.string().required("required"),
  HouseNumber: yup.string().required("required"),
  DoorNumber: yup.string().required("required"),
  StairsNumber: yup.string().required("required"),
  Postal: yup.string().required("required"),
  Email: yup.string().email("invalid email").required("required"),
  Bank: yup.string().required("required"),
  IBAN: yup.string().required("required"),
  SwiftCode: yup.string().required("required"),
  Department: yup.string().required("required"),
  
  
});
const initialValues = {
  Name: "",
  LastName: "",
  Gender: "",
  CivilStatus: "",
  City: "",
  Location: "",
  Address: "",
  Street: "",
  HouseNumber: "",
  DoorNumber: "",
  StairsNumber: "",
  Postal: "",
  Email: "",
  Bank: "",
  IBAN: "",
  SwiftCode: "",
  Department: ""
};


export default AdvocateForm;