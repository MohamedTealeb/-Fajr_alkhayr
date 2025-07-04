
import ImageSlider from '@/components/sections/imageSlider.jsx'
import Slider from '@/components/sections/slider'
import WaterAwarenessSection from '@/components/sections/video'
import Navbar from '@/components/shared/Navbar.jsx'
import React from 'react'
import Text from '@/components/sections/text';
import Footer from '@/components/shared/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'


function page() {
  return (
    <>
   <Navbar />
   <WhatsAppButton />
   <ImageSlider />
   <WaterAwarenessSection />
   <Slider  />
   <Text />
   <Footer />

    </>
  )
}

export default page