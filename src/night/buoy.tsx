import React from "react";
import { motion } from "framer-motion";

const motions = (delay: number, y?: number) => ({
  initial: { y: y ? y : 400 },
  animate: { y: 0 },
  exit: { y: y ? y : 400 },
  transition: { delay: delay, type: "spring", stiffness: 200, damping: 20 }
});

const repeats = (delay: number) => ({
  transition: {
    repeatType: "mirror",
    repeat: Infinity,
    delay: delay,
    duration: 0.8
  }
});
const Buoy = ({ ...props }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "10%",
        right: "20%"
      }}
      {...props}
    >
      <motion.svg
        {...motions(0)}
        width="146"
        height="146"
        viewBox="0 0 146 146"
        fill="none"
      >
        <motion.g
          clipPath="url(#group0)"
          {...repeats(0)}
          initial={{ rotate: -4 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: 4 }}
        >
          {/* top of the buoy */}
          <motion.path
            {...repeats(0.1)}
            initial={{ y: 4 }}
            animate={{ y: 0 }}
            exit={{ y: -4 }}
            d="M69.267 0H65.7336C62.6872 0 60.111 2.25466 59.7073 5.27441L57.8262 19.3483H77.1745L75.2934 5.27441C74.8897 2.25466 72.3137 0 69.267 0Z"
            fill="url(#paint10)"
          />
          <motion.path
            {...repeats(0.1)}
            initial={{ y: -4 }}
            animate={{ y: 0 }}
            exit={{ y: 4 }}
            d="M45.0956 83.8293C42.4545 83.3635 40.6909 80.845 41.1566 78.2039L51.5089 19.4924C51.9747 16.8513 54.4929 15.0871 57.1345 15.5532C59.7756 16.019 61.5392 18.5374 61.0734 21.1785L50.7212 79.8901C50.2557 82.5312 47.7372 84.2945 45.0956 83.8293Z"
            fill="url(#paint11)"
          />
          <motion.path
            {...repeats(0.1)}
            initial={{ y: -4 }}
            animate={{ y: 0 }}
            exit={{ y: 4 }}
            d="M84.2787 79.8905L73.9262 21.179C73.4604 18.5379 75.224 16.0191 77.8651 15.5536C80.507 15.0878 83.025 16.8512 83.4907 19.4928L93.8432 78.2044C94.309 80.8455 92.5451 83.3642 89.9043 83.8297C87.2629 84.2952 84.7445 82.5319 84.2787 79.8905Z"
            fill="url(#paint12)"
          />
          <motion.path
            {...repeats(0.1)}
            initial={{ y: -4 }}
            animate={{ y: 0 }}
            exit={{ y: 4 }}
            d="M47.2752 52.2492H87.7263C90.4602 52.2492 92.5314 49.7807 92.0568 47.0882L87.7725 22.792H47.229L42.945 47.0882C42.4701 49.7807 44.5413 52.2492 47.2752 52.2492Z"
            fill="url(#paint13)"
          />
          <motion.path
            {...repeats(0.1)}
            initial={{ y: -4 }}
            animate={{ y: 0 }}
            exit={{ y: 4 }}
            d="M44.8496 36.2814H61.1472C63.5237 36.2814 65.45 34.3548 65.45 31.9786C65.45 29.6021 63.5237 27.6758 61.1472 27.6758H46.3672L44.8496 36.2814Z"
            fill="#E05D6F"
          />
          <motion.path
            {...repeats(0.1)}
            initial={{ y: -4 }}
            animate={{ y: 0 }}
            exit={{ y: 4 }}
            d="M89.8532 27.6757H45.1462C42.1896 27.6757 39.793 25.2791 39.793 22.3222V19.572C39.793 16.6154 42.1896 14.2188 45.1462 14.2188H89.853C92.8095 14.2188 95.2062 16.6154 95.2062 19.572V22.3222C95.2064 25.2788 92.8098 27.6757 89.8532 27.6757Z"
            fill="url(#paint14)"
          />
          <motion.path
            {...repeats(0.1)}
            initial={{ y: -4 }}
            animate={{ y: 0 }}
            exit={{ y: 4 }}
            d="M67.5003 99.4055C93.7831 99.4055 100.44 91.7572 100.44 84.1892C100.44 76.6211 86.222 65.002 67.5003 65.002C48.7786 65.002 34.5605 76.6211 34.5605 84.1892C34.5605 91.7572 41.2172 99.4055 67.5003 99.4055Z"
            fill="url(#paint15)"
          />
          <motion.path
            {...repeats(0.1)}
            initial={{ y: -4 }}
            animate={{ y: 0 }}
            exit={{ y: 4 }}
            d="M59.5256 77.0295C54.2092 78.2738 49.2317 80.7555 45.0005 84.3203C42.3822 82.1143 39.4773 80.3244 36.3839 78.9841C35.2006 80.8014 34.5605 82.5863 34.5605 84.1891C34.5605 85.4597 34.7493 86.7326 35.1861 87.9712C36.9088 88.92 38.55 90.0732 40.0711 91.4366C42.876 93.9513 47.1242 93.9513 49.929 91.4366C53.3242 88.3929 57.3129 86.3851 61.4917 85.4097C63.6748 84.9001 65.1125 82.8173 64.7909 80.5987C64.4278 78.092 61.9919 76.4521 59.5256 77.0295Z"
            fill="#E05D6F"
          />
          {/* bottom of the buoy */}
          <path
            d="M130.071 91.4369C120.072 82.4729 104.928 82.4729 94.9289 91.4369C92.124 93.9516 87.8759 93.9516 85.0707 91.4369C75.0716 82.4729 59.9279 82.4729 49.9288 91.4369C47.1239 93.9516 42.8757 93.9516 40.0705 91.4369C30.0717 82.4729 14.9277 82.4729 4.92858 91.4369C1.79238 94.249 0 98.263 0 102.476V112.44C0 124.899 10.1008 135 22.5606 135H112.439C124.899 135 135 124.899 135 112.44V102.476C135 98.263 133.208 94.249 130.071 91.4369Z"
            fill="url(#paint16)"
          />
          <path
            d="M94.679 100.365C91.7999 101.095 90.0572 104.021 90.7874 106.9C91.5175 109.779 94.4429 111.522 97.323 110.792C110.939 107.339 123.586 113.572 134.976 113.414C134.989 113.091 135 112.766 135 112.439V102.655C125.525 102.964 111.295 96.1524 94.679 100.365Z"
            fill="#17C5D9"
          />
          <path
            d="M107.175 129.084H91.6092C90.1239 129.084 88.9199 127.879 88.9199 126.394C88.9199 124.909 90.1239 123.705 91.6092 123.705H107.175C108.661 123.705 109.865 124.909 109.865 126.394C109.865 127.879 108.661 129.084 107.175 129.084Z"
            fill="#DFF7FA"
          />
          <path
            d="M118.25 127.817C117.232 127.817 116.258 127.236 115.805 126.25C115.185 124.901 115.776 123.304 117.126 122.684C118.499 122.052 119.716 121.164 120.744 120.043C121.747 118.948 123.448 118.873 124.543 119.877C125.638 120.88 125.713 122.582 124.709 123.677C123.195 125.329 121.4 126.639 119.372 127.57C119.008 127.738 118.626 127.817 118.25 127.817Z"
            fill="#DFF7FA"
          />
          <path
            d="M45.466 120.803C48.3453 120.073 50.0877 117.147 49.3576 114.267C48.6274 111.388 45.7007 109.646 42.8222 110.376C27.0446 114.377 12.7026 105.411 0 108.328V112.439C0 114.813 0.368695 117.1 1.04854 119.249C10.2183 115.796 26.2516 125.674 45.466 120.803Z"
            fill="#17C5D9"
          />
        </motion.g>
        <defs>
          <linearGradient
            id="paint10"
            x1="67.5005"
            y1="14.8064"
            x2="67.5005"
            y2="1.0246"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EC6F80" />
            <stop offset="1" stop-color="#ECA0AA" />
          </linearGradient>
          <linearGradient
            id="paint11"
            x1="51.1152"
            y1="47.7948"
            x2="51.1152"
            y2="69.6263"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4E5660" />
            <stop offset="1" stop-color="#64768D" />
          </linearGradient>
          <linearGradient
            id="paint12"
            x1="83.8847"
            y1="47.7955"
            x2="83.8847"
            y2="69.6268"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4E5660" />
            <stop offset="1" stop-color="#64768D" />
          </linearGradient>
          <linearGradient
            id="paint13"
            x1="41.0865"
            y1="37.5204"
            x2="96.3883"
            y2="37.5204"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EC6F80" />
            <stop offset="1" stop-color="#ECA0AA" />
          </linearGradient>
          <linearGradient
            id="paint14"
            x1="43.4587"
            y1="20.9472"
            x2="100.805"
            y2="20.9472"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4E5660" />
            <stop offset="1" stop-color="#64768D" />
          </linearGradient>
          <linearGradient
            id="paint15"
            x1="37.3786"
            y1="82.204"
            x2="94.2276"
            y2="82.204"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EC6F80" />
            <stop offset="1" stop-color="#ECA0AA" />
          </linearGradient>
          <linearGradient
            id="paint16"
            x1="-8.88418"
            y1="109.857"
            x2="156.603"
            y2="109.857"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#74D2E8" />
            <stop offset="1" stop-color="#BAEAF5" />
          </linearGradient>
          <clipPath id="group0">
            <rect width="135" height="135" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};
export default Buoy;
