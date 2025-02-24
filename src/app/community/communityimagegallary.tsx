'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';


const CommunityImageGallery = () => {
    const images = [
        'https://cdn.sanity.io/images/zg5gx8g4/production/1f26be1a64e998e09bc71356f0c15162cc148269-961x1280.jpg?w=961&h=1280&auto=format',
        'https://cdn.sanity.io/images/zg5gx8g4/production/3c75ad1fe0e408b33e0e5b130df105e3c19df782-2000x1334.jpg?w=2000&h=1334&auto=format', 
        'https://cdn.sanity.io/images/zg5gx8g4/production/527f0056d6a10a1f6f04495660c1a6ed84d5ee3c-4000x6000.jpg?w=2560&h=3840&auto=format',
        'https://cdn.sanity.io/images/zg5gx8g4/production/451bcc4838f96174efe21a82eee7da7efedd32d3-2048x1536.jpg?w=2048&h=1536&auto=format',
        'https://cdn.sanity.io/images/zg5gx8g4/production/4d0708860d2263e3e111d123d8a01843e94eb17a-1179x783.png?w=1179&h=783&auto=format',
        'https://cdn.sanity.io/images/zg5gx8g4/production/09bb2857d0253d831cd25ed49584debbfbac6cd0-2195x1235.jpg?w=2195&h=1235&auto=format',
        'https://cdn.sanity.io/images/zg5gx8g4/production/a8cdb7ac969870ad848cf41e7a495866b404c369-1350x1260.png?w=1350&h=1260&auto=format',
        'https://cdn.sanity.io/images/zg5gx8g4/production/527f0056d6a10a1f6f04495660c1a6ed84d5ee3c-4000x6000.jpg?w=2560&h=3840&auto=format',
    ];

    return (
        <div className='p-10 bg-black'>
            <h2 className="text-4xl font-bold text-white text-center mb-8">Event Gallery</h2>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                breakpoints={{
                    640: {
                    slidesPerView: 2
                    },
                    768: {
                    slidesPerView: 3
                    },
                    1024: {
                    slidesPerView: 4
                    }
                }}
                spaceBetween={24}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                className="w-full"
                >
                
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="grid sm:h-[30vw] md:h-[20vw] gap-6 object-cover">
                    <div className="h-full overflow-hidden object-cover">
                        <div className="gatsby-image-wrapper aspect-[6/7] object-cover">
                        <Image 
                            src={image}
                            alt={`Community image ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CommunityImageGallery;