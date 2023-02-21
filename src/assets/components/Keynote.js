import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/keynote.css'
import pic from '../img/keynote.jfif'

export default function Header() {
    return (
        <section class="keynote-speaker">
            <img src={pic} alt="keynote speaker" id="keynote"/>
            <div class="kynt-spk-txt">
                <h2>KEYNOTE SPEAKER</h2>
                <h3>Read the message from our keynote speaker</h3>
                <p>
                Proactively incubate enterprise total linkage without sustainable leadership skills. Monotonectally strategize user-centric interfaces whereas low-risk high-yield materials. Efficiently syndicate web-enabled portals for principle centered partnerships.
                Proactively whiteboard revolutionary processes after scalable testing procedures. Holisticly reinvent seamless after business.
                </p>
                <p>SPEi President</p>
                <button>LinkedIn</button>
            </div>
        </section>
    )
}