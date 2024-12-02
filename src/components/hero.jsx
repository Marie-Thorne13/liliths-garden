import { useRef, useState } from "react";

const Hero = () => {

  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideos, setloadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

const handleMiniVdClick = () => {
  sethasClicked(true);

  setcurrentIndex((prevIndex) => prevIndex + 1);
}

const getVideoSrc = (index) => 'videos/hero-${index.mp4}'
  return (
    <><div className='relative h-dvh w-screen overflow-x-hidden'>
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-x-hidden 
    rounded-lg bg-blue-75" >
        <div>
            <div className="msk-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden
            rounded-lg ">
              <div onClick={handleMiniVdClick} className='origin-center'>
                <video 
                  ref={nextVideoRef}
                  src={getVideoSrc(currentIndex + 1)}
                />
              </div>
            </div>
         </div>
      </div>
    </div>
      </>
  )
}

export default Hero