import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TabPanel, TabContext } from '@mui/lab';
import Box from '@mui/material/Box';

const TrendingTopics = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth='xl' className='flex flex-col items-center gap-8 py-24'>
      <Typography variant='h4' align='center' color='accent'>Trending Topics</Typography>
      <Box className='flex flex-col items-center gap-8 mt-12'>
        <TabContext value={value}>
          <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 600, lg: 800 }, bgcolor: 'background.paper' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Interview Prep" />
              <Tab label="Learn To Code" />
              <Tab label="AWS" />
              <Tab label="Generative AI" />
              <Tab label="Machine Learning" />
            </Tabs>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
          <TabPanel value="4">Item Four</TabPanel>
          <TabPanel value="5">Item Five</TabPanel>
        </TabContext>
      </Box>
    </Container>
  )
}

export default TrendingTopics