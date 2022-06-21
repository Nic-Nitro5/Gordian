import React from "react";
import { useEffect, useState } from "react";
import { ResourcesDTO } from "../models/resources";
import { goToTop } from "../utils/functions";

export default function Resources(props: ResourcesDTO) {

    const [resources, setResources] = useState([]);
    const [error, setError] = useState([]);

    const page1 = document.querySelector('#page1');
    const page2 = document.querySelector('#page2');

    const getResources = async () => {
        await fetch('https://reqres.in/api/unknown', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => setResources(data.data))
            .catch(error => setError(error));

        if (page2?.classList.contains('active')) {
            page2.classList.remove('active');
        }
        
        page1?.classList.add('active');
        goToTop();
    }

    const getResources2 = async () => {
        await fetch('https://reqres.in/api/unknown?page=2', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => setResources(data.data))
            .catch(error => setError(error));

        if (page1?.classList.contains('active')) {
            page1.classList.remove('active');
        }
        page2?.classList.add('active');
        goToTop();
    }

    useEffect(() => {
        getResources();
    }, []);

    if (error.length > 0) {
        console.error(error);
    }

    return (
        <div className="container">
            <div className="table-responsive mx-auto w-auto">
                <h1 className="my-4">Resources</h1>
                <table className="table table-bordered table-striped text-center table-hover shadow-sm mb-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Color</th>
                            <th>Pantone Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resources.length > 0 ? resources.map((resource: ResourcesDTO, i: number) => (
                            <tr key={i}>
                                <td>{resource.id}</td>
                                <td>{resource.name}</td>
                                <td>{resource.year}</td>
                                <td><span className="circle" style={{ backgroundColor: `${resource.color}` }}></span>{resource.color}</td>
                                <td>{resource.pantone_value}</td>
                            </tr>
                        )) : <tr><td>Loading...</td></tr>}
                    </tbody>
                </table>
                <div>
                    <nav className="mb-5" aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item pointer active" id="page1"><a className="page-link pointer" onClick={getResources}>1</a></li>
                            <li className="page-item pointer" id="page2"><a className="page-link pointer" onClick={getResources2}>2</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

