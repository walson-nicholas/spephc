import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import CountdownTimer from "./CountdownTimer"
import '../css/header.css'

export default function Header() {
    return (
        <header>
            <h3 class="society">Society of Petroleum Engineers, Port Harcourt (Section 103)</h3>

            <h1>2023 YOUNG PROFESSIONAL SYMPOSIUM</h1>

            <div>
                <div class="header_icons">
                    <i class="gg-pin"></i>
                    <span>
                        Casoni International Hotels and Suites Ltd. <br />
                        (#6 Presbyterian Close, off Stadium Road, PHC.)  
                    </span>
                </div>

                <br />

                <div class="header_icons">
                    <i class="gg-calendar-dates"></i>
                    <span>Friday, 14th April - Saturday, 15th April 2023</span>
                </div>
            </div>

            <CountdownTimer />

            <div class="header-buttons">
                <button type="button" class="btn btn-danger btn-sm" href="#" role="button">REGISTER</button>
                <button type="button" class="btn btn-info btn-sm" href="#" role="button">DOWNLOAD BROCHURE</button>
                <a href='https://getdp.co/gNR'>
                    <button type="button" class="btn btn-warning btn-sm" href="#" role="button">CREATE PERSONALISED FLYER</button>
                </a>
            </div>
        </header>
    )
}