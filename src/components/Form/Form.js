import React from 'react';

import { useFormik } from "formik";
import { formSchema } from "../../schemas";
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import classes from './Form.module.css';

const initialValues = {
    email: "",
    fullName: "",
    blockName: "",
    time: "",
    notes: "",
};

const Form = (props) => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: formSchema,
        onSubmit: async (values, action) => {
            const response = await fetch('http://localhost:8080/demo', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            action.resetForm();
        },
    });


    return (
        <Card className={classes.login}>
            <form onSubmit={handleSubmit}>
                <div
                    className={classes.control}
                >

                    <label htmlFor="email">E-Mail</label>
                    <div className={classes.bla}>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="abc@example.com"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />  
                        {errors.email && touched.email ? (
                            <span className={classes.error}>{errors.email}</span>
                        ) : null}
                    </div>
                </div>
                <div
                    className={classes.control}
                >
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="john doe"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.fullName && touched.fullName ? (
                        <p className={classes.error}>{errors.fullName}</p>
                    ) : null}
                </div>
                <div
                    className={classes.control}
                >
                    <label htmlFor="blockName">Block Name</label>
                    <select
                        id="blockName"
                        name="blockName"
                        value={values.blockName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option name="" value=''>--Please choose an option--</option>
                        <option name='Information Technology' value="IT">Information-Technology</option>
                        <option name='Computer-Engineering' value="CE">Computer Engineering</option>
                        <option name='Electrical-Engineering' value="EE">Electrical Engineering</option>
                        <option name='Chemical-Engineering' value="CE">Chemical Engineering</option>
                        <option name='Civil-Engineering' value="CE">Civil Engineering</option>
                        <option name='Electrical-And-Communication' value="EAC">Electrical And Communication</option>
                        <option name='IAC' value="IAC">Instrumentation And Control</option>
                        <option name='Mechanical-Engineering' value="ME">Mechanical Engineering</option>
                        <option name='Power-Electronics' value="PE">Power Electronics</option>
                        <option name='Data-Science' value="DS">Data Science</option>
                        <option name='Electronics-And-Instrumentation Engineering' value="EIE">Electronics And Instrumentation Engineering</option>
                        <option name='Applied-Mechanics' value="AM">Applied Mechanics</option>
                        <option name='Science-And-Humanities' value="SH">Science And Humanities</option>
                    </select>
                    {errors.blockName && touched.blockName ? (
                        <p className={classes.error}>{errors.blockName}</p>
                    ) : null}
                </div>
                <div
                    // className={`${classes.control} ${fullNameIsValid === false ? classes.invalid : ''
                    //     }`}
                    className={classes.control}
                >
                    <label htmlFor="time">Select Time</label>
                    <input
                        type="text"
                        id="time"
                        name="time"
                        placeholder="10:30 AM to 11:30 AM"
                        value={values.time}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    // value={enteredfullName}
                    // onChange={fullNameChangeHandler}
                    // onBlur={validatefullNameHandler}
                    />
                    {errors.time && touched.time ? (
                        <p className={classes.error}>{errors.time}</p>
                    ) : null}
                </div>
                <div
                    className={classes.control}
                >
                    <label htmlFor="notes">Notes</label>
                    <input
                        type="text"
                        id="notes"
                        name="notes"
                        placeholder="MYSY"
                        value={values.notes}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.notes && touched.notes ? (
                        <p className={classes.error}>{errors.notes}</p>
                    ) : null}
                </div>
                <div
                    className={classes.control}
                >
                    <label htmlFor="image">Photo</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/png, image/jpeg, image/jpg"

                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} >
                        Submit
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Form;
