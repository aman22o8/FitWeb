import React from 'react'
import { easeInOut, motion} from 'framer-motion'
import Testimonialpage from '../pages/Testimonialpage'





//main kaam is me hoga
const Landing = () => {
  return (
    <div className='w-full'>
        {/* <div className='bg-black'> */}
            <div className='container_margin w-full  bg-black'>
                <div className='head_text_wrap  text-center relative'>
                    <h1 className='text-white text-[11em] text-center tracking-[-1.02rem] mt-0 mb-0 font-bold leading-[96%] font-[Antonio]'>IT'S NOT FITNESS
                        <br/>
                        <span className='text-[#fb5607]'>IT'S LIFE</span>

                    </h1>
                    <motion.div whileInView={{opacity:1,x:0}}  
                        animate={{x:-800}}
                        transition={{duration:2,delay:.09,ease:easeInOut}}
                    className='headline_wrapper '></motion.div>
                </div>
                <div  className='video_container h-screen w-full'>
                <motion.video initial={{opacity:1}} 
                 transition={{duration:.9,delay:.05}}
                  src="/videos/b_Gym.mp4" className="w-[100%] h-[100%] object-cover" muted loop autoPlay/>

                </div>
            </div>
        {/* </div> */}
       { /* testimonials */ }
        <div className=' w-full'>
        <Testimonialpage/>
        </div>
                

<motion.div whileInView={{opacity:1}} initial={{opacity:0}}
transition={{opacity:1,duration:5,delay:5}}  className='h-[100vh] w-full bg-white relative'>
                {/* https://design2seo.com/assets/blog/svg-clipping/video_waves3.mp4 */}
            <video  src="/videos/25fps.mp4" className="w-[100%] h-[100%] object-cover" muted loop autoPlay/>
              <div className='w-[100%] absolute top-[0px] left-0 flex flex-col mix-blend-multiply bg-black '>
                <motion.h1  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-150}} 
transition={{duration:3,delay:.03,ease:easeInOut}}
 className='myfont1 '>FIND YOUR</motion.h1>
                <motion.h1 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-200}} 
transition={{duration:3.5,delay:.08,ease:easeInOut}} className='myfont' >STRENGTH</motion.h1>
              </div>
    </motion.div>


</div>
  )
}

export default Landing