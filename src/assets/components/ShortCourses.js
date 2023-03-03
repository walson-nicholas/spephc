import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../css/shortcourses.css"
import machine from "../img/machinelearning.png"
import excel from "../img/excel.png"
import block from "../img/blockchain2.jpg"
import biz from "../img/businessanalytics.jpg"

export default function ShortCourses() {
    return (
       <section class="shortCourses-container" id='shortcourses-section'>
            <h1>SHORT COURSES</h1>
            <p id='inviteText'>Join us for a short course in your favourite area</p>
            <div class="sc-cards">
                <div class="card card-item">
                    <img src={machine} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Fundamentals of Machine Learning in the Energy Industry </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary cd-btn">View more</a>
                    </div>
                </div>

                <div class="card card-item">
                    <img src={excel} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Applications of Microsoft Excel in the Energy Industry</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary cd-btn">View more</a>
                    </div>
                </div>

                <div class="card card-item">
                    <img src={block} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Blockchain in Energy and Sustainability</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary cd-btn">View more</a>
                    </div>
                </div>

                <div class="card card-item">
                    <img src={biz} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Business Analytics in Project Management</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary cd-btn">View more</a>
                    </div>
                </div>
            </div>
            
       </section>
    )
}