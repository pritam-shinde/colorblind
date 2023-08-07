"use client"
import { Typography, Button, Box, Container, Grid, Tab } from '@mui/material'
import { TabContext, TabPanel, TabList } from '@material-ui/lab'

// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import React from 'react'

const TestSection = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Container maxWidth='xxl'>
                <Grid container>
                    <Grid item xs={12} md={10} className='mx-auto'>
                        <Box>
                            <Grid container>
                                <Grid item xs={12}>
                                    <h1 className='text-center Text-color mt-5'>Color Blind Test</h1>
                                    <hr className='horizontal-line' />
                                    <Typography className='para text-center'>
                                        click if you have any deficiency  by taking our free online test.
                                    </Typography>
                                    <Typography className='para text-center'>
                                        Learn more about color blindness, their treatments and which type of do you have.
                                    </Typography>
                                    <Box className="text-center mx-auto">
                                        <Button className='Text-white px-4' size="large">Start Test</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={11} className='mx-auto mt-5'>
                        <Box>
                            <Grid container className='TabSection'>
                                <TabContext value={value}>

                                    <Grid item xs={12} lg={8} className='p-md-5'>
                                     
                                        <TabPanel value="1">
                                        <Typography>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</Typography>
                                        <hr className='mt-4' />
                                        </TabPanel>
                                        <TabPanel value="2">Item Two</TabPanel>
                                        <TabPanel value="3">Item Three</TabPanel>
                                    </Grid>
                                    <Grid item xs={12} lg={4} className=''>
                                        <Box className='TabInnerSection m-4 p-2 text-center'>
                                            <Typography>Title</Typography>
                                            <hr />
                                          
                                            <TabList onChange={handleChange} className='d-block'>
                                               
                                                <Tab label="Item One" value="1"/>
                                                <Tab label="Item Two" value="2"/>
                                                <Tab label="Item Three" value="3"/>
                                            </TabList>
                                        </Box>

                                    </Grid>

                                </TabContext>

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default TestSection
