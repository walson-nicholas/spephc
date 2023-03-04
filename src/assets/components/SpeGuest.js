import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/speGuest.css'
import effiom from '../img/effiom.jpg'
import felix from '../img/felix.jfif'

export default function speGuest() {
    return (
        <section class="special_Guest_container">
            <h2>SPECIAL GUEST OF HONOUR</h2>

            <div class="sg-cards">
                <div class="card sgcard-item">
                    <img src={effiom} class="sgcard-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Oghogho Effiom</h5>
                        <p class="card-text">
                            Oghogho Effiom is the Regional Director, Africa for Society of Petroleum Engineers, 
                            sitting on the SPE International Board. Oghogho has over 22 years of technical experience in the 
                            Upstream oil and gas businesses with ... 
                        </p>
                        <a href="#" class="btn btn-primary sgcard-btn">View more</a>
                    </div>
                </div>

                <div class="card sgcard-item">
                    <img src={felix} class="sgcard-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Felix Obike</h5>
                        <p class="card-text">
                            Oghogho Effiom is the Regional Director, Africa for Society of Petroleum Engineers, 
                            sitting on the SPE International Board. Oghogho has over 22 years of technical experience in the 
                            Upstream oil and gas businesses with ... 
                        </p>
                        <a href="#" class="btn btn-primary sgcard-btn">View more</a>
                    </div>
                </div>
            </div>
            
        </section>
    )
}