import { Container, Typography } from '@mui/material'
import React, { useState, useEffect, useRef } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CourseCard from './CourseCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const courses = [
  {
    type: 'COURSE',
    name: 'Grokking Coding Interview Patterns in Python',
    description: 'This course will help you excel in coding interviews in Python by introducing patterns that can be…',
    time: '85h',
    difficulty: 'Beginner',
  },
  {
    type: 'COURSE',
    name: 'Grokking Coding Interview Patterns in Python',
    description: 'This course will help you excel in coding interviews in Python by introducing patterns that can be…',
    time: '85h',
    difficulty: 'Intermediate',
  },
  {
    type: 'COURSE',
    name: 'Grokking Coding Interview Patterns in Python',
    description: 'This course will help you excel in coding interviews in Python by introducing patterns that can be…',
    time: '85h',
    difficulty: 'Advanced',
  },
  {
    type: 'COURSE',
    name: 'Grokking Coding Interview Patterns in Python',
    description: 'This course will help you excel in coding interviews in Python by introducing patterns that can be…',
    time: '85h',
    difficulty: 'Beginner',
  },
  {
    type: 'COURSE',
    name: 'Grokking Coding Interview Patterns in Python',
    description: 'This course will help you excel in coding interviews in Python by introducing patterns that can be…',
    time: '85h',
    difficulty: 'Intermediate',
  },
  {
    type: 'COURSE',
    name: 'Grokking Coding Interview Patterns in Python',
    description: 'This course will help you excel in coding interviews in Python by introducing patterns that can be…',
    time: '85h',
    difficulty: 'Advanced',
  },
]

const TrendingTopics = () => {
  const [value, setValue] = useState(0);
  const scrollContainerRef = useRef(null);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300, // adjust the value as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300, // adjust the value as needed
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftIcon(scrollLeft > 0);
    setShowRightIcon(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth='xl' className='flex flex-col items-center gap-8 py-24'>
      <Typography variant='h4' align='center' color='accent' id='trending-course'>Trending Topics</Typography>
      <Box className='flex flex-col items-center gap-8 mt-12'>
        <Box sx={{ maxWidth: { xs: 320, sm: 480, md: 600, lg: 800 } }}>
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
        <div className='relative px-8'>
          <Box
            sx={{ maxWidth: { xs: 300, sm: 520, md: 700, lg: 1000 } }}
            className='px-3 py-4 overflow-x-auto remove-scrollbar'
            ref={scrollContainerRef}
          >
            <Box className='flex gap-8 mt-4'>
              {courses.map((course, index) => (
                <CourseCard
                  key={index}
                  type={course.type}
                  name={course.name}
                  description={course.description}
                  time={course.time}
                  difficulty={course.difficulty}
                />
              ))}
            </Box>
          </Box>
          {showLeftIcon && (
            <ChevronLeftIcon
              sx={{ display: { xs: 'none', sm: 'inline-block' } }}
              className='absolute left-0 transform -translate-y-1/2 cursor-pointer top-1/2'
              onClick={scrollLeft}
            />
          )}
          {showRightIcon && (
            <ChevronRightIcon
              sx={{ display: { xs: 'none', sm: 'inline-block' } }}
              className='absolute right-0 transform -translate-y-1/2 cursor-pointer top-1/2'
              onClick={scrollRight}
            />
          )}
        </div>
      </Box>
    </Container>
  )
}

export default TrendingTopics