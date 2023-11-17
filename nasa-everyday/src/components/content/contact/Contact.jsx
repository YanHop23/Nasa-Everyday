import React from "react";
import s from "./contact.module.scss";

const Contact = () => {
    return(
        <div class={s.wrapper}>
            <h2>Дякую що завітали</h2>
            <h1>Розробник Олег Положевець</h1>
            <p>
                Служба: 
                <a href="https://astrophysics.gsfc.nasa.gov/">ASD </a> 
                <a href="https://www.nasa.gov/">NASA </a>
                /
                <a href="https://www.nasa.gov/centers/goddard/">GSFC </a>,
                <a href="https://science.nasa.gov/learners">NASA Science Activation </a>
                <a href="http://www.mtu.edu/"> Michigan Tech. U </a>
            </p>
        </div>
    );
};

export default Contact;