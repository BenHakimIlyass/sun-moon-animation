import React from "react";
import { motion } from "framer-motion";
import useMousePosition from "../useMousePosition";

const Lighthouse = ({ ...props }) => {
  const { x, y } = useMousePosition();
  const motions = (delay: number, outterValue?: any) => ({
    initial: outterValue,
    exit: outterValue,
    transition: {
      delay: delay,
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  });

  return (
    <div
      style={{
        position: "absolute",
        left: "12%",
        bottom: "10%",
        width: "100%"
      }}
      {...props}
    >
      <motion.svg
        width="240"
        height="165"
        viewBox="0 0 135 135"
        fill="none"
        {...motions(0.1, { x: -300 })}
        animate={{ x: 0 }}
      >
        <g clipPath="url(#clip100)">
          <path
            d="M81.0144 74.5112H21.8704L17.1607 121.682C16.4489 128.813 22.0487 135 29.215 135H73.6698C80.8358 135 86.4359 128.813 85.724 121.682L81.0144 74.5112Z"
            fill="url(#paint20)"
          />
          <path
            d="M29.2133 135H56.6183L84.2893 107.329L81.2483 76.8691L24.1992 133.918C25.7227 134.612 27.4188 135 29.2133 135Z"
            fill="url(#paint21)"
          />
          <path
            d="M54.8977 74.5112H21.8703L18.207 111.202L54.8977 74.5112Z"
            fill="url(#paint22)"
          />
          <path
            d="M54.8977 74.5112H21.8703L18.207 111.202L54.8977 74.5112Z"
            fill="url(#paint23)"
          />
          <path
            d="M21.623 30.4321H81.261V62.8464H21.623V30.4321Z"
            fill="url(#paint24)"
          />
          <path
            d="M81.8198 79.95H21.0644C18.0258 79.95 15.5625 77.4867 15.5625 74.4481V68.3481C15.5625 65.3095 18.0258 62.8462 21.0644 62.8462H81.8198C84.8584 62.8462 87.3217 65.3095 87.3217 68.3481V74.4481C87.3217 77.4867 84.8584 79.95 81.8198 79.95Z"
            fill="url(#paint25)"
          />
          <path
            d="M82.0601 30.432C85.0847 30.432 87.3385 27.64 86.7001 24.6835C84.0052 12.2057 72.5135 0 51.4425 0C30.3715 0 18.8798 12.2057 16.1849 24.6835C15.5465 27.64 17.8001 30.432 20.8249 30.432H82.0601Z"
            fill="url(#paint26)"
          />
        </g>
        {/* face start */}
        <motion.path
          {...motions(0.2, { x: -40 })}
          animate={{ x: 0 }}
          d="M27.8077 119.116C30.026 119.116 31.8243 117.671 31.8243 115.888C31.8243 114.105 30.026 112.66 27.8077 112.66C25.5893 112.66 23.791 114.105 23.791 115.888C23.791 117.671 25.5893 119.116 27.8077 119.116Z"
          fill="#EFC5DB"
        />
        <motion.path
          {...motions(0.2, { x: -40 })}
          animate={{ x: 0 }}
          d="M75.0772 119.116C77.2955 119.116 79.0939 117.671 79.0939 115.888C79.0939 114.105 77.2955 112.66 75.0772 112.66C72.8589 112.66 71.0605 114.105 71.0605 115.888C71.0605 117.671 72.8589 119.116 75.0772 119.116Z"
          fill="#EFC5DB"
        />
        <motion.path
          {...motions(0.2, { x: -40 })}
          animate={{ x: 0 }}
          d="M34.6935 115.888C39.0925 115.888 42.6585 112.322 42.6585 107.923C42.6585 103.524 39.0925 99.958 34.6935 99.958C30.2946 99.958 26.7285 103.524 26.7285 107.923C26.7285 112.322 30.2946 115.888 34.6935 115.888Z"
          fill="white"
        />
        <motion.path
          {...motions(0.2, { x: -40 })}
          animate={{ x: 0 }}
          d="M68.1916 115.888C72.5905 115.888 76.1566 112.322 76.1566 107.923C76.1566 103.524 72.5905 99.958 68.1916 99.958C63.7926 99.958 60.2266 103.524 60.2266 107.923C60.2266 112.322 63.7926 115.888 68.1916 115.888Z"
          fill="white"
        />
        <motion.g
          initial={{ x: 0, y: 0 }}
          animate={{ x: (x * 0.01 - 1) * 0.3, y: (y * 0.01 - 1) * 0.3 - 3 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        >
          {/* eyes start */}
          <motion.path
            {...motions(0.2, { x: -40 })}
            animate={{ x: 0 }}
            d="M34.6943 112.67C37.316 112.67 39.4414 110.545 39.4414 107.923C39.4414 105.301 37.316 103.176 34.6943 103.176C32.0726 103.176 29.9473 105.301 29.9473 107.923C29.9473 110.545 32.0726 112.67 34.6943 112.67Z"
            fill="#3B3B44"
          />
          <motion.path
            {...motions(0.2, { x: -40 })}
            animate={{ x: 0 }}
            d="M68.1904 112.67C70.8121 112.67 72.9375 110.545 72.9375 107.923C72.9375 105.301 70.8121 103.176 68.1904 103.176C65.5687 103.176 63.4434 105.301 63.4434 107.923C63.4434 110.545 65.5687 112.67 68.1904 112.67Z"
            fill="#3B3B44"
          />
          <motion.path
            {...motions(0.2, { x: -40 })}
            animate={{ x: 0 }}
            d="M51.4432 116.141C50.0321 116.141 48.6208 115.608 47.4695 114.54C46.925 114.035 46.8927 113.185 47.3977 112.64C47.9025 112.095 48.7536 112.063 49.2979 112.568C50.5611 113.739 52.3255 113.739 53.5884 112.568C54.1327 112.063 54.9835 112.095 55.4886 112.64C55.9934 113.185 55.9614 114.035 55.4168 114.54C54.2655 115.608 52.8542 116.141 51.4432 116.141Z"
            fill="#3B3B44"
          />
          {/* eyes end*/}
        </motion.g>
        {/* face end */}
        {/* light effect */}
        <motion.g
          initial={{ x: 0 }}
          animate={{ x: -70 }}
          exit={{ x: 0 }}
          transition={{
            repeatType: "mirror",
            repeat: Infinity,
            delay: 0.2,
            duration: 2
          }}
          clipPath="url(#clip100)"
        >
          <motion.path
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180 }}
            exit={{ rotateY: 0 }}
            transition={{
              repeatType: "mirror",
              repeat: Infinity,
              duration: 2,
              delay: 0.2
            }}
            d="M94.6907 26.8482L64.5782 33.6358C58.4983 35.0062 54.1797 40.4068 54.1797 46.6394C54.1797 52.872 58.4983 58.2722 64.5782 59.6429L94.6907 66.4303C107.376 69.2898 119.439 59.6435 119.439 46.6394C119.439 33.635 107.377 23.989 94.6907 26.8482Z"
            fill="url(#paint27)"
          />
        </motion.g>
        {/* light effect */}
        <g clipPath="url(#clip100)">
          <path
            d="M53.1745 79.9497H25.4863V88.8223C30.0672 88.8245 38.4318 88.8229 53.1742 88.8229C55.6244 88.8229 57.6112 86.8366 57.6112 84.3864C57.6112 81.936 55.6249 79.9497 53.1745 79.9497Z"
            fill="#C2C8CF"
          />
          {/* d:"M24.7487 66.4306L54.8613 59.643C60.9411 58.2726 65.2598 52.872 65.2598 46.6394C65.2598 40.4068 60.9411 35.0066 54.8613 33.6359L24.7487 26.8485C12.063 23.989 0.00043636 33.6353 0.000435223 46.6394C0.000165162 59.6438 12.0628 69.2898 24.7487 66.4306V66.4306Z" */}
          <path
            d="M21.3279 79.9497L20.4434 88.8083C20.8064 88.8239 24.8801 88.8237 40.5863 88.8231L49.4598 79.9497H21.3279Z"
            fill="#E05D6F"
          />
          <path
            d="M21.5547 13.1095H81.329C75.6055 5.60922 65.7252 0 51.4419 0C37.1585 0 27.2782 5.60922 21.5547 13.1095Z"
            fill="url(#paint28)"
          />
          <path
            d="M36.3009 24.7291H26.7342C25.2489 24.7291 24.0449 23.5251 24.0449 22.0398C24.0449 20.5546 25.2489 19.3506 26.7342 19.3506H36.3006C37.7859 19.3506 38.9899 20.5546 38.9899 22.0398C38.9901 23.5251 37.7859 24.7291 36.3009 24.7291Z"
            fill="#DFF7FA"
          />
          <path
            d="M51.426 24.7291H47.281C45.7958 24.7291 44.5918 23.5251 44.5918 22.0398C44.5918 20.5546 45.7958 19.3506 47.281 19.3506H51.426C52.9112 19.3506 54.1152 20.5546 54.1152 22.0398C54.1152 23.5251 52.9112 24.7291 51.426 24.7291Z"
            fill="#DFF7FA"
          />
        </g>
        <defs>
          <linearGradient
            id="paint20"
            x1="5.54882"
            y1="104.756"
            x2="76.5728"
            y2="104.756"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#D4DBDB" />
            <stop offset="1" stop-color="#F3F3F3" />
          </linearGradient>
          <linearGradient
            id="paint21"
            x1="24.1992"
            y1="105.934"
            x2="84.2893"
            y2="105.934"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EC6F80" />
            <stop offset="1" stop-color="#ECA0AA" />
          </linearGradient>
          <linearGradient
            id="paint22"
            x1="18.207"
            y1="92.8564"
            x2="54.8977"
            y2="92.8564"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EC6F80" />
            <stop offset="1" stop-color="#ECA0AA" />
          </linearGradient>
          <linearGradient
            id="paint23"
            x1="18.207"
            y1="92.8564"
            x2="54.8977"
            y2="92.8564"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EC6F80" />
            <stop offset="1" stop-color="#ECA0AA" />
          </linearGradient>
          <linearGradient
            id="paint24"
            x1="51.4419"
            y1="27.7015"
            x2="51.4419"
            y2="79.7983"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4E5660" />
            <stop offset="1" stop-color="#64768D" />
          </linearGradient>
          <linearGradient
            id="paint25"
            x1="15.6464"
            y1="71.3982"
            x2="86.6564"
            y2="71.3982"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#74D2E8" />
            <stop offset="1" stop-color="#BAEAF5" />
          </linearGradient>
          <linearGradient
            id="paint26"
            x1="16.6539"
            y1="15.216"
            x2="86.0248"
            y2="15.216"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#74D2E8" />
            <stop offset="1" stop-color="#BAEAF5" />
          </linearGradient>
          <linearGradient
            id="paint27"
            x1="42.9368"
            y1="46.6391"
            x2="117.621"
            y2="46.6391"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F4D952" />
            <stop offset="1" stop-color="#F9EDAF" />
          </linearGradient>
          <linearGradient
            id="paint28"
            x1="11.2568"
            y1="6.55476"
            x2="79.6633"
            y2="6.55476"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4E5660" />
            <stop offset="1" stop-color="#64768D" />
          </linearGradient>
          <clipPath id="clip100">
            <rect width="135" height="135" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </div>
  );
};
export default Lighthouse;
