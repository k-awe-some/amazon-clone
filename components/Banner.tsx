import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { bannerImages } from "../dev-data";

type BannerProps = {};

const Banner = (props: BannerProps) => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20" />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {bannerImages.map((img) => (
          <img key={img.src} loading="lazy" src={img.src}></img>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
