import React from 'react'
import { Formik } from 'formik'
export default function Form() {

    return (
        <>
            <Formik
                validateOnBlur={false}
                initialValues={{ name: "" }}
                validate={values => {
                    let errors = {};
                    if (!values.name) {
                        errors.name = 'Name is required';
                    }
                    return errors;
                }}

                onSubmit={(values,errors, setSubmitting ) => {
                   if(errors.name && setSubmitting(false)){

                   }
                    console.log('submitting', values);

                }} >
                {({ handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                name="name"
                                type="text"
                                placeholder="Name"
                                onChange={handleChange}
                                value={values.name}
                                onBlur={handleBlur}
                            >

                            </input>
                            {errors.name && touched.name &&
                                <span style={{ color: "red", fontWeight: "bold" }}>
                                    {errors.name}
                                </span>

                            }
                        </div>
                        <button type='submit' disabled={isSubmitting}>Submit</button>
                    </form>
                )}

            </Formik>
        </>
    )
}
