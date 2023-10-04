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
            // event.preventDefault();
            await fetch("http://localhost:5000/faculty/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })
                .then(response => {
                    if (!response.ok) {
                        // throw new Error("duplicate email")
                        alert("already registered");
                    } else {
                        action.resetForm();
                    }
                    return response.json()
                })
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
                    <div className={classes.bla}>
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
                </div>
                <div
                    className={classes.control}
                >
                    <label htmlFor="blockName">Block Name</label>
                    <div className={classes.bla}>
                        <select
                            id="blockName"
                            name="blockName"
                            value={values.blockName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >
                            <option name="" value=''>--Please choose an option--</option>
                            <option name='Student Section' value="A">Student Section</option>
                            <option name='Information Technology' value="B">Information-Technology</option>
                            <option name='Electrical Engineering' value="C">Electrical Engineering</option>
                            <option name='Computer Engineering' value="D">Computer Engineering</option>
                            <option name='Gym Khana' value="E">Gym Khana</option>
                            <option name='Electrical And Communication' value="F">Electrical And Communication</option>
                            <option name='Power Electronics' value="G">Power Electronics</option>
                            <option name='Chemical Engineering' value="H">Chemical Engineering</option>
                            <option name='Chemical Engineering' value="I">Chemical Engineering</option>
                            <option name='Chemical Engineering' value="J">Chemical Engineering</option>
                            <option name='Instrumentation And Control' value="K">Instrumentation And Control</option>
                            <option name='Electrical Engineering' value="L">Electrical Engineering</option>
                            <option name='Mechanical Engineering' value="M">Mechanical Engineering</option>
                            <option name='Civil Engineering' value="N">Civil Engineering</option>
                            <option name='Workshop' value="W">Workshop</option>
                        </select>
                        {errors.blockName && touched.blockName ? (
                            <p className={classes.error}>{errors.blockName}</p>
                        ) : null}
                    </div>
                </div>
                <div
                    // className={`${classes.control} ${fullNameIsValid === false ? classes.invalid : ''
                    //     }`}
                    className={classes.control}
                >
                    <label htmlFor="time">Select Time</label>
                    <div className={classes.bla}>
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
                </div>
                <div
                    className={classes.control}
                >
                    <label htmlFor="notes">Notes</label>
                    <div className={classes.bla}>
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
                </div>
                <div
                    className={classes.control}
                >
                    <label htmlFor="image">Photo</label>
                    <div className={classes.bla}>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/png, image/jpeg, image/jpg"

                        />
                    </div>
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
