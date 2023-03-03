import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/keynote.css'
import pic from '../img/keynote.jpg'

export default function Header() {
    return (
        <section class="keynote-speaker">
            <div class="kyntspk-img">
                <img src={pic} alt="keynote speaker" id="keynote"/>
                <button class="btn btn-primary">LinkedIn</button>
            </div>
            <div class="kynt-spk-txt">
                <h2>KEYNOTE SPEAKER</h2>
                <h3> <strong>2023 SPEi President</strong> Med Kamal (Chevron Emeritus)</h3>
                <p>
                    Medhat (Med) M. Kamal is a Chevron Fellow Emeritus and an Honorary Member of SPE. 
                    He had previously worked for Cairo University, Amoco Production Company, Flopetrol Schlumberger, 
                    and ARCO Exploration and Production Company. Kamal has over 45 years of industry experience in well testing, 
                    reservoir description, and production and reservoir engineering. He is the lead author and editor of SPE 
                    Monograph 23 “Transient Well Testing”, and has published more than 35 technical papers in various SPE journals. 
                    He holds B.Sc. degree (with Honors) from Cairo University in Petroleum Engineering and MS and PhD degrees from 
                    Stanford University in Petroleum Engineering with a minor in Computer Science. He served on the boards of 
                    directors of Mid-continent, Gulf Coat, Dallas and Golden gate sections of SPE and chaired the Dallas and Golden 
                    Gate Sections. He also served on the SPE International Board of Directors (2007-2009) as the Regional Director 
                    of Western North America. 
                    Kamal is a distinguished lecturer for SPE (1997-1998 and 2018-2019) where he presented his lectures more than 80 times in 30 countries. He served as member and chairman of SPE Annual Meeting Well Testing, Text Book and Monograph Committees and as a technical editor, review chairman and executive editor of SPE Journal of Petroleum Technology (JPT) and Reservoir Evaluation and Engineering Journal (SPEREE). Kamal chaired the first SPE conference on R&D (San Antonio 2007) and the Western Regional Meeting (2019). He has won several regional and international awards including the Cedric K. Ferguson Medal, the Formation Evaluation Award, SPE Distinguished Service Award, SPE North and East Texas Regional Service Award and the Texas Petroleum Engineer of the Year Award. 

                </p>
            </div>
        </section>
    )
}