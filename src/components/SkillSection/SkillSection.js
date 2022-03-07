import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Glasses from '../../assets/images/glasses.png';
import Cube from '../../assets/images/cube.png';
import Mug from '../../assets/images/mug.png';
import './SkillSection.css';
import useStyles from './useStyles';


const SkillSection = (props) => {
    const [spacing, setSpacing] = React.useState(2);

    const classes = useStyles(props);

    const handleChange = (event) => {
    setSpacing(Number(event.target.value));
};

    return (
        <>
        <Grid container spacing={3} id="skill">
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
                <h3>My Skills</h3>
            </Grid>
            <hr></hr>
        </Grid>
        <Grid className={classes.paper} id="SkillSection-Container" sx={{ flexGrow: 1 }} container spacing={2} style={{ backgroundColor: '#E5E8DD', maxHeight: '100%', marginTop: 12 }}>
            <Grid className={classes.singlePaper} item xs={4}>
                <Grid container justifyContent="center" spacing={spacing}>
                    <Grid>
                    <Paper
                        className={classes.tablet}
                        id="skillSection-panels"
                        sx={{
                        height: 440,
                        width: 350,
                        backgroundColor: '#E5E8DD',
                        border: '2px solid #479547',
                        'border-radius': '20% 40% 40% 40% / 80% 20% 30% 25%'
                        }}
                    >
                    <img src={Glasses} alt="Glasses" style={{ height: '20%', width: '25%', marginLeft: '85px', marginTop: '12px', marginBottom: '2px' }}/>
                    <h4 className={classes.h4} style={{ marginTop: '12px' }}>FrontEnd</h4>
                    <List id="items">
                        <ListItem className={classes.listItem1}>
                            <p className={classes.p1}>HTML</p>
                            <p className={classes.p1}>CSS</p>
                            <p className={classes.p1}>Javascript</p>
                        </ListItem>
                        <ListItem className={classes.listItem2}>
                            <p className={classes.p2}>Material.ui</p>
                            <p className={classes.p2}>Bootstrap</p>
                        </ListItem>
                        <ListItem className={classes.listItem3}>
                            <p className={classes.p3}>Materialize.css</p>
                            <p className={classes.p3}>Handlebar</p>
                        </ListItem>
                        <ListItem className={classes.listItem4}>
                            <p className={classes.p4}>React</p>
                            <p className={classes.p4}>jQuery</p>
                        </ListItem>
                    </List>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.singlePaper} item xs={4}>
                <Grid container justifyContent="center" spacing={spacing}>
                    <Grid>
                    <Paper
                        className={classes.tablet}
                        id="skillSection-panels"
                        sx={{
                        height: 440,
                        width: 350,
                        backgroundColor: '#E5E8DD',
                        border: '2px solid #479547',
                        'border-radius': '20% 80% 40% 20% / 100% 30% 60% 85%'
                        }}
                    >
                        <img src={Mug} alt="Mug" style={{ height: '20%', width: '25%', marginLeft: '85px', marginTop: '12px', marginBottom: '4px' }}/>
                        <h4 className={classes.h4} style={{ marginTop: '12px' }}>BackEnd</h4>
                        <List id="items">
                            <ListItem className={classes.listItem5}>
                                <p className={classes.p1}>Node.js</p>
                                <p className={classes.p1}>Express.js</p>
                                <p className={classes.p1}>NPM</p>
                            </ListItem>
                            <ListItem className={classes.listItem6}>
                                <p className={classes.p4}>MongoDB</p>
                                <p className={classes.p4}>MySQL</p>
                            </ListItem>
                            <ListItem className={classes.listItem7}>
                                <p className={classes.p5}>Insomnia</p>
                            </ListItem>
                        </List>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={classes.singlePaper} item xs={4}>
                <Grid container justifyContent="center" spacing={spacing}>
                    <Grid>
                    <Paper
                        className={classes.tablet}
                        id="skillSection-panels"
                        sx={{
                        height: 440,
                        width: 350,
                        backgroundColor: '#E5E8DD',
                        border: '2px solid #479547',
                        'border-radius': '20% 40% 60% 20% / 30% 50% 30% 25%'
                        }}
                    >
                    <img src={Cube} alt="Cube" style={{ height: '20%', width: '25%', marginLeft: '85px', marginTop: '12px', marginBottom: '6px'}}/>
                    <h4 className={classes.h4} style={{ marginTop: '12px' }}>Tools</h4>
                    <List id="items">
                            <ListItem className={classes.listItem3}>
                                <p className={classes.p6}>Figma</p>
                                <p className={classes.p6}>Invision</p>
                                <p className={classes.p6}>Photoshop</p>
                            </ListItem>
                            <ListItem className={classes.listItem8}>
                                <p className={classes.p3}>Heroku</p>
                                <p className={classes.p3}>Github Pages</p>
                            </ListItem>
                            <ListItem className={classes.listItem7}>
                                <p className={classes.p7}>Git</p>
                            </ListItem>
                        </List>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>
    );
}

export default SkillSection;