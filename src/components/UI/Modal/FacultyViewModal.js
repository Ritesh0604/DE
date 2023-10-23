import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../Card/Card';
import Button from '../Button/Button';
import classes from './FacultyViewModal.module.css';
import { NavLink } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
    const [cookies] = useCookies(['user']);
    // const checkVal = useSelector(state => state.auth.value)
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <img src="/jrd.png" className={classes.photo} alt="jrd" />
                <h3>{props.name}</h3>

            </header>

            <div className={classes.content}>
                <h5>E-mail : </h5>
                <p>{props.email}</p>
            </div>

            <div className={classes.content}>
                <h5>Cabin : </h5>
                <p>{props.cabin}</p>
            </div>

            <div className={classes.content}>
                <h5>Time : </h5>
                <p>{props.time}</p>
            </div>

            <div className={classes.content}>
                <h5>Notes : </h5>
                <p>{props.notes}</p>
            </div>


            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>Close</Button>
                {cookies.email && <NavLink to="/form" > <Button className="d-flex submit btn btn-outline-success mx-4" type="submit">Edit</Button></NavLink>}
                {cookies.email && <Button className="delete" onClick={props.onDelete}>Delete</Button>}
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
                    notes={props.notes}
                    onConfirm={props.onConfirm}
                    onDelete={props.onDelete}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
};

export default FacultyViewModal;
