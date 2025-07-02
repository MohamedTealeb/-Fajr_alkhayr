
import ImageSlider from '@/components/sections/imageSlider.jsx'
import Slider from '@/components/sections/slider'
import WaterAwarenessSection from '@/components/sections/video'
import Navbar from '@/components/shared/Navbar.jsx'
import React from 'react'


function page() {
  return (
    <>
   <Navbar />
   <ImageSlider />
   <WaterAwarenessSection />
   <Slider  />

    </>
  )
}

export default page