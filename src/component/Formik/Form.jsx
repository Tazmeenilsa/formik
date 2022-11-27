// import React from 'react'
// import { Formik } from 'formik'
// import { 
//     getFirestore,


// } from 'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"';

// const db = getFirestore();
// export default function Form() {

//     return (
//         <>
//             <Formik
//                 validateOnBlur={false}
//                 initialValues={{ name: "" }}
//                 validate={values => {
//                     let errors = {};
//                     if (!values.name) {
//                         errors.name = 'Name is required';
//                     }
//                     return errors;
//                 }}

//                 onSubmit={(values,errors, setSubmitting ) => {
//                    if(errors.name && setSubmitting(false)){

//                    }
//                     console.log('submitting', values);

//                 }} >
//                 {({ handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting }) => (
//                     <form onSubmit={handleSubmit}>
//                         <div>
//                             <input
//                                 name="name"
//                                 type="text"
//                                 placeholder="Name"
//                                 onChange={handleChange}
//                                 value={values.name}
//                                 onBlur={handleBlur}
//                             >

//                             </input>
//                             <input
//                                 name="email"
//                                 type="email"
//                                 placeholder="Name@gmail.com"
//                             >

//                             </input>
//                             <input
//                                 name="password"
//                                 type="pssword"

//                             >

//                             </input>
//                             {errors.name && touched.name &&
//                                 <span style={{ color: "red", fontWeight: "bold" }}>
//                                     {errors.name}
//                                 </span>

//                             }
//                         </div>
//                         <button type='submit' disabled={isSubmitting}>Submit</button>
//                     </form>
//                 )}

//             </Formik>
//         </>
//     )
// }


import React from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js'
import { getFirestore, collection,addDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"
let db = getFirestore()
const auth = getAuth();

export default function Form() {
    let register = () => {
        // let username = document.getElementById("username");
        let email = document.getElementById("email");
        let password = document.getElementById("password");

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                alert("New user is regitsterred !")
                const docRef = addDoc(collection(db, "users") , {
                    name: "Tazmeen",
                    email:"tazmeenilsa@gmail.com"
                
                })
            })
            .catch((err) => {
                console.log("err=>", err)
            })
    }

    return (
        <>
            <label htmlFor="username">Enter Your Username : </label>
            <input 
            type="text"
             id='username' 
             placeholder='Enter Username'
              />
              <br />
            <label htmlFor="username">Enter Your Email : </label>
            <input
             type="text" 
             id='email'
              placeholder='Enter Email' 
              />
              <br />
            <label htmlFor="username">Enter Your Password : </label>
            <input 
            type="text" 
            id='password'
             placeholder='Enter Password'
              />
              <br /><br />
            <button onClick={register}>Register</button>
        </>
    )
}