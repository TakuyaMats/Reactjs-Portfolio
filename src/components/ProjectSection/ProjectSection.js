import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import  SwiperCore, { Navigation } from 'swiper';
import projects from '../../assets/data/projects';
import ProjectItem from '../ProjectItem/ProjectItem';
import styled from 'styled-components';
import 'swiper/swiper-bundle.min.css';
import useStyles from './useStyles';

SwiperCore.use([Navigation]);

const ProjectSectionStyle = styled.div`
    .swiper-container {
        padding-top: 8rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        background-color: var(--deep-dark);
        z-index: 10;
        right: 60px;
        left: auto;
        top: 50px;
        transform: translateY(-50%);
        color: #487047;
        border-radius: 8px;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 2rem;
    }
    @media only screen and (max-width: 768px) {
        .projects__allItems {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 7rem;
            gap: 5rem;
            .projectItem__img {
                width: 100%;
            }
        }
    }
`;

function ProjectSection(props) {
    const classes = useStyles(props);

    return (
        <ProjectSectionStyle>
            <div className={classes.container} id="project">
                <h3 className={classes.h3}>Projects</h3>
                <p className={classes.p}>Some of my recent works</p>
                <hr></hr>
                <div className={classes.projects__allItems}>
                    <Swiper 
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={
                        {
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            }
                        }}>
                        {projects.map((project, index) => {
                            if ( index >= 5) return null;
                            return (
                                <SwiperSlide key={project.id}>
                                    <ProjectItem 
                                        title={project.name}
                                        img={project.img}
                                        desc={project.desc}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </ProjectSectionStyle>
    )
}

export default ProjectSection;