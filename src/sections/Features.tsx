"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import ProductImage from "@/assets/product-image.png";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section>
      <div>
        <h2>Elevate your SEO efforts.</h2>
        <p>From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.</p>
        <div>
          {tabs.map(tab => (
            <div key={tab.title}>
              <div>
                <DotLottiePlayer src={tab.icon} autoplay />
              </div>
              <div>{tab.title}</div>
              {tab.isNew && <div>new</div>}
            </div>
          ))}
        </div>
        <div>
          <div style={{
            backgroundImage: `url(${ProductImage.src})`
          }}></div>
        </div>
      </div>
    </section>
  );
};
