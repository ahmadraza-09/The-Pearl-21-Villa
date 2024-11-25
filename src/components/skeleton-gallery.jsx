import { Box, Skeleton } from '@mui/material'
import React from 'react'

const SkeletonGallery = () => {
  return (
    <div className='skeleton-gallery-section'>
        <Box sx={{
            width: "100%",
            height: "100%",
        }}>
            <Skeleton variant='rounded' width={250} height={150}/>
        </Box>
      
    </div>
  )
}

export default SkeletonGallery
