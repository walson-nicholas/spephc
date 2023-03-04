import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../css/breakout.css"
import afolabi from "../img/afolabi.jpg"
import yetunde from "../img/yetunde.jpg"
import franklin from "../img/franklin.jpg"
import biz from "../img/businessanalytics.jpg"

export default function BreakOut() {
    return (
       <section class="breakOut-container" id='breakOut-section'>
            <h1 class='breakout-title'>BREAKOUT SESSION</h1>
            <p id='breakoutText'>Breakout sessions with a domain expert</p>
            <div class="sc-cards">
                <div class="card bocard-item">
                    <img src={afolabi} class="bocard-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Afolabi Akinrogunde</h5>
                        <p class="card-text"><span>Access to Green Mini-Grids: </span>Accelerating electricity access through clean energy mini-grid solutions</p>
                        <a href="#" class="btn btn-primary cd-btn">View more</a>
                    </div>
                </div>

                <div class="card bocard-item">
                    <img src={yetunde} class="bocard-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Yetunde Fadeyi</h5>
                        <p class="card-text"><span>Carbon Emission Reduction and Climate Change</span></p>
                        <a href="#" class="btn btn-primary cd-btn">View more</a>
                    </div>
                </div>

                <div class="card bocard-item">
                    <img src={franklin} class="bocard-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Franklin Omusi</h5>
                        <p class="card-text"><span>The Enabling Role of Energy Storage in Energy Transition:</span> The Importance of Energy Storage Systems in the De-carbonization roadmap</p>
                        <a href="#" class="btn btn-primary cd-btn">View more</a>
                    </div>
                </div>

                <div class="card bocard-item">
                    <img src={biz} class="bocard-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Business Analytics in Project Management</h5>
                        <p class="card-text"><span>Some quick example text</span> to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary cd-btn">View more</a>
                    </div>
                </div>
            </div>
            
       </section>
    )
}