import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './RegisterForm.css';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';




// import DropdownList from "react-widgets/DropdownList";
import 'bootstrap/dist/css/bootstrap.min.css';

function ReserveForm({ u_name, l_name, f_name }) {
    const initialvalues = { first_name: f_name == 'Guest'? "": f_name, last_name: l_name == 'Guest'? "": l_name, email: u_name == 'Guest'? "": u_name, phone: "", date: "", guest: "1", badd: "", madd: "", pay: "cash", cb: "" };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    // const [startDate, setStartDate] = useState(new Date());
    const dateValue = new Date();
    const minDate = new Date();
    const maxDate = new Date("02/06/2030 06:00 PM");

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("Www", e);
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(formValues.badd, formValues.madd);

        setFormValues({ ...formValues, badd: formValues.madd });

        console.log(formValues.badd);


        const errors = {}
        if (formValues.date == "")
        {
            errors.date = "Date Required";
        }

        else {
        try {
            const body = { formValues };
            console.log("sdfasdfdaf", body.formValues);
            const response = await fetch(
                "http://localhost:5001/api/reserve",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body.formValues)
                }
            );
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }
        setFormErrors(errors);
        // setFormValues(initialvalues);
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
            setSuccess(true);
        }
    }, [formErrors]);

    if (isSuccess) {
        return (
            <>
                <div class="wrapper">
                    <form class="form-right" onSubmit={handleSubmit}>
                        <h2 class="text-uppercase">Reservation Successful for {u_name != 'Guest' ? f_name + " " + l_name : 'Guest: ' + formValues.first_name + " " + formValues.last_name}</h2>
                        <div class="row">
                            <div class="col-sm-6 mb-3">

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <Link to="/"> Home </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }

    else {
        return (
            <>
                {/* <video src="/videos/resturant-1.mp4" autoPlay loop muted /> */}
                <div class="wrapper">
                    <form class="form-right" onSubmit={handleSubmit}>
                        <h2 class="text-uppercase">Reservation form for {u_name != 'Guest' ? f_name + " " + l_name : 'Guest'}</h2>
                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <label>First Name</label>
                                <input type="text" name="first_name" id="first_name" class="input-field" value={f_name != 'Guest' ? f_name : formValues.first_name}
                                    onChange={handleChange} required />
                            </div>
                            <div class="col-sm-6 mb-3">
                                <label>Last Name</label>
                                <input type="text" name="last_name" id="last_name" class="input-field" value={l_name != 'Guest' ? l_name : formValues.last_name}
                                    onChange={handleChange} required />
                            </div>
                        </div>
                        <div class="mb-3">
                            {/* <p class="error">{formErrors.incorrect}</p> */}
                            <label>Email</label>
                            <input type="email" class="input-field" name="email" value={u_name != 'Guest' ? u_name : formValues.email}
                                onChange={handleChange} required />
                        </div>
                        <div class="row">
                            {/* <p class="error">{formErrors.pass}</p> */}
                            <div class="col-sm-6 mb-3">
                                <label>Phone Number</label>
                                <input type="text" name="phone" id="phone" class="input-field" value={formValues.phone}
                                    onChange={handleChange} required />
                            </div>
                            {/* <div></div> */}
                            <div class="col-sm-6 mb-3">
                    
                            </div>
                            <div class="col-sm-6 mb-3">
                                <DateTimePickerComponent
                                    name="date"
                                    onChange={handleChange}
                                    placeholder="Choose a date and time"
                                    value={formValues.date}
                                    min={minDate}
                                    max={maxDate}
                                    format="dd-MMM-yy HH:mm"
                                    step={60}></DateTimePickerComponent>
                            </div>
                        </div>
                        <label>Number of Guests  </label>
                        <select name="guest" id="guest" onChange={handleChange} value={formValues.guest}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select>
                        <div class="col-sm-6 mb-3" />
                        <div class="mb-3">
                            {/* <p class="error">{formErrors.incorrect}</p> */}
                            <label>Mailing Address</label>
                            <input class="input-field" name="madd" value={formValues.madd}
                                onChange={handleChange} required />
                        </div>

                        <div class="mb-3">
                            {/* <p class="error">{formErrors.incorrect}</p> */}
                            <label>Billing Address</label>
                            <input class="input-field" name="badd" value={formValues.cb === "0" ? formValues.madd : formValues.badd}
                                onChange={handleChange} required />
                        </div>
                        <div class="mb-3">
                            <label class="option">Same as Mailing Address
                                <input name="cb" type="checkbox" value={formValues.cb === "0" ? "1" : "0"} onChange={handleChange} unchecked />
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div>
                        </div>
                        <label>Prefered Method of Payment </label>
                        <select name="pay" id="pay" value={formValues.pay} onChange={handleChange}>
                            <option value="cash">Cash</option>
                            <option value="debit">Debit</option>
                            <option value="credit">Credit</option>
                        </select>
                        <div class="col-sm-6 mb-3" />
                        <div class="form-field">
                            <p>By reserving, you understand that there will be a no show fee if you do not show up. Minimum $10. </p>
                            <div class="col-sm-6 mb-3">
                            <p class="error">{formErrors.date}</p>
                            </div>
                            <input type="submit" value="Reserve" class="register" name="register" />
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default ReserveForm;