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
    return (
        <div>
           <form action="">
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
           </form>
        </div>
    )
}
