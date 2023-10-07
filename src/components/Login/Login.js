import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/adminSchema";
import { useCookies } from 'react-cookie';
// import GetCookie from "../hooks/getCookie";
import { useDispatch, useSelector } from 'react-redux';
import { onLogin } from '../../store/counterSlice';
const initialValues = {
    email: "",
    password: "",
};

const Login = (props) => {
    const [cookies, setCookie] = useCookies(['user']);
    const nav = useNavigate();
    // const checkval = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    // console.log(checkval+"upp");
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: async (values, action) => {
            await fetch("http://localhost:5000/admin/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values)
            })
                .then(response => {
                    if (!response.ok) {
                        alert("invalid credential");
                        // throw new Error("Invalid credential.")
                    } else {
                        setCookie('email', values.email, { path: '/' });
                        dispatch(onLogin());
                        // console.log(checkval);
                        // setCookie(' password', values.password, { path: '/' });
                        action.resetForm();
                        nav(-1);
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
                    <label htmlFor="password">Password</label>
                    <div className={classes.bla}>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (
                            <p className={classes.error}>{errors.password}</p>
                        ) : null}
                    </div>
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
