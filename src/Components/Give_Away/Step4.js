import React, {useContext, useState} from "react";
import FormButton from "../Buttons/FormButtons";
import {DataContext} from "../StepsHome";

export default function Step4() {
    const {state, setState} = useContext(DataContext);
    const [contact, setContact] = useState({
        street: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        date: "",
        hour: "",
        comment: ""},
    )

    function handleChange(e){
        let value = e.target.value;
        setContact({
            ...contact,
            [e.target.name]: value,
        });
    }
    console.log(contact);

    const handleNext = () => {
        setState(prev => ({
            ...prev,
            contact,
            step: prev.step + 1
        }))
    }
    const handleBack = () => {
        setState(prev => ({
            ...prev,
            step: prev.step - 1
        }))
    }

    return (
        <div className="step">
            <div className="step_counter">Krok 3/4</div>
            <div className="step_container">
                <div className="step_title">Podaj adres oraz termin odbioru rzecz przez kuriera</div>
                <div className="step_form_container">
                    <div className="step_form_left">
                        <p className="step_subTitle2">Adres odbioru</p>
                        <div className="step_form_left_inputs">
                            <label htmlFor="street">Ulica</label>
                            <textarea rows="1" name="street" value={contact.street}  className="step_form_left_inputs_street" onChange={handleChange} required/>
                        </div>
                        <div className="step_form_left_inputs">
                            <label htmlFor="city">Miasto</label>
                            <textarea rows="1" name="city" value={contact.city} className="step_form_left_inputs_city" onChange={handleChange} required/>
                        </div>
                        <div className="step_form_left_inputs">
                            <label htmlFor="postalCode">Kod<br></br>pocztowy</label>
                            <textarea rows="1" name="postalCode" value={contact.postalCode} className="step_form_left_inputs_postalCode" onChange={handleChange} required/>
                        </div>
                        <div className="step_form_left_inputs">
                            <label htmlFor="phoneNumber">Numer<br></br>telefonu</label>
                            <textarea rows="1" name="phoneNumber" value={contact.phoneNumber} maxLength="9" className="step_form_left_inputs_phoneNumber" onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="step_form_right">
                        <p className="step_subTitle2">Termin odbioru:</p>
                        <div className="step_form_right_inputs">
                            <label htmlFor="date">Data</label>
                            <textarea rows="1" name="date" value={contact.date} className="step_form_right_inputs_date" onChange={handleChange} required/>
                        </div>
                        <div className="step_form_right_inputs">
                            <label htmlFor="hour">Godzina</label>
                            <textarea rows="1" name="hour" value={contact.hour} className="step_form_right_inputs_hour" onChange={handleChange} required/>
                        </div>
                        <div className="step_form_right_inputs">
                            <label htmlFor="comment">Uwagi<br></br>dla kuriera</label>
                            <textarea rows="3" name="comment" value={contact.comment} className="step_form_right_inputs_comment" onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="step_buttons_container">
                <FormButton props={handleBack} name={"Wstecz"}/>
                <FormButton props={handleNext} name={"Dalej"}/>
            </div>
        </div>
    )
}