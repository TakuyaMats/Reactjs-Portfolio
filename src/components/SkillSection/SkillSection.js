import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Glasses from '../../assets/images/glasses.png';
import Cube from '../../assets/images/cube.png';
import Mug from '../../assets/images/mug.png';
import './SkillSection.css';

const SkillSection = () => {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event) => {
    setSpacing(Number(event.target.value));
};

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2} style={{ backgroundColor: '#E5E8DD', maxHeight: '100%' }}>
            <Grid item xs={4}>
                <Grid container justifyContent="center" spacing={spacing}>
                    <Grid>
                    <Paper
                        id="skillSection-panels"
                        sx={{
                        height: 440,
                        width: 350,
                        backgroundColor: '#E5E8DD',
                        'border-radius': '20% 40% 40% 40% / 80% 20% 30% 25%'
                        }}
                    >
                    <img src={Glasses} alt="Glasses" style={{ height: '20%', width: '25%', marginLeft: '85px', marginTop: '12px', marginBottom: '2px' }}/>
                    <h4 id="skillSection-h4" style={{ marginLeft: '85px', marginTop: '12px' }}>FrontEnd</h4>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid container justifyContent="center" spacing={spacing}>
                    <Grid>
                    <Paper
                        id="skillSection-panels"
                        sx={{
                        height: 440,
                        width: 350,
                        backgroundColor: '#E5E8DD',
                        'border-radius': '20% 80% 40% 20% / 100% 30% 60% 85%'
                        }}
                    >
                        <img src={Mug} alt="Mug" style={{ height: '20%', width: '25%', marginLeft: '85px', marginTop: '12px', marginBottom: '2px' }}/>
                        <h4 style={{ marginLeft: '85px', marginTop: '12px' }}>BackEnd</h4>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Grid container justifyContent="center" spacing={spacing}>
                    <Grid>
                    <Paper
                        id="skillSection-panels"
                        sx={{
                        height: 440,
                        width: 350,
                        backgroundColor: '#E5E8DD',
                        'border-radius': '20% 40% 60% 20% / 30% 50% 30% 25%'
                        }}
                    >
                    <img src={Cube} alt="Cube" style={{ height: '20%', width: '25%', marginLeft: '85px', marginTop: '12px', marginBottom: '2px'}}/>
                    <h4 id="skillSection-h4" style={{ marginLeft: '85px', marginTop: '12px' }}>Design</h4>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SkillSection;