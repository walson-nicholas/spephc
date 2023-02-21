import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/panelist.css'
import pic from "../img/felix.jfif"

export default function Panelist() {
    return (
        <section class="panelist">
            <h2>PANEL SESSION</h2>
            <p>Meet our panelist</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button 
                            class="accordion-button" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="true" 
                            aria-controls="collapseOne">
                            1.	Felix Obike
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body panel-content">
                            <img src={pic} />
                            <text>
                                <strong>Nigeria Council Chair - Special Guest of Honour:</strong> <br />
                                Experienced Well Engineer with a demonstrated history of working in the oil & energy industry. 
                                Skilled in Gas, Petroleum, Well Construction, Well Stimulation, and Oil & Gas. 
                                Strong engineering professional with a Master's degree focused in Energy and Petroleum Economics from Delta State University (NG). 
                                Skilled also in Well Integrity Management and Well Intervention
                                <br />
                                <button class="btn btn-primary">View more</button>
                            </text>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button 
                            class="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseTwo" 
                            aria-expanded="false" 
                            aria-controls="collapseTwo">
                            2.	Oghogho Effiom
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body panel-content">
                        <text>
                            <strong>ARD - Special Guest of Honour</strong> <br />
                            Experienced Well Engineer with a demonstrated history of working in the oil & energy industry. 
                            Skilled in Gas, Petroleum, Well Construction, Well Stimulation, and Oil & Gas. 
                            Strong engineering professional with a Master's degree focused in Energy and Petroleum Economics from Delta State University (NG). 
                            Skilled also in Well Integrity Management and Well Intervention
                            <br />
                            <button class="btn btn-primary">View more</button>
                        </text>
                            <img src={pic} />                            
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button 
                            class="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseThree" 
                            aria-expanded="false" 
                            aria-controls="collapseThree">
                            3.	Ifeoma Malo
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body panel-content">
                            <img src={pic} />
                            <text>
                                <strong>Spaker's portfolio</strong> <br />
                                Experienced Well Engineer with a demonstrated history of working in the oil & energy industry. 
                                Skilled in Gas, Petroleum, Well Construction, Well Stimulation, and Oil & Gas. 
                                Strong engineering professional with a Master's degree focused in Energy and Petroleum Economics from Delta State University (NG). 
                                Skilled also in Well Integrity Management and Well Intervention
                                <br />
                                <button class="btn btn-primary">View more</button>
                            </text>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button 
                            class="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseFour" 
                            aria-expanded="false" 
                            aria-controls="collapseFour">
                            4.	Yetunde Fadeyi 
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body panel-content">
                            <text>
                                <strong>Spaker's portfolio</strong> <br />
                                Experienced Well Engineer with a demonstrated history of working in the oil & energy industry. 
                                Skilled in Gas, Petroleum, Well Construction, Well Stimulation, and Oil & Gas. 
                                Strong engineering professional with a Master's degree focused in Energy and Petroleum Economics from Delta State University (NG). 
                                Skilled also in Well Integrity Management and Well Intervention
                                <br />
                                <button class="btn btn-primary">View more</button>
                            </text>
                            <img src={pic} />
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button 
                            class="accordion-button collapsed" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseFive" 
                            aria-expanded="false" 
                            aria-controls="collapseFive">
                            5.	Spaker name
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body panel-content">
                            <img src={pic} />
                            <text>
                                <strong>Spaker's portfolio</strong> <br />
                                Experienced Well Engineer with a demonstrated history of working in the oil & energy industry. 
                                Skilled in Gas, Petroleum, Well Construction, Well Stimulation, and Oil & Gas. 
                                Strong engineering professional with a Master's degree focused in Energy and Petroleum Economics from Delta State University (NG). 
                                Skilled also in Well Integrity Management and Well Intervention
                                <br />
                                <button class="btn btn-primary">View more</button>
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}