"use client"
import { Typography, Button, Box } from '@mui/material'
import React from 'react'

const TestSection = () => {
    return (
        <div>
            <section>
                <h3 className='text-center Text-color mt-5'>Color Blind Test</h3>
                <hr className='horizontal-line' />
                <Typography className='para text-center'>
                    click if you have any deficiency  by taking our free online test.
                </Typography>
                <Typography className='para text-center'>
                    Learn more about color blindness, their treatments and which type of do you have.
                </Typography>
                <Box className="align-center Text-white">
                    <Button>Start Test</Button>
                </Box>

            </section>
        </div>
    )
}

export default TestSection
