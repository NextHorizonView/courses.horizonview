import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const CourseCard = ({ type, name, description, time, difficulty }) => {
    return (
        <Box sx={{ width: 275 }}>
            <Card sx={{ width: 275 }}>
                <Box sx={{ backgroundColor: '#A6DBB4', display: 'flex', gap: 2, paddingX: 3, paddingY: 2 }}>
                    <TrendingUpIcon sx={{ color: '#34A853' }} />
                    <Typography color="#34A853" variant='p' className='font-bold'>{type}</Typography>
                </Box>
                <CardContent>
                    <Box className='flex flex-col gap-4'>
                        <Typography variant='h6'>{name}</Typography>
                        <Typography variant='p'>{description} </Typography>
                    </Box>
                </CardContent>
                <CardActions sx={{ marginTop: 8 }}>
                    <Box className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-1'>
                            <AccessTimeIcon />
                            <Typography fontSize='medium'>{time}</Typography>
                        </div>
                        <div className='flex items-center gap-2'>
                            {
                                difficulty === 'Beginner' ? <div className='flex gap-[2px] items-end'>
                                    <div className='h-2 w-1 bg-[#34A853]' />
                                    <div className='h-3 w-1 bg-[#b1b1b1]' />
                                    <div className='h-4 w-1 bg-[#b1b1b1]' />
                                </div> :
                                    difficulty === 'Intermediate' ? <div className='flex gap-[2px] items-end'>
                                        <div className='h-2 w-1 bg-[#e8b716]' />
                                        <div className='h-3 w-1 bg-[#e8b716]' />
                                        <div className='h-4 w-1 bg-[#b1b1b1]' />
                                    </div> :
                                        <div className='flex gap-[2px] items-end'>
                                            <div className='h-2 w-1 bg-[#e81616]' />
                                            <div className='h-3 w-1 bg-[#e81616]' />
                                            <div className='h-4 w-1 bg-[#e81616]' />
                                        </div>
                            }
                            <Typography fontSize='medium'>{difficulty}</Typography>
                        </div>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}

export default CourseCard