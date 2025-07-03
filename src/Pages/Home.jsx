
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
// ✅ Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Home() {
    // Import Swiper navigation module

    return (
        <div className="font-worksans">
            {/* Banner/Slider Section */}
            <section className="relative">
            <Swiper
                modules={[Navigation, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                effect="fade"
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                className="rounded-b-3xl shadow-2xl relative"
            >
                <SwiperSlide>
                    <div className="h-[420px] bg-[url('https://cdn.pixabay.com/photo/2023/12/06/08/53/winter-8433257_1280.jpg')] bg-cover bg-center flex flex-col items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 rounded-b-3xl"></div>
                        <div className="relative z-10 text-center px-6">
                            <h1 className="text-4xl md:text-5xl font-playfair text-white font-bold drop-shadow-lg mb-4">
                                Donate Warmth, Save Lives
                            </h1>
                            <p className="text-lg md:text-xl text-white mb-6 drop-shadow">
                                Your small act of kindness can bring comfort to someone in need this winter.
                            </p>
                            <button className="bg-[var(--color-primary)] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition">
                                Donate Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="h-[420px] bg-[url('https://cdn.pixabay.com/photo/2019/12/01/20/07/truck-4666300_1280.jpg')] bg-cover bg-center flex flex-col items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 rounded-b-3xl"></div>
                        <div className="relative z-10 text-center px-6">
                            <h1 className="text-4xl md:text-5xl font-playfair text-white font-bold drop-shadow-lg mb-4">
                                Join Our Winter Campaign
                            </h1>
                            <p className="text-lg md:text-xl text-white mb-6 drop-shadow">
                                Together, we can make a difference and spread warmth across Bangladesh.
                            </p>
                            <button className="bg-[var(--color-primary)] hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition">
                                Donate Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* ✅ Navigation Buttons inside Swiper */}
                <div className="swiper-button-prev !text-white !left-2 !z-20"></div>
                <div className="swiper-button-next !text-white !right-2 !z-20"></div>
            </Swiper>
        </section>

            {/* About Section */}
            <section className="py-12 bg-[var(--color-surface)] text-[var(--color-text)]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-playfair text-[var(--color-primary)] mb-6">
                        About Us
                    </h2>
                    <p className="text-lg md:text-xl">
                        Winter Wings is a platform dedicated to connecting donors with volunteers to provide warm clothing to those in need across Bangladesh. Together, we can make a difference and bring warmth to vulnerable communities.
                    </p>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 bg-[var(--color-primary)] text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-playfair mb-6">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-white text-[var(--color-text)] rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Step 1: Register</h3>
                            <p>Sign up and log in to access donation campaigns and forms.</p>
                        </div>
                        <div className="p-6 bg-white text-[var(--color-text)] rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Step 2: Donate</h3>
                            <p>Fill out the donation form and drop off your clothes at collection points.</p>
                        </div>
                        <div className="p-6 bg-white text-[var(--color-text)] rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Step 3: Spread Warmth</h3>
                            <p>Your donations will be distributed to those in need by our volunteers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extra Section 1: Testimonials */}
            <section className="py-12 bg-[var(--color-surface)] text-[var(--color-text)]">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-playfair text-[var(--color-primary)] mb-6">
                        What People Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <p className="italic">
                                "Winter Wings made it so easy to donate clothes. I feel great knowing I helped someone stay warm this winter."
                            </p>
                            <span className="block mt-4 font-semibold">- Sarah A.</span>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <p className="italic">
                                "The platform is user-friendly, and the volunteers are amazing. Highly recommend!"
                            </p>
                            <span className="block mt-4 font-semibold">- Ahmed R.</span>
                        </div>
                        <div className="p-6 bg-white rounded-lg shadow-lg">
                            <p className="italic">
                                "A wonderful initiative that truly makes a difference in people's lives."
                            </p>
                            <span className="block mt-4 font-semibold">- Maria K.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Extra Section 2: Call to Action */}
            <section className="py-12 bg-[var(--color-secondary)] text-white">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-playfair mb-6">Get Involved Today</h2>
                    <p className="text-lg mb-6">
                        Join our mission to spread warmth and kindness. Every donation counts!
                    </p>
                    <button className="btn btn-primary bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
                        Donate Now
                    </button>
                </div>
            </section>
        </div>
    );
}