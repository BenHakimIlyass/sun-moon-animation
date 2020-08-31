import React from "react";
import { motion } from "framer-motion";

const motions = (delay: number, y?: number) => ({
  initial: { y: y ? y : 400 },
  animate: { y: 0 },
  exit: { y: y ? y : 400 },
  transition: { delay: delay, type: "spring", stiffness: 200, damping: 20 }
});

const repeats = {
  transition: {
    duration: 0.8,
    repeatType: "mirror",
    repeat: Infinity
  }
};
const Boat = ({ ...props }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 100,
        right: "20%"
      }}
      {...props}
    >
      <motion.svg
        {...motions(0)}
        width="142"
        height="144"
        viewBox="0 0 132 132"
        fill="none"
      >
        <motion.g
          clipPath="url(#clip0)"
          {...repeats}
          initial={{ y: -4 }}
          animate={{ y: 0 }}
          exit={{ y: 4 }}
        >
          {/* flags start */}
          <motion.path
            {...repeats}
            initial={{ y: -4 }}
            animate={{ y: 0 }}
            exit={{ y: 4 }}
            d="M53.5485 6.56348C53.5485 6.56348 39.302 8.65497 26.544 15.1982C22.6981 17.1705 22.7258 22.6659 26.5911 24.5999C39.414 31.015 53.6808 32.9635 53.6808 32.9635L53.5485 6.56348Z"
            fill="url(#blue_flag)"
          />
          <motion.path
            {...repeats}
            initial={{ y: -4 }}
            animate={{ y: 0 }}
            exit={{ y: 4 }}
            d="M50.3547 83.809C42.2112 84.8949 29.7293 84.4945 20.376 83.6031C15.0037 83.0911 11.4586 77.7996 13.0087 72.6303C18.7407 53.5137 37.1476 36.5761 51.3318 31.3887L50.3547 83.809Z"
            fill="url(#left_flag)"
          />
          <path
            d="M40.8503 49.4258V56.2501C38.3176 58.8669 36.7549 62.4275 36.7549 66.3489C36.7549 70.2 38.2605 73.7048 40.7138 76.3078C36.697 76.3817 32.5033 76.2455 28.6248 76.0256C26.3971 75.8994 24.4802 77.5802 24.3177 79.8055C24.1515 82.0811 25.8814 84.0569 28.1596 84.1807C35.351 84.5717 43.104 84.6096 49.0017 83.9719V49.4258C49.0017 47.175 47.1768 45.3501 44.926 45.3501C42.6749 45.3501 40.8503 47.1747 40.8503 49.4258V49.4258Z"
            fill="#EFC534"
          />
          <motion.path
            {...repeats}
            initial={{ rotate: -4 }}
            animate={{ rotate: 0 }}
            exit={{ rotate: 4 }}
            d="M63.9287 14.3311C83.9233 18.4814 102.668 39.1878 114.908 60.9952C118.678 67.713 114.668 76.1386 107.091 77.5312C92.1297 80.2814 70.261 81.833 59.8906 80.4481L63.9287 14.3311Z"
            fill="url(#right_flag)"
          />
          <path
            d="M89.0283 71.7743C85.5698 72.1119 82.092 72.377 78.7484 72.5542C79.6421 70.6715 80.1436 68.5679 80.1436 66.3486C80.1436 62.427 78.5803 58.8657 76.0479 56.2477V45.9815C76.0479 43.7306 74.223 41.9058 71.9722 41.9058C69.7213 41.9058 67.8965 43.7304 67.8965 45.9815V80.9496C74.2606 81.044 82.0986 80.6388 89.8327 79.8836C92.1429 79.658 93.794 77.5434 93.4621 75.246C93.1508 73.0891 91.1976 71.5626 89.0283 71.7743V71.7743Z"
            fill="#EFC534"
          />
          {/* flags end */}
          <path
            d="M67.8966 97.1249H49.002V13.3461C49.002 8.12845 53.2317 3.89893 58.4492 3.89893C63.6668 3.89893 67.8964 8.12871 67.8964 13.3461V97.1249H67.8966Z"
            fill="url(#paint4)"
          />
          <path
            d="M9.9439 90.9813C33.5043 93.8359 84.3001 92.6647 117.836 78.2639C124.809 75.2697 132.508 80.7448 131.973 88.3143C131.346 97.209 128.579 107.318 125.294 114.891C123.022 120.13 118.283 123.871 112.657 124.854C88.8949 129.004 31.5204 129.563 11.5876 124.252C8.4564 123.417 5.82665 121.291 4.36808 118.397C1.76805 113.239 0.326302 106.538 0.0112905 100.219C-0.262702 94.7318 4.48982 90.3206 9.9439 90.9813V90.9813Z"
            fill="url(#paint5)"
          />
          <path
            d="M117.837 78.2638C84.3004 92.6644 33.5046 93.8358 9.94414 90.9812C4.49007 90.3205 -0.26246 94.7317 0.0112693 100.219C0.0875243 101.749 0.231357 103.301 0.440138 104.849C20.9191 109.641 91.2706 110.097 131.852 89.7438C131.898 89.265 131.94 88.7872 131.974 88.3144C132.508 80.7447 124.809 75.2698 117.837 78.2638V78.2638Z"
            fill="url(#paint6)"
          />
          <path
            d="M65.6032 72.7371H51.2948C47.7666 72.7371 44.9062 69.8768 44.9062 66.3486C44.9062 62.8203 47.7666 59.96 51.2948 59.96H65.6032C69.1314 59.96 71.9918 62.8203 71.9918 66.3486C71.9918 69.8768 69.1314 72.7371 65.6032 72.7371Z"
            fill="url(#paint7)"
          />
          <path
            d="M65.6032 38.7176H51.2948C47.7666 38.7176 44.9062 35.8573 44.9062 32.329C44.9062 28.8008 47.7666 25.9404 51.2948 25.9404H65.6032C69.1314 25.9404 71.9918 28.8008 71.9918 32.329C71.9918 35.8573 69.1314 38.7176 65.6032 38.7176Z"
            fill="url(#paint8)"
          />
          <path
            d="M113.364 119.092C112.349 119.092 111.382 118.501 110.951 117.511C110.372 116.179 110.982 114.63 112.313 114.05C113.167 113.679 113.914 113.139 114.534 112.446C115.502 111.363 117.165 111.271 118.247 112.239C119.329 113.207 119.422 114.869 118.454 115.952C117.325 117.214 115.965 118.197 114.412 118.873C114.07 119.021 113.714 119.092 113.364 119.092Z"
            fill="white"
          />
          <path
            d="M89.8107 121.978C88.4342 121.978 87.2767 120.907 87.1889 119.514C87.0976 118.064 88.1986 116.815 89.648 116.724C94.3487 116.428 98.6742 116.064 102.505 115.642C103.947 115.481 105.248 116.523 105.406 117.967C105.566 119.411 104.524 120.71 103.081 120.869C99.1688 121.3 94.7605 121.672 89.9785 121.973C89.9225 121.976 89.8665 121.978 89.8107 121.978V121.978Z"
            fill="white"
          />
        </motion.g>
        <defs>
          <linearGradient
            id="blue_flag"
            x1="54.8449"
            y1="19.7575"
            x2="11.328"
            y2="19.975"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#74D2E8" />
            <stop offset="1" stop-color="#BAEAF5" />
          </linearGradient>
          <linearGradient
            id="left_flag"
            x1="47.8038"
            y1="57.9267"
            x2="0.696935"
            y2="57.9267"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4D952" />
            <stop offset="1" stop-color="#F9EDAF" />
          </linearGradient>
          <linearGradient
            id="paint2"
            x1="58.7"
            y1="47.6474"
            x2="116.726"
            y2="47.6474"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4D952" />
            <stop offset="1" stop-color="#F9EDAF" />
          </linearGradient>
          <linearGradient
            id="right_flag"
            x1="64.2216"
            y1="47.6474"
            x2="119.081"
            y2="47.6474"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4D952" />
            <stop offset="1" stop-color="#F9EDAF" />
          </linearGradient>
          <linearGradient
            id="paint4"
            x1="58.4494"
            y1="111.506"
            x2="58.4494"
            y2="-33.1189"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#AC6C58" />
            <stop offset="1" stop-color="#DA9B8C" />
          </linearGradient>
          <linearGradient
            id="paint5"
            x1="65.9997"
            y1="123.088"
            x2="65.9997"
            y2="73.7075"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F9EDAF" />
            <stop offset="1" stop-color="#FFFCDD" />
          </linearGradient>
          <linearGradient
            id="paint6"
            x1="18.0882"
            y1="92.5082"
            x2="144.325"
            y2="92.5082"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#74D2E8" />
            <stop offset="1" stop-color="#BAEAF5" />
          </linearGradient>
          <linearGradient
            id="paint7"
            x1="37.8732"
            y1="66.3486"
            x2="67.6329"
            y2="66.3486"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4E5660" />
            <stop offset="1" stop-color="#64768D" />
          </linearGradient>
          <linearGradient
            id="paint8"
            x1="37.8732"
            y1="32.329"
            x2="67.6329"
            y2="32.329"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4E5660" />
            <stop offset="1" stop-color="#64768D" />
          </linearGradient>
          <clipPath id="clip0">
            <rect width="132" height="132" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};
export default Boat;
