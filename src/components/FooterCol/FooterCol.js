import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import styled from 'styled-components';

const ColStyle = styled.div`
    .heading {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    li {
        margin-bottom: 1rem;
        list-style: none;
        color: grey;
        font-size: 1.2rem;
    }
    a {
        color: var(--gray-1);
        font-size: 1.1rem;
    }
`;

const FooterCol = ({
    heading='col heading',
    Links=[
        {
            type: "Link",
            title: "Home",
            path: "/#"
        },
        {
            type: "Link",
            title: "Skill",
            path: "/#skill"
        },
        {
            type: "Link",
            title: "About",
            path: "/#about"
        },
        {
            type: "Link",
            title: "Project",
            path: "/#project"
        },
    ]
}) => {
    return (
        <ColStyle>
            <h2 className="heading">{heading}</h2>
            <ul>
                {
                    Links.map((item,index) => (
                        <li key={index}>
                            {item.type === 'Link' ? (
                                <HashLink smooth to={item.path}>{item.title}</HashLink>
                            ) : (
                                <a href={item.path} target="_blank"
                                rel="noreferrer">
                                    {item.title}
                                </a>
                            )}
                        </li>
                    ))
                }
            </ul>
        </ColStyle>
    )
}

export default FooterCol;