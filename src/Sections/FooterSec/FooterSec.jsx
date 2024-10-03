import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logoImg from '../../Assets/Images/FDicon.png'
import './FooterSec.css'



const FooterSec = () => {
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
                <a href='!#' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                </a>
                <a href='!#' className='me-4 text-reset'>
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
                </a>
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
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                            </p>
                        </MDBCol>
            
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'
                            style={{
                                color:"var(--font-mainColor)"
                            }}>Products</h6>
                        <p>
                            <a href='!##!' className='text-reset'>
                            Angular
                            </a>
                        </p>
                        <p>
                            <a href='!##!' className='text-reset'>
                            React
                            </a>
                        </p>
                        <p>
                            <a href='!##!' className='text-reset'>
                            Vue
                            </a>
                        </p>
                        <p>
                            <a href='!##!' className='text-reset'>
                            Laravel
                            </a>
                        </p>
                        </MDBCol>
            
                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                        <h6 className='text-uppercase fw-bold mb-4'
                            style={{
                                color:"var(--font-mainColor)"
                            }}>links</h6>
                        <p>
                            <a href='!##!' className='text-reset'>
                            Pricing
                            </a>
                        </p>
                        <p>
                            <a href='!##!' className='text-reset'>
                            Settings
                            </a>
                        </p>
                        <p>
                            <a href='!##!' className='text-reset'>
                            Orders
                            </a>
                        </p>
                        <p>
                            <a href='!##!' className='text-reset'>
                            Help
                            </a>
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
                            New York, NY 10012, US
                        </p>
                        <p>
                            <MDBIcon icon="envelope" className="me-3" />
                            info@example.com
                        </p>
                        <p>
                            <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                        </p>
                        <p>
                            <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                        </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        
            <div className='text-center p-4' 
            style={{ background:"var(--bg-footer)", borderTop:'1px solid rgb(255 255 255 / 15%)'}}
            >
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='!#https://mdbootstrap.com/'>
                MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
        );
}

export default FooterSec