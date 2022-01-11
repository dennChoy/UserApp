import React from "react";
import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import classes from "./ModalInfo.module.css"

const Backdrop = props => {
    return <div className={classes.backdrop} />;
}

const ModalOverlay = props => {
    return (<Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            {props.message}
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.ClearEror}>Okay</Button>
        </footer>
    </Card>);
}

const ModalInfo = props => {
    return(
        <React.Fragment>
           {ReactDOM.createPortal(<Backdrop ClearEror={props.ClearEror}/>, document.getElementById("backdrop"))}
           {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} ClearEror={props.ClearEror}/>, document.getElementById("modal") )}
        </React.Fragment>
    );
}

export default ModalInfo;