import React, { useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth, logout} from "./Utilities/UtilitiesFirebase";

export default function HomeHeaderLogin({props}){
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    function handleLogin() {
        if(!user) {
            navigate("/login");
        } else {
            alert("Chcesz się zalogować drugi raz?? Czy ty jesteś normalny??!!")
        }
    }
    function handleRegister() {
        if(!user) {
            navigate("/register");
        } else {
            alert("Jesteś już zalogowany więc masz konto jełopie!!")
        }
    }

    function handleGiveThings() {
        if(user) {
            navigate("/stepsHome");
        } else {
            alert("ups coś poszło nie tak")
        }
    }

    function backToHome() {
        navigate("/");
    }

    return (
        <div className="header_login" style={props}>
            {user ? <div className="header_loggedIn" style={{fontSize: "0.75vw", marginRight: "1vw"}}>Cześć {user.email}</div> : <></>}
            {user ?
                <button type="button" className="btn_login" onClick={() => handleGiveThings()}>Oddaj rzeczy</button>
                :
                <>
                <button type="button" className="btn_login" onClick={() => handleLogin()}>Zaloguj</button>
                <button type="button" className="btn_register" onClick={() => handleRegister()}>Załóż konto</button>
                </>
            }
            { user ? <button type="button" className="btn_logout" onClick={() => logout() & backToHome()}>Wyloguj się</button>
            : <></>}
        </div>
    )
}