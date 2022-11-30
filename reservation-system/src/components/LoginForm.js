import React from "react";
import "./LoginForm.css";

const EMAIL_REGEX =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function LoginForm() {
    return (
        <>
            {/* <video src="/videos/resturant-1.mp4" autoPlay loop muted /> */}
            <div class="loginwrapper">
                <form class="form-right">
                    <h2 class="text-uppercase">Sign In</h2>
                    <div class="mb-3">
                        <label>Email</label>
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            class="input-field"
                        />
                    </div>
                    <div class="mb-3">
                        <label>Password</label>
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            class="input-field"
                        />
                    </div>
                    <div class="form-field">
                        <input type="submit" value="Login" class="register" name="login" />
                        <div class="mb-3">
                            <div>Don't have an account?   <a href="/register">Register</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default LoginForm;
