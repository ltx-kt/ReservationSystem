import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import "./LoginForm.css";
// const {Client} = require("pg");

function LoginForm({setName, setLName, setFName}) {
    const navigate = useNavigate();
    const location = useLocation();
    const initialvalues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    // const setBack = () => {
    //     setName("Guest");
    //     setLName("Guest");
    //     setFName("Guest");
    //     navigate('/reserve');
    // };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const errors = {}
        try {
            const response = await fetch(`http://localhost:5001/api/getaccount/${formValues.email.toLowerCase()}&${formValues.password}`,
            );
            const jsonData = await response.json();
            console.log(jsonData);
            if (jsonData['rowCount'] === 0) {
                errors.incorrect = "Email or password is incorrect.";
                setFormErrors(errors);
            }
            else {
                setFormErrors({});
                setName(jsonData['rows'][0]['email']);
                setLName(jsonData['rows'][0]['last_name']);
                setFName(jsonData['rows'][0]['first_name']);


                // navigate('/reserve')

            }
        } catch (err) {
            console.error(err.message);
        }
        // setFormValues(initialvalues);
        setIsSubmit(true);
        if (Object.keys(errors).length === 0) {
            console.log("asdasdasd", formValues);
            // setName(formValues.email);
            navigate('/reserve');
        }
    };
    const validate = (values) => {
        const errors = {};
            errors.incorrect = "Email or password is incorrect.";
        return errors;
    };

    useEffect(() => {
        console.log(formErrors);
        // console.log("asdasdasd", formValues);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log("asdasdasd", formValues);
            // const gg = formValues;
            setFormValues(initialvalues);

        }
    }, [formErrors]);

    return (
        <>
            {/* <video src="/videos/resturant-1.mp4" autoPlay loop muted /> */}
            {/* <pre>{JSON.stringify(formValues)}</pre> */}
            <div class="loginwrapper">
                <form class="form-right" onSubmit={handleSubmit}>
                    <h2 class="text-uppercase">Sign In</h2>
                    <div class="mb-3">
                        <p class="error">{formErrors.incorrect}</p>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            class="input-field"
                            required
                            value={formValues.email}
                            onChange={handleChange}

                        />
                    </div>
                    <div class="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            class="input-field"
                            required
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="form-field">
                        <input type="submit" value="Login" class="register" name="login"/>
                        <div class="mb-3">
                            <div>Don't have an account?   <Link to="/register">Register</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
