import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { userDTO } from "../models/user.model";

export function Register(props: userDTO) {

    const [email, setEmail] = useState(props.email);
    const [password, setPassword] = useState(props.password);
    const [navigate, setNavigate] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        });

        const content = await response.json();

        if (content.error) {
            var errNotice = document.querySelector('#err');
            if (errNotice) {
                errNotice.classList.remove("d-none");
                errNotice.classList.add("d-block");
                errNotice.innerHTML = content.error;
            }
        } else if (content.token) {
            var successNotice = document.querySelector('#success');
            if (successNotice) {
                successNotice.classList.remove("d-none");
                successNotice.classList.add("d-block");
                successNotice.innerHTML = "Registration successful";
                alert(`Your registration token is ${content.token}`);
                // Redirect to login page
                setTimeout(() => {
                    setNavigate(true);
                }, 3000);
            }
        }
    }

    if (navigate) {
        return <Navigate to="/login" />;
    }
    return (

        <main className="d-flex align-items-center mt-5">
            <section className="form-signin text-center w-100 m-auto bg-white rounded shadow-sm border p-4">
                <p id="err" className="d-none text-danger fw-bold"></p>
                <p id="success" className="d-none text-success fw-bold"></p>
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="name@example.com" required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
                </form>
            </section>
        </main>
    );
}

