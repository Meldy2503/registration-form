import React from 'react';
import { useFormik} from 'formik';
import * as Yup from 'yup'

export default function Form() {
    
     const formik = useFormik({
         initialValues: {
             firstName: "",
             lastName: "",
             email: "",
             password: "",
             confirmPassword: ""
         },
          validationSchema: Yup.object({
              firstName: Yup.string()
                            .max(15, "Must be 15 characters or less")
                            .required("Required"),
              lastName: Yup.string()
                            .max(20, "Must be 20 characters or less")
                            .required("Required"), 
              email: Yup.string()
                            .email("enter a valid email address")
                            .required("Required"),
              password: Yup.string()
                            .min(8, "password must be atleast 8 characters")
                            .required("Enter password"),
              confirmPassword: Yup.string()
                            .oneOf([Yup.ref("password"), null], "Password does not match")
                            .required("Confirm password"),
          }),
        
         onSubmit: (values) => {
             console.log(values);
         }
     });
    
       
    return (
        <div className='container'>
            <div>  
                  <img className='image1 responsive-image' src="https://cdn.pixabay.com/photo/2020/09/17/18/05/people-5579977__340.png" alt="welcome-img" />
            </div>
        
          <div className='container-sub2'>
                <span className='header-container'>   
                      <img className='logo' src={process.env.PUBLIC_URL + `/img3.png`} alt="logo" />  
                      <h2 className='header1'>Melexy Digital Services</h2>
                      <p className='header2'> Register to view our produts and services</p>
                </span>
          
                <form onSubmit={formik.handleSubmit}>
                      <input 
                          type="text"
                          placeholder='first name'
                          name='firstName'
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                      />
                        {formik.touched.firstName && formik.errors.firstName ? <p className='errors'>{formik.errors.firstName}</p> : null}
              
                      <input 
                          type="text"
                          placeholder='last name'
                          name='lastName'
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                       />
                        {formik.touched.lastName && formik.errors.lastName ? <p className='errors'>{formik.errors.lastName}</p> : null}
                      <input 
                          type="email"
                          placeholder='email'
                          name='email'
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? <p className='errors'>{formik.errors.email}</p> : null}
                      <input 
                          type="password"
                          placeholder='password'
                          name='password'
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                      />
                        {formik.touched.password && formik.errors.password ? <p className='errors'>{formik.errors.password}</p> : null}
                       <input 
                           type="password"
                           placeholder='confirm password'
                           name='confirmPassword'
                           value={formik.values.confirmPassword}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                       />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p className='errors'>{formik.errors.confirmPassword}</p> : null}
                      <br />
                      <button type='submit'>Register</button>
                

                 </form>
             </div>
        </div>
        
    )
}
