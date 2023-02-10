import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react"
import '../css/main.css'

export default function Main() {
    return (
        <main>
            <a 
                className="btn btn-primary"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample">
                Bootstrap button
            </a>
        </main>
    )
}