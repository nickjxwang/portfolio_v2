import { useState } from 'react'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

const SingleProjectSlider = ({ project }) => {
    const { slider } = project
    return (
        <div className='mb-4 md:mb-10'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={false}
                pagination={{ clickable: true }}
                effect='fade'
                // className='swiper-pagination-bullet'
                // scrollbar={{ draggable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={swiper => console.log(swiper)}
            >
                {slider.map(item => (
                    <SwiperSlide className='pb-6'>
                        <div className=''>
                            <img
                                src={item}
                                alt=''
                                className='w-full mx-auto bg-cover p-4 md:p-8 xl:w-[65%]'
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default SingleProjectSlider
