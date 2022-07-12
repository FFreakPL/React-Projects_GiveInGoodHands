import React, {useContext, useState} from "react";
import FormButton from "../Buttons/Button_Form";
import {DataContext} from "./Form_Steps_Home";

export default function Form_Step4_5() {
    const { state, setState } = useContext(DataContext);
    const handleNext = () => {
        setState(prev => ({
            ...prev,
            step: prev.step + 1
        }))
    }
    const handleBack = () => {
        setState(prev => ({
            ...prev,
            step: prev.step - 1
        }))
    }
    console.log(state);
    return (
        <div className="step"><div style={{display: 'flex', height: "100%"}}>
            <div style={{display: 'flex', flexDirection: `column`, height: "90px"}}>
                <h1 style={{fontSize: "3rem", marginBottom: "1rem", marginTop: "1rem"}}>Test state'ów:</h1>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Rzeczy do oddania: </span>
                    <span style={{fontWeight: "700"}}>{state.selectedThing}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Ilość toreb: </span>
                    <span style={{fontWeight: "700"}}>{state.selectedBag}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Wybrana lokalizacja: </span>
                    <span style={{fontWeight: "700"}}>{state.selectedLocation}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Komu chcesz pomóc: </span>
                    <span style={{fontWeight: "700"}}>{state.selectedHelp.join(",")}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Konkretna organizacja: </span>
                    <span style={{fontWeight: "700"}}>{state.specificLocation}</span></p>
                <p style={{fontSize: "2rem", marginBottom: "1rem"}}><span>Dane z formularza:</span></p>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Ulica: {state.contact.street}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Miasto: {state.contact.city}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Kod pocztowy: {state.contact.postalCode}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Numer telefonu: {state.contact.phoneNumber}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Data: {state.contact.date}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Godzina: {state.contact.hour}</span>
                <span style={{fontWeight: "700",marginBottom: "1rem"}}>Uwagi dla kuriera: {state.contact.comment}</span>
            </div>
            <div className="step_buttons_container" style={{display: "flex", justifyContent: "flex-start",
                alignItems: "flex-end", flexDirection: "row", width: "100%", height: "100%"}}>
                <FormButton props={handleBack} style={{height: "90px"}} name={"Wstecz"}/>
                <FormButton props={handleNext} style={{height: "90px"}} name={"Dalej"}/>
            </div>
        </div>
        </div>
    )
}