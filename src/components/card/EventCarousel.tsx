import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {Box, Typography} from "@mui/material";
import Image from "next/image";
import {carouselData} from "@/mock/CarouselData";

function EventCarousel() {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{clickable: true}}
        >

            {carouselData.map((item) => (
                <SwiperSlide key={item.id}>
                    <Box className="carousel-slide">
                        <Box className="overlay"></Box>
                        <Image
                            src={item.image}
                            alt="Slide image"
                            layout="fill"
                            objectFit="cover"
                        />
                        <Box className="slide-content">
                            <Typography variant={'h2'} fontSize={'14px'} fontWeight={500}>{item.heading}</Typography>
                            <Typography variant={'subtitle1'} sx={{color: "#fff", fontSize: "14px", fontWeight: "600"}}>
                                {item.desc}</Typography>
                        </Box>
                    </Box>
                </SwiperSlide>
            ))}

        </Swiper>
    );
}

export default EventCarousel;