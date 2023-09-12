import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Form.module.css';
import Button from '../UI/Button/Button';

const Form = (props) => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();

    const [enteredFullName, setEnteredFullName] = useState('');
    const [fullNameIsValid, setFullNameIsValid] = useState();

    const [enteredNotes, setEnteredNotes] = useState('');
    const [notesIsValid, setNotesIsValid] = useState();

    const [enteredFile, setEnteredFile] = useState('');

    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        setFormIsValid(
            event.target.value.includes('@') && enteredFullName.trim().length > 2 &&
            enteredNotes.trim().length > 2
        );
    };
    const fullNameChangeHandler = (event) => {
        setEnteredFullName(event.target.value);

        setFormIsValid(
            event.target.value.trim().length > 2 && enteredEmail.includes('@') && enteredNotes.trim().length > 2
        );
    };
    const notesChangeHandler = (event) => {
        setEnteredNotes(event.target.value);

        setFormIsValid(
            event.target.value.trim().length > 2 && enteredEmail.includes('@') && enteredFullName.trim().length > 2
        );
    };
    const fileChangeHandler = (event) => {
        setEnteredFile(event.target.value);
    }


    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };
    const validatefullNameHandler = () => {
        setFullNameIsValid(enteredFullName.trim().length > 2);
    };
    const validateNotesHandler = () => {
        setNotesIsValid(enteredFullName.trim().length > 2);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        // props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${fullNameIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={enteredFullName}
                        onChange={fullNameChangeHandler}
                        onBlur={validatefullNameHandler}
                    />
                </div>
                <div
                    className={classes.control}
                >
                    <label htmlFor="blockName">Block Name</label>
                    <select>
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
                </div>
                <div
                    // className={`${classes.control} ${fullNameIsValid === false ? classes.invalid : ''
                    //     }`}
                    className={classes.control}
                >
                    <label htmlFor="time">Select Time</label>
                    <input
                        type="text"
                        id=""
                    // value={enteredfullName}
                    // onChange={fullNameChangeHandler}
                    // onBlur={validatefullNameHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${notesIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="Notes">Notes</label>
                    <input
                        type="text"
                        id="Notes"
                        placeholder="Notes"
                        multiline
                        value={enteredNotes}
                        onChange={notesChangeHandler}
                        onBlur={validateNotesHandler}
                    />
                </div>
                <div
                    className={classes.control}
                >
                    <label htmlFor="image">Photo</label>
                    <input
                        type="file"
                        id="image"
                        accept="image/png, image/jpeg, image/jpg"
                        value={enteredFile}
                        onChange={fileChangeHandler}

                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Submit
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Form;
