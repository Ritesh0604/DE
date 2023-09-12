import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card/Card';
import Button from '../Button/Button';
import classes from './FacultyViewModal.module.css';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
    const checkVal = useSelector(state => state.auth.value)
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.name}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.cabin}</p>
            </div>
            <div className={classes.content}>
                <p>{props.email}</p>
            </div>
            <div className={classes.content}>
                <p>{props.time}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
                {checkVal && <NavLink to="/form" > <button className="d-flex btn btn-outline-success" type="submit">Edit</button></NavLink>}
                {checkVal && <Button onClick={props.onAlert}>Delete</Button>}
            </footer>
        </Card>
    );
};

const FacultyViewModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    name={props.name}
                    cabin={props.cabin}
                    email={props.email}
                    time={props.time}
                    onConfirm={props.onConfirm}
                    onAlert={props.onAlert}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default FacultyViewModal;
