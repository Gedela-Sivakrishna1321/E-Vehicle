import React from 'react'
import EmbedVideo from '../Components/EmbedVideo/EmbedVideo'
import ReachUs from '../Components/ReachUs/ReachUs'

const Gallery = () => {
  return (
    <div>
        
     {/* Play Review Videos */}
      <div className="my-5 p-5 w-full">
        <h1 className="text-xl font-medium sm:text-2xl lg:text-3xl">
          Checkout our video collection
        </h1>
        <EmbedVideo />
      </div>

      <ReachUs/>

    </div>
  )
}

export default Gallery