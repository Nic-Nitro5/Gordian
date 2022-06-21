import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { userDTO } from '../models/user.model';

export function Login(props: userDTO) {
    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState(props.password);

    const [navigate, setNavigate] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        console.log(content);

        if (content.error) {
            var errNotice = document.querySelector('#errLogin');
            if (errNotice) {
                errNotice.classList.remove("d-none");
                errNotice.classList.add("d-block");
                errNotice.innerHTML = content.error;
            }
        } else if (content.token) {
            var successNotice = document.querySelector('#successLogin');
            if (successNotice) {
                successNotice.classList.remove("d-none");
                successNotice.classList.add("d-block");
                successNotice.innerHTML = "Registration successful";
                // Redirect to login page
                setTimeout(() => {
                    setNavigate(true);
                }, 3000);
            }
        }
    }

    if (navigate) {
        return <Navigate to="/users" />;
    }

    return (
        <main className="d-flex align-items-center pt-5">
            <section className="form-signin w-100 m-auto text-center bg-white rounded shadow-sm border p-4">
                <p id="errLogin" className="d-none text-danger fw-bold"></p>
                <p id="successLogin" className="d-none text-success fw-bold"></p>
                <form onSubmit={submit}>

                    <h1 className="h3 mb-3 fw-normal">Please Login</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                </form>
            </section>
        </main>
    );
};
