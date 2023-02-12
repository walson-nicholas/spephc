import '../css/theme.css'
import anticipateflyer from '../img/anticipate flyer.jfif'

export default function Theme() {
    return (
        <section>
            <div>
                <h2>
                    <span>Theme:</span>
                    <span>Secure and sustainable energy:</span>
                    <span>challenges and opportunities for the energy professionals.</span>
                </h2>
                <p>
                    Energy is the fulcrum that propels industrialization in both developed and developing economies. 
                    The essential requirement to sustainably meet the ever-growing global energy demands while maintaining 
                    minimum environmental impact associated with the recovery and utilization of the conventional 
                    energy sources has birthed the need to explore alternative and green energy sources.
                    <br /> <br />
                    Despite the continuously increasing drive to implement full transition to new energies from the 
                    currently dominating conventional sources, there is a need for a deliberate, strategic and well-paced 
                    transition roadmap that integrates all stakeholders for an effective and successful transition journey. 
                    While ridden its own challenges, the conventional energy sources are playing and will continue to play a 
                    critical role in ensuring the desired sustainable energy future is achieved.
                    <br /> <br />
                    This symposium will focus on the readiness of the oil and gas industry and its Young Professionals for 
                    these emerging energy frontiers with focus on establishing a strong understanding of the necessary skills 
                    and attributes required for an effective transition to new energies.
                </p>
            </div>
            <img src= {anticipateflyer}/>
        </section>
    )
}