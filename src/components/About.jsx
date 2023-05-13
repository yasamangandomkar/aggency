import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { Navigation } from "swiper";
import AboutSwiper from "./AboutSwiper";
import "swiper/css/navigation";
import { testimonial } from "../../public/assets/data";
const About = () => {
    return (
        <div className="lg:my-[8rem] ">
            <h2 className="text-center text-white lg:mb-9 mb-20  text-xl">WHAT CLIENTS SAY ABOUT OUR WORK</h2>
            <Swiper

                navigation={true}
                modules={[Navigation]}
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    // when window width is >= 640px
                    320: {

                        slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {

                        slidesPerView: 2,
                    },

                }}
            >
                {testimonial.map(testimonial => (
                    <SwiperSlide key={testimonial.id}>
                        <AboutSwiper data={testimonial} />
                    </SwiperSlide>
                )
                )}


            </Swiper>
        </div>
    )
}

export default About