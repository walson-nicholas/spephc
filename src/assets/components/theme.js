import '../css/theme.css'
import anticipateflyer from '../img/anticipate flyer.jfif'

export default function Theme() {
    return (
        <section class="theme">
            <div>
                <h3>
                    <span>Theme:</span> <span>Secure and Sustainable Energy:</span> <span>Challenges and Opportunities for the Energy Professionals.</span>
                </h3>
                <p>
                    Energy is a critical enabler of economic prosperity, sustainable development, and societal health. 
                    In the past decade, the energy industry has made some strides to build more sustainable energy 
                    systems geared towards environmentally friendly society.
                    <br/><br/>
                    However, recent global and geopolitical events have highlighted the need to ensure uninterrupted, 
                    affordable, and accessible energy for human activities. Therefore, it has become pertinent and 
                    absolutely necessary to find technical and smarter ways to reduce our carbon footprint while, at 
                    the same time, expanding and diversifying our energy sources. 
                    <br/><br/>
                    Striking the right balance between energy security and sustainability is thus critical for the industry. 
                    This we hope to digest as we converge.
                    <br/><br/>
                    This symposium program will feature discussions on the ways forward by addressing the current challenges 
                    and opportunities in the industry and the need to develop solutions that enable secure and sustainable energy
                </p>
            </div>
            <img src= {anticipateflyer}/>
        </section>
    )
}