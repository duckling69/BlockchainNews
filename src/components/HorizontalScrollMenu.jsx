import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import React from 'react'
import { sampleDataNews } from '../constants'
import {AiOutlineLeftCircle} from 'react-icons/ai'
import {AiOutlineRightCircle} from 'react-icons/ai'

const HorizontalScrollMenu = () => {
  return (
    <div>
        <ScrollMenu className='' LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {sampleDataNews.map(({ item }) => (
        <div className='h-[30vh] aspect-video mx-20 rounded-xl bg-gray-300 flex flex-col justify-around '>
            <div className='bg-black p-1'>
                img
            </div>
            <div>
                sample text
            </div>
        </div>
      ))}
    </ScrollMenu>
    </div>
  )
}

function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);
  
    return (
      <AiOutlineLeftCircle disabled={isFirstItemVisible} className='text-3xl' onClick={() => scrollPrev()}>
      </AiOutlineLeftCircle>
    );
  }
  
  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  
    return (
      <AiOutlineRightCircle disabled={isLastItemVisible} className='text-3xl' onClick={() => scrollNext()}>
        Right
      </AiOutlineRightCircle>
    );
  }



export default HorizontalScrollMenu