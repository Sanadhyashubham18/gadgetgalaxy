import React from 'react';
import image1 from '../img/earphone.png';
import image2 from '../img/watch.png';
import image3 from '../img/macbook.png';
import image4 from '../img/speaker.png';
import image5 from '../img/gaming.png';
// import image6 from '../img/images6.png';
import Button from "../button/Button";



function CategorySection() {
  return (
    <div className="py-8 dark:bg-neutral-900 duration-200">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* First */}
          <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className="mb-4">
                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                <Button
                  text="Browse"
                  bgColor={"bg-danger"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img 
              src={image1} 
              alt="Earphone" 
              className="w-[320px] absolute bottom-0 right-0" 
            />
          </div>
          {/* Second */}
          <div className='py-10 pl-5 bg-amber-300 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className="mb-4">
                <p className='mb-[2px] text-gray-400'>Smart</p>
                <p className='text-2xl font-semibold mb-[2px]'>Wear</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-50 mb-2'>Smartwatch</p>
                <Button
                  text="Browse"
                  bgColor={"bg-info"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img 
              src={image2} 
              alt="Smartwatch" 
              className="w-[320px] absolute top-0 right-0 transform translate-x-4 -translate-y-4" 
            />
          </div>
          {/* Third */}
          <div className='col-span-2 py-10 pl-5 bg-danger text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className="mb-4">
                <p className='mb-[2px] text-gray-400'>Work</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>MacBook</p>
                <Button
                  text="Browse"
                  bgColor={"bg-light"}
                  textColor={"text-dark"}
                />
              </div>
            </div>
            <img 
              src={image3} 
              alt="MacBook" 
              className="w-[320px] absolute bottom-0 right-0" 
            />
          </div>
        </div>
      </div>
      <div className="py-8 dark:bg-neutral-900">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 2row 1 */}
            <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/90 to-black/80 text-white rounded-3xl relative h-[320px] flex items-end'>
              <div>
                <div className="mb-4">
                  <p className='mb-[2px] text-black'>Enjoy</p>
                  <p className='text-2xl font-semibold mb-[2px]'>With</p>
                  <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Gaming</p>
                  <Button
                    text="Browse"
                    bgColor={"bg-light"}
                    textColor={"text-danger"}
                  />
                </div>
              </div>
              <img 
                src={image5} 
                alt="Gaming" 
                className="w-[320px] absolute bottom-0 right-0" 
              />
            </div>
            {/* 2row 2 */}
            <div className='py-10 pl-5 bg-fuchsia-600 text-white rounded-3xl relative h-[320px] flex items-end'>
              <div>
                <div className="mb-4">
                  <p className='mb-[2px] text-gray-400'>Enjoy</p>
                  <p className='text-2xl font-semibold mb-[2px]'>With</p>
                  <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Speaker</p>
                  <Button
                    text="Browse"
                    bgColor={"bg-info"}
                    textColor={"text-white"}
                  />
                </div>
              </div>
              <img 
                src={image4} 
                alt="Speaker" 
                className="w-[200px] absolute top-0 right-0 transform translate-x-4 -translate-y-4" 
              />
            </div>
            {/* 3row 3 */}
            {/* <div className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className="mb-4">
                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>Earphone</p>
                <Button
                  text="Browse"
                  bgColor={"bg-danger"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img 
              src={image6} 
              alt="Earphone" 
              className="w-[320px] absolute bottom-0 right-0" 
            />
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySection;