import * as yup from "yup"; 

const regexEmail =
/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regexPassword =
/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;


export const mySchema=yup.object().shape({
    name:yup.string().max(8,'invalid name').required('required'),
    email:yup.string().matches(regexEmail,{message:"email invalid"}).required('required'),
    password:yup.string().max(16).matches(regexPassword,{message:"please create stronger password and (aB1)"}).required('required'),
    confirmPassword:yup.string().oneOf([yup.ref("password"),null],"passwords must match").required('required'),
    check:yup.boolean().oneOf([true],'please accept terms of service'),
    
})