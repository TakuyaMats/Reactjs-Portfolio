import React from 'react';
import { Link } from 'react-router-dom';
import projectImg from '../../assets/images/projectImg.png';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import useStyles from './useStyles';

const ProjectItemStyles = styled.div`
    @media only screen and (max-width: 768px) {
        .projectItem__img {
            height: 350px;
        }
    }
`;

function ProjectItem({
    img= projectImg,
    title= 'Project Name',
    desc= 'lorem ipsum dolor sit amet, consectetur adip',
    props
}) {
    const classes = useStyles(props);

    return (
        <ProjectItemStyles>
            <Link to="/projects" className={classes.projectItem__img}>
                <img style={{ height: '100%' }} src={img} alt="project img" />
            </Link>
            <div className={classes.projectItem__Info}>
                <Link to='#'>
                    <Button className={classes.projectItem__button}  variant="outlined" size="medium">{title}</Button>
                </Link>
                <p className={classes.p}>{desc}</p>
            </div>
        </ProjectItemStyles>
    )
}

export default ProjectItem;