import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BlogInfo } from "types";
import { generatePath } from "react-router-dom";
import { ROUTE } from "router";
import { BlogCard } from "components";
import { RouterLink } from "./styles";

interface SwiperSlideProps {
  blog: BlogInfo[];
}

export const SwiperSlider = ({ blog }: SwiperSlideProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1.3}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
        568: {
          slidesPerView: 2,
        },
      }}
    >
      {blog.map(({ id, title, imageUrl, publishedAt }) => (
        <SwiperSlide>
          <RouterLink
            key={id}
            to={generatePath(ROUTE.HOME + ROUTE.DETAILS, {
              blogType: "articles",
              id: String(id),
            })}
          >
            <BlogCard title={title} imageUrl={imageUrl} publishedAt={publishedAt} />
          </RouterLink>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
