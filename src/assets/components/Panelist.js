import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/panelist.css'
import effiom from "../img/effiom.jpg"
import ifeoma from "../img/ifeoma.png"
import ayuk from "../img/ayuk.jpg"

export default function Panelist() {
    return (
        <section class="panelist" id='panelist-section'>
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
                            1.	Oghogho Effiom (Special Guest of Honour)
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body panel-content">
                            <img src={effiom} />
                            <text>
                                <strong>Regional Director, Africa for Society of Petroleum Engineers:</strong> <br />
                                Oghogho Effiom is the Regional Director, Africa for Society of Petroleum Engineers, sitting on the SPE International Board. 
                                Oghogho has over 22 years of technical experience in the Upstream oil and gas businesses with assignments in Nigeria and the 
                                United States covering offshore drilling operations, reserves estimation, field development and execution.
                                She is also currently the domestic gas business opportunity manager for SPDC, a role that integrates technical and commercial 
                                gas projects maturation to support Nigeria’s gas utilization aspiration. She plays a key governance role in risk management, 
                                stakeholder engagement, and budget alignment driving end to end integration of these elements to ensure gas is delivered to domestic markets. 
                                Oghogho is a multi award winner recognized as as one of the 100 most influential women in the oil and has industry in Africa, 
                                the international professional Grit award, the SPE Regional service award as well as the woman in offshore and maritime award winner. 
                                She has also been recognized in Shell with an Upstream impact award winner as well as the Development Function Platinum award winner.

                                <br />
                                <a href='https://www.linkedin.com/in/oghogho-effiom/?originalSubdomain=ng'>
                                    <button class="btn btn-primary pn-btn">LinkedIn</button>
                                </a>
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
                            2.	Ifeoma Malo
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body panel-content revImg">
                            <text>
                                <strong>Co-Founder/ CEO, of Clean Technology Hub Nigeria</strong> <br />
                                Ifeoma Malo is an organizational management expert with over 23 years experience, building and directing organizational 
                                policy and strategy in energy and large-scale utility markets, public health, biotechnology, leadership, change management 
                                and infrastructure finance. She is the Co-Founder/ CEO, of Clean Technology Hub Nigeria.
                                Clean Technology Hub Nigeria is a pioneering hybrid hub for the research,
                                Development, demonstration, and incubation of clean and green ideas and technologies in Africa, and their validation for 
                                commercial-stage development. The Hub was founded in 2016 and is located in Abuja, with virtual hubs spread across the country.
                                Ifeoma Malo is a Caux Scholar, African Leadership PIA Fellow, Desmond Tutu Fellow,
                                Crans Montana New Leader Fellow, Acumen West Africa Fellow and also the Global
                                Leadership Academy-We Africa Network. She is a Commonwealth Leaders
                                Scholar-CSC Leaders. She is also a member of boards that include:GreenPeace
                                International, Access to Energy Institute (AE21), Extractive 360 and Norrenberger
                                Financial Services.
                                <br />
                                <a href='https://www.linkedin.com/in/ifymalo/?originalSubdomain=ng'>
                                    <button class="btn btn-primary pn-btn">LinkedIn</button>
                                </a>
                            </text>
                            <img src={ifeoma} />                            
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
                            3.	NJ Ayuk
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body panel-content">
                            <img src={ayuk} />
                            <text>
                                <strong>Executive Chairman of the African Energy Chamber, CEO of pan-African corporate law conglomerate Centurion Law Group</strong> <br />
                                NJ Ayuk is the Executive Chairman of the African Energy Chamber, CEO of
                                pan-African corporate law conglomerate Centurion Law Group, and the
                                author of Big Barrels as well as Amazon and Wall Street Journal’s bestselling
                                Billions at Play: The Future of African Energy and Doing Deals.
                                His experience includes advising major companies and governments on
                                energy issues and investment strategies.
                                NJ graduated from the University of Maryland College Park and earned a
                                Juris Doctor from William Mitchell College of Law and an MBA from the New
                                York Institute of Technology.
                                <br />
                                <a href='https://www.linkedin.com/in/nj-ayuk-jd-mba-6658662/'>
                                    <button class="btn btn-primary pn-btn">LinkedIn</button>
                                </a>
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
                        <div class="accordion-body panel-content revImg">
                            <text>
                                <strong>Spaker's portfolio</strong> <br />
                                Experienced Well Engineer with a demonstrated history of working in the oil & energy industry. 
                                Skilled in Gas, Petroleum, Well Construction, Well Stimulation, and Oil & Gas. 
                                Strong engineering professional with a Master's degree focused in Energy and Petroleum Economics from Delta State University (NG). 
                                Skilled also in Well Integrity Management and Well Intervention
                                <br />
                                <button class="btn btn-primary pn-btn">View more</button>
                            </text>
                            <img src={effiom} />
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
                            <img src={effiom} />
                            <text>
                                <strong>Spaker's portfolio</strong> <br />
                                Experienced Well Engineer with a demonstrated history of working in the oil & energy industry. 
                                Skilled in Gas, Petroleum, Well Construction, Well Stimulation, and Oil & Gas. 
                                Strong engineering professional with a Master's degree focused in Energy and Petroleum Economics from Delta State University (NG). 
                                Skilled also in Well Integrity Management and Well Intervention
                                <br />
                                <button class="btn btn-primary pn-btn">View more</button>
                            </text>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}