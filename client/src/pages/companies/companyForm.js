import { Box, Button, TextField, Select, FormControl, InputLabel, NativeSelect, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tokens } from "../../theme";
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';

const CompanyForm = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const colors = tokens(theme.palette.mode);
  const notify = () => toast.success("Company Successfully created")
  const notifyError = () => toast.error("Company with this email exists!");

  const handleFormSubmit =  async (values, actions) => {

    
    
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
        notifyError()
        actions.resetForm();
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request){
        console.log(error.request)
      } else {
        console.log('Error', error.message);
      }
    }).then((error) =>{
      if(!error.response){
      notify()
      actions.resetForm();
      }
    }
      )
     
  };

  return (
    <Box m="20px">
      <ToastContainer hideProgressBar={true} autoClose={2000}/>
      <Header title="Add Company" subtitle="Fill in the companies information" />
      <KeyboardReturnOutlinedIcon />
      <Link to="/companies" style={{ textDecoration: 'none' }}>
      <Button variant="contained" sx={{ backgroundColor: colors.blueAccent[700], marginBottom: 2}}>Companies Table</Button>
      </Link>

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