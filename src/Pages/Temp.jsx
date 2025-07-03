import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper"; // Import Swiper modules
import "swiper/css";
import "swiper/css/navigation"; // Import navigation styles
import { RiSnowflakeLine } from "react-icons/ri";

export default function Home() {
    return (
        <div className="font-worksans">
            {/* Banner/Slider Section */}
            <section className="relative">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true} // Enable looping
                    autoplay={{
                        delay: 3000, // Auto-change every 3 seconds
                        disableOnInteraction: false, // Continue autoplay after interaction
                    }}
                    navigation={true} // Enable navigation buttons
                    modules={[Navigation, Autoplay]} // Add modules
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="h-[400px] bg-[url('https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_1280.jpg')] bg-cover bg-center flex items-center justify-center">
                            <h1 className="text-4xl md:text-5xl font-playfair text-white bg-[rgba(0,0,0,0.5)] px-6 py-3 rounded-lg shadow-lg">
                                Donate Warmth, Save Lives
                            </h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[400px] bg-[url('/images/banner2.jpg')] bg-cover bg-center flex items-center justify-center">
                            <h1 className="text-4xl md:text-5xl font-playfair text-white bg-[rgba(0,0,0,0.5)] px-6 py-3 rounded-lg shadow-lg">
                                Join Our Winter Campaign
                            </h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-[400px] bg-[url('https://cdn.pixabay.com/photo/2019/12/01/20/07/truck-4666300_1280.jpg')] bg-cover bg-center flex items-center justify-center">
                            <h1 className="text-4xl md:text-5xl font-playfair text-white bg-[rgba(0,0,0,0.5)] px-6 py-3 rounded-lg shadow-lg">
                                Together, We Can Make a Difference
                            </h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
}