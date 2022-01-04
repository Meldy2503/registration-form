import React from 'react'
import { useFormik} from 'formik'

export default function Form() {
    
     const formik = useFormik({
         initialValues: {
             firstName: "",
             lastName: "",
             email: "",
             password: "",
             confirmPassword: ""
         }
     })
     console.log(formik.values)
    return (
        <div className='container'>
            <div className='container-sub1'>
            <img className='image1' src="https://cdn.pixabay.com/photo/2020/09/17/18/05/people-5579977__340.png" alt="welcome-img" />
            </div>
            <div className='container-sub2'>
           <form>
               <input 
                   type="text"
                   placeholder='first name'
                   name='firstName'
                   value={formik.values.firstName}
                   onChange={formik.handleChange}
              />
              <br />
               <input 
                   type="text"
                   placeholder='last name'
                   name='lastName'
                   value={formik.values.lastName}
                   onChange={formik.handleChange}
                />
                <br />
               <input 
                   type="email"
                   placeholder='email'
                   name='email'
                   value={formik.values.email}
                   onChange={formik.handleChange}
                />
                <br />
                <input 
                   type="password"
                   placeholder='password'
                   name='password'
                   value={formik.values.password}
                   onChange={formik.handleChange}
                />
                <br />
                <input 
                   type="password"
                   placeholder='confirm password'
                   name='confirmPassword'
                   value={formik.values.confirmPassword}
                   onChange={formik.handleChange}
                />
           </form>
           </div>
        </div>
    )
}
