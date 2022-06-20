import React from "react";
import { useEffect, useState } from "react";
import { registeredUserDTO } from "../models/registeredUsers.model";

export default function Users(props: registeredUserDTO){

    const [pages, setPages] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState([]);

    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');

    const getUsers = async () => {
        await fetch('https://reqres.in/api/users?page=1', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => setUsers(data.data))
        .catch(error => setError(error));

        if(page2?.classList.contains('active')){
            page2.classList.remove('active');
        }
        page1?.classList.add('active');
    }

    const getUsers2 = async () => {
        await fetch('https://reqres.in/api/users?page=2', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => setUsers(data.data))
        .catch(error => setError(error));

        if(page1?.classList.contains('active')){
            page1.classList.remove('active');
        }
        page2?.classList.add('active');
    }

    useEffect(()=> {
        getUsers();
    },[]);

    if(error.length > 0){
        console.error(error);
    }

    return(
        <div className="container">
            <div className="table-responsive mx-auto w-auto">
                <h1 className="my-4">Users</h1>
                <table className="table table-bordered table-striped text-center table-hover shadow-sm mb-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Avatar</th>
                        </tr>
                    </thead>
                    <tbody>                     
                        {users.length > 0 ? users.map((user: registeredUserDTO, i: number) => (
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td><img src={user.avatar} alt="Avatar" className="rounded img-fluid" /></td>
                                </tr>
                            )) : <tr><td>Loading...</td></tr>}
                    </tbody>
                </table>
                <div>
                    <nav className="mb-5" aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item pointer active" id="page1"><a className="page-link pointer" onClick={getUsers}>1</a></li>
                            <li className="page-item pointer" id="page2"><a className="page-link pointer" onClick={getUsers2}>2</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

