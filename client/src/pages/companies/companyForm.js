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

const CompanyForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const history = useNavigate();
  const notify = () => toast.success("Company Successfully created")


  const handleFormSubmit =  async (values) => {

    
    
    await axios.post("http://localhost:5000/api/company",{
        CName: values.CName,
        CPhonenumber: values.CPhonenumber,
        CAddress: values.CAddress,
        CEmail: values.CEmail,
        CBank: values.CBank,
        CIBAN: values.CIBAN,
        CSwiftCode: values.CSwiftCode,
        ComType: values.ComType,
        
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
        history('/companies')
    )
    
    
  };

  return (
    <Box m="20px">
      <Header title="Add Company" subtitle="Fill in the companies information" />

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
                label="Company Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CName}
                name="CName"
                error={!!touched.CName && !!errors.CName}
                
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CPhonenumber}
                name="CPhonenumber"
                error={!!touched.CPhonenumber && !!errors.CPhonenumber}
               
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CEmail}
                name="CEmail"
                error={!!touched.CEmail && !!errors.CEmail}
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CAddress}
                name="CAddress"
                error={!!touched.CAddress && !!errors.CAddress}
                
                sx={{ gridColumn: "span 1" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company Bank"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CBank}
                name="CBank"
                error={!!touched.CBank && !!errors.CBank}
               
                sx={{ gridColumn: "span 2" }}
              />
              
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company IBAN"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CIBAN}
                name="CIBAN"
                error={!!touched.CIBAN && !!errors.CIBAN}
             
                sx={{ gridColumn: "span 2" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company Swift Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.CSwiftCode}
                name="CSwiftCode"
                error={!!touched.CSwiftCode && !!errors.CSwiftCode}
           
                sx={{ gridColumn: "span 1" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Company Type"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.ComType}
                name="ComType"
                error={!!touched.ComType && !!errors.ComType}
           
                sx={{ gridColumn: "span 1" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Company
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
  CName: yup.string().required("required"),
  CPhonenumber: yup.string().required("required"),
  CAddress: yup.string().required("required"),
  CEmail: yup.string().email("invalid email").required("required"),
  CBank: yup.string().required("required"),
  CIBAN: yup.string().required("required"),
  CSwiftCode: yup.string().required("required"),
  ComType: yup.string().required("required"),
});
const initialValues = {
  CName: "",
  CPhonenumber: "",
  CAddress: "",
  CEmail: "",
  CBank: "",
  CIBAN: "",
  CSwiftCode: "",
  ComType: ""
};


export default CompanyForm;