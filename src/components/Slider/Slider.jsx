import React, { useState } from "react";
import {FaAngleRight} from "react-icons/fa"
import {FaAngleLeft} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"

const Slider = ({ images }) => {
  const [currentClickedImage, setCurrentClickedImage] =useState(null);
  const [currentIndex,setCurrentIndex] =useState(0);


  const handleNext =()=>{
    if(currentIndex === images.length -1){
      setCurrentIndex(0);

    }else{
      setCurrentIndex( pre=>pre + 1);
    }
    
  }
  const handlePrevious =()=>{
    if (currentIndex === 0){
      setCurrentIndex( images.length -1);
    }else{
      setCurrentIndex(pre=> pre - 1);
    }
  }
  




 

  return (
    <div className=" border rounded  mt-2">
        {
            currentClickedImage && (
                <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-20 flex justify-center items-center">
                    <div className="w-96 h-96 overflow-hidden flex relative">
                        {
                            images.map((val,i)=>{
                                return (
                                    <img className={`h-96 w-full absolute transition-all duration-1000 delay-200 ease-in-out ${i === currentIndex ? "translate-x-0" : 'translate-x-full'}`} key={i} src={val}/>
                                )
                            })
                        }
                        <div>
                          <button onClick={()=>{setCurrentClickedImage(null)

                          }} className=" text-xl font-bold cursor-pointer absolute top-1 z-30 right-1"><AiOutlineClose/></button>
                        </div>
                        <div className="flex w-full h-full justify-between absolute top-0 left-0 items-center">
                          <button onClick={handlePrevious} className="w-10 h-10 rounded-full bg-black text-xl font-bold flex justify-center items-center text-white hover:bg-gray-700 "><FaAngleLeft/></button>
                          <button onClick={handleNext} className="w-10 h-10 rounded-full bg-black text-xl font-bold flex justify-center items-center text-white hover:bg-gray-700 "><FaAngleRight/></button>
                        </div>

                    </div>

                </div>
            )
        }

      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => {
          return (
            <img
              className="cursor-pointer"
              onClick={()=>{
                setCurrentIndex(index);
                setCurrentClickedImage(index)
              }}
              key={index}
              src={image}
              alt="img"
            />
          );
        })}
      </div> 


    </div>
  );
};

export default Slider;
