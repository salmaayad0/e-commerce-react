import React from 'react'
import Slider from '../componets/Slider'
import Video from '../componets/Video'
import ShopNow from '../componets/ShopNow'
import SectionNew from '../componets/SectionNew'
import TabsCategory from '../componets/TabsCategory'
import Services from '../componets/Services'

export default function Home() {
  return (
    <>
    <Slider />
    <Services />
    
    <div className="d-flex justify-content-center align-items-center my-3">
    <div className="row">
      <TabsCategory />
    </div>
    </div>
    <Video />
    <ShopNow />
    <SectionNew />
    
    </>
  )
}
