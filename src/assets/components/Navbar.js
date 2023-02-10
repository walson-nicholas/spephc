import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react"
import '../css/Navbar.css'
import pic from '../img/spelogo.png'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-sm bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand nv-b" href="#">
                    <img src={pic} alt="spelogo" id="brandlogo"/>
                    <div class="container bl-txt">
                        <p>Society of Petroleum Engineers</p>
                        <p>Port Harcourt, Nigeria (Section 103)</p>
                    </div>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse nls" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">About SPE</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Symposium
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Panelist</a></li>
                            <li><a class="dropdown-item" href="#">Short courses</a></li>
                            <li><a class="dropdown-item" href="#">Career Fair</a></li>
                            <li><a class="dropdown-item" href="#">Breakout session</a></li>
                        </ul>
                    </li>   
                    
                    <li class="nav-item">
                        <a class="nav-link disabled">Events</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link disabled">Blog</a>
                    </li>

                    <div id="demo"></div>
                </ul>
                </div>
            </div>
        </nav>
    )
}