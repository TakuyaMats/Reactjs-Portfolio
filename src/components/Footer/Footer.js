import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import styled from 'styled-components';
import useStyles from './useStyles';

const FooterStyles = styled.div`
    /* padding-top: 8rem; */
    /* background-color: var(--deep-dark); */
    
    .container {
        display: flex;
        gap: 4rem;
    }
    .footer__col1 {
        flex: 2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4 {
        flex: 1;
    }
    .footer__col1__title {
        font-size: 2.2rem;
        margin-bottom: 28px;
    }
    @media only screen and (max-width: 768px) {
        .container {
            flex-direction: column;
            gap: 0rem;
            & > div {
                margin-top: 5rem;
            }
        }
        .footer__col1 .para {
            max-width: 100%;
        }
    }
`;

const Footer = () => {
    return (
        <FooterStyles>
            <div className="container" id="contact">
                <div className="footer__col1">
                    <h3 className="footer__col1__title">Takuya Matsumoto</h3>
                    <p style={{ fontSize: '14px', color: 'grey' }}>
                        A full stack web developer from Fort Lee, New Jersey.
                        Previously a digital technician with experience in the photography industry, with skills in photoshoots, management, and adobe photoshop.
                    </p>
                </div>
                <div className="footer__col2">
                    <FooterCol heading="Important Links"></FooterCol>
                </div>
                <div className="footer__col3">
                    <FooterCol 
                        heading="Contact Info"
                        Links={[
                            {
                                title: "tmatsnj@gmail.com",
                                path: 'mailto:tmatsnj@gmail.com'
                            },
                            {
                                title: 'New Jersey, United States'
                            }
                        ]}
                    />
                </div>
                <div className="footer__col4">
                    <FooterCol 
                        heading="Social Links"
                        Links={[
                            {
                                title: "Instagram",
                                path: 'https://www.instagram.com/takuyamats/'
                            },
                            {
                                title: "GitHub",
                                path: 'https://github.com/TakuyaMats'
                            },
                            {
                                title: 'Linkedin',
                                path: 'https://www.linkedin.com/in/takuyamatsumoto90/'
                            },
                        ]}
                    />
                </div>
            </div>
        </FooterStyles>
    )
}

export default Footer;