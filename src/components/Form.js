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
             firstName: Yup.string().max(15, "Must be 15 characters or less").required("Required")
         }),

         onSubmit: (values) => {
             console.log(values)
         }
     })
    

    return (
        <div className='container'>
            <div className='container-sub1'>  
            <img className='image1' src="https://cdn.pixabay.com/photo/2020/09/17/18/05/people-5579977__340.png"        alt="welcome-img" />
            </div>
        
          <div className='container-sub2'>
          <span className='logo-container'>   
          <img className='logo' src={process.env.PUBLIC_URL + `/img3.png`} alt="logo" />  
          <h2 className='header1'>Melexy Digital Services</h2>
          </span>
          <p className='header2'> Register to view our produts and services</p>

           <form onSubmit={formik.handleSubmit}>
               <input 
                   type="text"
                   placeholder='first name'
                   name='firstName'
                   value={formik.values.firstName}
                   onChange={formik.handleChange}
              />
              
               <input 
                   type="text"
                   placeholder='last name'
                   name='lastName'
                   value={formik.values.lastName}
                   onChange={formik.handleChange}
                />
                
               <input 
                   type="email"
                   placeholder='email'
                   name='email'
                   value={formik.values.email}
                   onChange={formik.handleChange}
                />
                
                <input 
                   type="password"
                   placeholder='password'
                   name='password'
                   value={formik.values.password}
                   onChange={formik.handleChange}
                />
            
                <input 
                   type="password"
                   placeholder='confirm password'
                   name='confirmPassword'
                   value={formik.values.confirmPassword}
                   onChange={formik.handleChange}
                />
                <br />
                <button type='submit'>Register</button>

           </form>
           </div>
        </div>
        
    )
}
