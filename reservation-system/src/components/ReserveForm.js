import { React, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import './RegisterForm.css';

function ReserveForm({u_name, l_name, f_name}) {
    const initialvalues = { first_name: "", last_name: "", email: "", phone: "", date: "" };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const getInfo = async e => {
        try {
            const response = await fetch(`http://localhost:5001/api/getaccount/${u_name}`,
            );
            const jsonData = await response.json();
            // console.log(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    getInfo();

    const handleSubmit = async e => {
        e.preventDefault();
        const errors = {}
        try {
            const response = await fetch(`http://localhost:5001/api/getaccount/${formValues.email.toLowerCase()}`,
            );
            const jsonData = await response.json();
            console.log(formValues.phone, formValues.date);
            if (jsonData['rowCount'] > 0) {
                errors.incorrect = "Email already taken.";
                // setFormErrors(errors);
            }
            else if (formValues.phone !== formValues.date) {
                errors.pass = "Passwords do not match.";
            }
            else {
                const body = { formValues };
                console.log("sdfasdfdaf", body.formValues);
                const response = await fetch(
                    "http://localhost:5001/api/insert",
                    {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify(body.formValues)
                    }
                );
                console.log(response);
            }
        } catch (err) {
            console.error(err.message);
        }
        setFormErrors(errors);
        setFormValues(initialvalues);
        setIsSubmit(true);
    };

    // const validate = (values) => {
    //     const errors = {};
    //     errors.incorrect = "Email or password is incorrect.";
    //     return errors;
    // };

    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues);
    //     }
    // }, [formErrors]);


    return (
        <>
            {/* <video src="/videos/resturant-1.mp4" autoPlay loop muted /> */}
            <div class="wrapper">
                <form class="form-right" onSubmit={handleSubmit}>
                    <h2 class="text-uppercase">Reservation form for {u_name != 'Guest'? f_name + " " + l_name: 'Guest'}</h2>
                    <div class="row">
                        <div class="col-sm-6 mb-3">
                            <label>First Name</label>
                            <input type="text" name="first_name" id="first_name" class="input-field" value={f_name != 'Guest'? f_name:formValues.first_name}
                                onChange={handleChange} required />
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label>Last Name</label>
                            <input type="text" name="last_name" id="last_name" class="input-field" value={l_name != 'Guest'? l_name:formValues.last_name}
                                onChange={handleChange} required />
                        </div>
                    </div>
                    <div class="mb-3">
                        {/* <p class="error">{formErrors.incorrect}</p> */}
                        <label>Email</label>
                        <input type="email" class="input-field" name="email" value={u_name != 'Guest'? u_name : formValues.email}
                            onChange={handleChange} required />
                    </div>
                    <div class="row">
                        {/* <p class="error">{formErrors.pass}</p> */}
                        <div class="col-sm-6 mb-3">
                            <label>Phone Number</label>
                            <input type="password" name="phone" id="phone" class="input-field" value={formValues.phone}
                                onChange={handleChange} required />
                        </div>
                        <div class="col-sm-6 mb-3">
                            <label>Date</label>
                            <input type="password" name="date" id="date" class="input-field" value={formValues.date}
                                onChange={handleChange} required />
                        </div>
                    </div>
                    <div class="form-field">
                        <input type="submit" value="Reserve" class="register" name="register" />
                    </div>
                    {/* <div class="mb-3"> */}
                        {/* <div>Have an account already?    <a onClick={navigate("/signin")}>Sign In</a> */}
                        {/* </div> */}
                    {/* </div> */}
                </form>
            </div>
        </>
    )
}

export default ReserveForm;