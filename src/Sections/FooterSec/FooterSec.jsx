import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logoImg from '../../Assets/Images/FDicon.png'
import './FooterSec.css'
import { Link } from 'react-router-dom';



const FooterSec = () => {
    const phoneNumber = "+201150745430"; // Replace with your WhatsApp number
    const message = "Hello! I would like to contact you."; // Custom message
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <MDBFooter 
            style={{backgroundColor:"var(--bg-body)"}}
            className='text-center text-lg-start text-muted mt-5'
        >
            <section 
                style={{
                    background:"var(--bg-footer)",
                    borderTop:"1px solid rgb(255 255 255 / 15%)",
                    borderBottom:"1px solid rgb(255 255 255 / 15%)"
                }}
                className='d-flex justify-content-center justify-content-lg-between p-4'>
                <div className='me-5 d-none d-lg-block'>
                <span>Get connected with us on social networks:</span>
                </div>
        
                <div>
                <Link to='!#' target='_blank' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                </Link>
                {/* <a href='!#' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                </a>
                <a href='!#' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" />
                </a>
                <a href='!#' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram" />
                </a>
                <a href='!#' className='me-4 text-reset'>
                    <MDBIcon fab icon="linkedin" />
                </a>
                <a href='!#' className='me-4 text-reset'>
                    <MDBIcon fab icon="github" />
                </a> */}
                </div>
            </section>
        
            <section className=''
            style={{backgroundColor:"var(--bg-body)"}}
            >
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="4" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'
                            style={{
                                color:"var(--font-mainColor)"
                            }}>
                                <img 
                                width={35} 
                                src={logoImg} 
                                alt="logo"
                                style={{
                                    marginRight:"10px",
                                }}
                                />
                                First Distinctive
                            </h6>
                            <p>
                            Delivers innovative oil and gas services, enhancing operational 
                            efficiency with a strong focus on safety and sustainability.
                            </p>
                        </MDBCol>
            
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'
                                style={{
                                    color:"var(--font-mainColor)"
                                }}>Pages</h6>
                            <p>
                                <Link to='/' className='text-reset'>
                                Home
                                </Link>
                            </p>
                            <p>
                                <Link to='/News' className='text-reset'>
                                News
                                </Link>
                            </p>
                            <p>
                                <Link to='/Projects' className='text-reset'>
                                Projects
                                </Link>
                            </p>
                            <p>
                                <Link to='/About    ' className='text-reset'>
                                About
                                </Link>
                            </p>
                        </MDBCol>
            
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'
                            style={{
                                color:"var(--font-mainColor)"
                            }}>Links</h6>
                        <p>
                            <Link to='https://www.opec.org/opec_web/en/' target='-blank' className='text-reset'>
                                OPEC
                            </Link>
                        </p>
                        <p>
                            <Link to='https://www.aramco.com/ar'  target='-blank' className='text-reset'>
                                Aramco
                            </Link>
                        </p>
                        <p>
                            <Link to='https://noc.ly/' target='-blank' className='text-reset'>
                                NOC
                            </Link>
                        </p>
                        </MDBCol>
            
                        <MDBCol md="4" lg="4" xl="3" className='mx-auto mb-md-0 mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'
                        style={{
                            color:"var(--font-mainColor)"
                        }}>
                            Contact</h6>
                        <p>
                            <MDBIcon icon="home" className="me-2" />
                            5 Grognet Street Mosta MST 3613 MALTA
                        </p>
                        <p>
                            <MDBIcon icon="envelope" className="me-3" />
                            info@FDEnergies.com
                        </p>
                        <p>
                            <MDBIcon icon="phone" className="me-3" /> + 20 1153177510
                        </p>
                        <p>
                            <MDBIcon icon="phone" className="me-3" /> + 218920173575
                        </p>
                        {/* <p>
                            <MDBIcon icon="print" className="me-3" /> + 20 
                        </p> */}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        
            <div className='OB text-center p-4' 
            style={{ background:"var(--bg-footer)", borderTop:'1px solid rgb(255 255 255 / 15%)'}}
            >
                © 2024 Copyright <a className='text-reset fw-bold' href={whatsappLink} target="_blank" rel="noopener noreferrer">Powered by OB </a>Created by love ❤️
            </div>
        </MDBFooter>
        );
}

export default FooterSec