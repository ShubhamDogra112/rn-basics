import React  , {useEffect} from "react";
import { Formik } from "formik";
import {TouchableOpacity , View, Text , ActivityIndicator} from "react-native"
import * as yup from "yup";
import Input from "../../components/formElements/input"
import {styles} from "./styles"
import {connect} from "react-redux"
import {auth , clear_errors} from "../../store/actions/index"

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .required("This field is required")
    .email("Please enter a valid email"),
  password: yup.string().required("This field is required"),
});

const SignUp = (props) => {

  useEffect(()=>{
    props.clearErrors()
  },[])
  
  let btnText = <Text style={{color:'white',fontFamily:'Nunito-bold'}}>Submit</Text>
  if(props.loading){
    btnText = <ActivityIndicator size="large" color="white"/>
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        props.Auth(values.email , values.password , false)
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values , touched  , errors, isValid }) => (
        <View style={styles.container}>
          <Text style={styles.header}>SignUp</Text>
          <Input
            change={handleChange("email")}
            blur={handleBlur("email")}
            value={values.email}
            name="email"
            placeholder="Email"
            touched={touched.email}
            error={errors.email}
          />

        <Input
            change={handleChange("password")}
            blur={handleBlur("password")}
            value={values.password}
            name="password"
            placeholder="Password"
            touched={touched.password}
            error={errors.password}
          />

      <TouchableOpacity activeOpacity={0.4} style={styles.btn} onPress={handleSubmit} title="Submit" >
        {btnText}
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={1} onPress={()=>props.navigation.navigate('Login')}>
        <Text style={{marginTop:10}}>Already have an account ? Click here</Text>
      </TouchableOpacity>

          
        </View>
      )}
    </Formik>
  );
};

const mapStateToProps = state => {
  return{
    loading:state.auth.loading
  }
}

const mapDispatchToProps = dispatch => {
  return{
    Auth:(email , password , login ) => dispatch(auth(email , password , login)),
    clearErrors : ()=>dispatch(clear_errors())

  }
}

export default connect(mapStateToProps , mapDispatchToProps)(SignUp);
