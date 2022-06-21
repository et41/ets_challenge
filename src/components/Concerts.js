import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function Concerts() {
    const navigate = useNavigate()


    const concert = () => {
        navigate("/", {replace: true});
    }

    return (
        <h1 onClick={concert}>TESTTT</h1>
    )
}