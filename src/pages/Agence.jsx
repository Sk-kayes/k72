import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);
  const imgArr = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_640X960-640x960.jpg",
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_640X960-640x960.jpg"
  ]
  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        start: "top 25%",
        end: "top -80%",
        pin: true,
        onUpdate: (elem)=> {
          let imgIdx = 0 ;
          if(elem.progress < 1) {
            imgIdx = Math.round(elem.progress * imgArr.length); 
          } else {
            imgIdx = imgArr.length-1;
          }
          imgRef.current.src = imgArr[imgIdx];
        }
      }
    })
  })
  return (
    <>
      <div className='section-1'>
        <div ref={imgDivRef} className='w-[150px] h-[200px] absolute top-[30vh] left-[30vw] rounded-2xl overflow-hidden'>
          <img ref={imgRef} src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg' alt='team-member' className='w-full h-full object-cover' />
        </div>
        <div className='font-[font2] relative'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw]'>
              Soixan7e <br />Douze
            </h1>
            <div className='pl-[45%]'>
              <p className='text-5xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='section-2 h-screen'>

      </div>
    </>
  )
}

export default Agence
