import note from '../../../Assets/Images/noteIcon.png'

import './LetterSec.css'




const LetterSec = () => {
    return (
        <div className="letterSec">
            <h1 className='letterSec-title' 
                data-aos={"fade-up"}
            >
                Chairman’s Letter
            </h1>
            <div className=""
                data-aos={"fade-up"}
            >
                <div className="the-letter"
                >
                    <p className="letterWords">
                        <img 
                        className='noteImg'
                        src={note} 
                        alt="note" 
                        />
                        <span className='letter-title'>
                            Dear Valued Partners, Clients, and Stakeholders,
                        </span>
                        <br />
                        <br />
                        It is with great pride and enthusiasm that I welcome you to FDEnergies. 
                        As Chairman, I have had the privilege of witnessing our journey from a vision to a leading force in the oil services sector. 
                        This journey has been marked by resilience, innovation, and a steadfast commitment to excellence.
                        <br />
                        <br />
                        The energy industry is evolving at a rapid pace, 
                        presenting both challenges and opportunities. 
                        At FDEnergies, we are dedicated to embracing these changes 
                        by investing in cutting-edge technologies, 
                        upholding the highest safety standards, and fostering sustainable 
                        practices that not only drive growth but also safeguard 
                        our planet for future generations.
                        <br />
                        <br />
                        Our success has always been built on partnerships—strong, 
                        transparent relationships with our clients, stakeholders, 
                        and the communities we serve. 
                        We understand that our achievements are not just a 
                        result of what we do but how we do it. 
                        Integrity, accountability, and a passion for 
                        excellence are the values that guide us in every aspect of our business.
                        <br />
                        <br />
                        Looking forward, we remain focused on growth and innovation 
                        while keeping sustainability at the core of our strategy. 
                        As we continue to expand our operations globally, including new ventures in energy, 
                        we are committed to delivering unparalleled service and value to all our partners.
                        On behalf of the entire team at FDEnergies, I thank you for your continued trust and support. 
                        Together, we will navigate the challenges of today and 
                        build a brighter, more sustainable future for tomorrow.
                        <br />
                        <br />
                        <br />
                        <b>Sincerely,</b> 
                        <br />
                        <br />
                        <b>Dr. Daw</b>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LetterSec