import React from "react";
import { motion } from "framer-motion";

const Umbrella = ({ ...props }) => {
  const motions = (delay: number, mass?: number) => ({
    initial: { x: -600 },
    exit: { x: -600 },
    transition: {
      delay: delay,
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: mass ? mass : 1
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
        width="101"
        height="101"
        viewBox="0 0 101 101"
        fill="none"
        {...motions(0.1)}
        animate={{ x: 20 }}
      >
        <path
          d="M43.2969 27.1577H57.7043V84.9225H43.2969V27.1577Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M57.7045 44.0688C55.094 44.19 52.6639 44.257 50.5007 44.257C48.3374 44.257 45.9076 44.1902 43.2969 44.0688V58.4026C43.2969 60.1804 44.738 61.6217 46.516 61.6217C48.294 61.6217 49.7351 60.1806 49.7351 58.4026V50.6924C49.9939 50.694 50.2502 50.6952 50.5007 50.6952C52.6213 50.6952 55.0439 50.6336 57.7045 50.5137V44.0688Z"
          fill="#24BD7F"
        />
        <path
          d="M5.83502 40.2882C6.69271 40.4154 7.56751 40.5417 8.45659 40.6669C11.9363 41.1562 15.2003 38.9106 16.0364 35.4978C20.6927 16.4886 39.629 4.22076 50.4999 3.17676C28.1552 3.17676 8.9809 14.3924 0.766305 30.3836C-1.37864 34.559 1.19163 39.5995 5.83502 40.2882Z"
          fill="url(#paint1_linear)"
        />
        <path
          d="M95.1649 40.2882C94.307 40.4154 93.4324 40.5417 92.5434 40.6669C89.0637 41.1562 85.7997 38.9106 84.9637 35.4978C80.3073 16.4886 61.371 4.22076 50.5 3.17676C72.8447 3.17676 92.0191 14.3924 100.234 30.3836C102.379 34.559 99.8083 39.5995 95.1649 40.2882V40.2882Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M50.4993 3.17676C43.8253 6.79847 38.06 19.4289 36.4482 36.5997C36.0845 40.4749 39.0427 43.8655 42.9304 44.0524C45.6807 44.1846 48.2351 44.2572 50.4993 44.2572C52.7636 44.2572 55.3179 44.1848 58.0683 44.0524C61.956 43.8655 64.9142 40.4749 64.5504 36.5997C62.9386 19.4289 57.1734 6.79827 50.4993 3.17676V3.17676Z"
          fill="url(#paint3_linear)"
        />
        <path
          d="M22.3576 42.3829C24.572 42.6207 26.7928 42.8428 28.9884 43.0448C32.7466 43.3907 36.0806 40.6329 36.4226 36.8743C37.9986 19.5637 43.7896 6.81759 50.4992 3.17676C39.9787 4.18716 21.9043 15.7094 16.5296 33.6806C15.3114 37.754 18.1303 41.9288 22.3576 42.3829V42.3829Z"
          fill="url(#paint4_linear)"
        />
        <path
          d="M78.6416 42.3829C76.4272 42.6207 74.2064 42.8428 72.0108 43.0448C68.2527 43.3907 64.9187 40.6329 64.5766 36.8743C63.0007 19.5637 57.2095 6.81759 50.5 3.17676C61.0205 4.18716 79.0949 15.7094 84.4696 33.6806C85.6878 37.754 82.8689 41.9288 78.6416 42.3829V42.3829Z"
          fill="url(#paint5_linear)"
        />
        {/* face start */}
        <motion.path
          {...motions(0.3, 0.9)}
          animate={{ x: 0 }}
          d="M32.8176 26.4661C34.4772 26.4661 35.8226 25.3849 35.8226 24.0512C35.8226 22.7174 34.4772 21.6362 32.8176 21.6362C31.1579 21.6362 29.8125 22.7174 29.8125 24.0512C29.8125 25.3849 31.1579 26.4661 32.8176 26.4661Z"
          fill="#EAADCD"
        />
        <motion.path
          animate={{ x: 0 }}
          {...motions(0.3, 0.9)}
          d="M68.1828 26.4661C69.8424 26.4661 71.1878 25.3849 71.1878 24.0512C71.1878 22.7174 69.8424 21.6362 68.1828 21.6362C66.5231 21.6362 65.1777 22.7174 65.1777 24.0512C65.1777 25.3849 66.5231 26.4661 68.1828 26.4661Z"
          fill="#EAADCD"
        />
        <motion.path
          animate={{ x: 0 }}
          {...motions(0.2, 0.9)}
          d="M37.9688 24.0513C41.2598 24.0513 43.9278 21.3834 43.9278 18.0923C43.9278 14.8012 41.2598 12.1333 37.9688 12.1333C34.6777 12.1333 32.0098 14.8012 32.0098 18.0923C32.0098 21.3834 34.6777 24.0513 37.9688 24.0513Z"
          fill="white"
        />
        <motion.path
          animate={{ x: 0 }}
          {...motions(0.2, 0.9)}
          d="M63.0293 24.0513C66.3204 24.0513 68.9883 21.3834 68.9883 18.0923C68.9883 14.8012 66.3204 12.1333 63.0293 12.1333C59.7382 12.1333 57.0703 14.8012 57.0703 18.0923C57.0703 21.3834 59.7382 24.0513 63.0293 24.0513Z"
          fill="white"
        />
        <motion.path
          animate={{ x: 0 }}
          {...motions(0.2, 0.9)}
          d="M37.9695 21.644C39.9309 21.644 41.521 20.054 41.521 18.0925C41.521 16.1311 39.9309 14.541 37.9695 14.541C36.008 14.541 34.418 16.1311 34.418 18.0925C34.418 20.054 36.008 21.644 37.9695 21.644Z"
          fill="#3B3B44"
        />
        <motion.path
          animate={{ x: 0 }}
          {...motions(0.2, 0.9)}
          d="M63.03 21.644C64.9915 21.644 66.5815 20.054 66.5815 18.0925C66.5815 16.1311 64.9915 14.541 63.03 14.541C61.0686 14.541 59.4785 16.1311 59.4785 18.0925C59.4785 20.054 61.0686 21.644 63.03 21.644Z"
          fill="#3B3B44"
        />
        <motion.path
          animate={{ x: 0 }}
          {...motions(0.2, 0.9)}
          d="M50.5 24.2409C49.4441 24.2409 48.3885 23.8418 47.5271 23.043C47.1197 22.6654 47.0956 22.0288 47.4734 21.6214C47.8511 21.214 48.4876 21.1898 48.8951 21.5677C49.8401 22.4437 51.1599 22.4437 52.1049 21.5677C52.5121 21.19 53.1487 21.214 53.5266 21.6214C53.9042 22.0288 53.8803 22.6652 53.4729 23.043C52.6115 23.8418 51.5559 24.2409 50.5 24.2409V24.2409Z"
          fill="#3B3B44"
        />
        {/* face end */}
        <path
          d="M6.23242 92.6244V90.3221C6.23242 85.8677 9.20508 81.9661 13.4964 80.7712C24.0356 77.8367 38.0917 76.2026 50.4622 76.2026C62.8327 76.2026 76.8888 77.8367 87.428 80.7712C91.7193 81.9661 94.6919 85.8675 94.6919 90.3221V92.6244C94.6919 95.4954 92.3643 97.8231 89.4933 97.8231H11.4311C8.56005 97.8231 6.23242 95.4954 6.23242 92.6244V92.6244Z"
          fill="url(#paint6_linear)"
        />
        <path
          d="M24.3873 88.9567C25.4609 88.9567 26.3313 88.0864 26.3313 87.0128C26.3313 85.9392 25.4609 85.0688 24.3873 85.0688C23.3137 85.0688 22.4434 85.9392 22.4434 87.0128C22.4434 88.0864 23.3137 88.9567 24.3873 88.9567Z"
          fill="#EAA950"
        />
        <path
          d="M42.7842 90.562C43.1954 89.57 42.7246 88.4325 41.7325 88.0213C40.7405 87.6101 39.603 88.0809 39.1918 89.0729C38.7806 90.065 39.2515 91.2025 40.2435 91.6137C41.2355 92.0249 42.373 91.554 42.7842 90.562Z"
          fill="#EAA950"
        />
        <path
          d="M75.0709 87.8503C76.1445 87.8503 77.0148 86.98 77.0148 85.9064C77.0148 84.8327 76.1445 83.9624 75.0709 83.9624C73.9973 83.9624 73.127 84.8327 73.127 85.9064C73.127 86.98 73.9973 87.8503 75.0709 87.8503Z"
          fill="#EAA950"
        />
        <path
          d="M96.6567 34.2344C95.9264 34.2344 95.222 33.8356 94.8655 33.1413C93.9571 31.373 92.8777 29.6461 91.6568 28.0084C90.9927 27.1175 91.1766 25.857 92.0675 25.1929C92.9586 24.5289 94.2188 24.7126 94.883 25.6035C96.2366 27.4193 97.4349 29.3369 98.4447 31.3026C98.9524 32.291 98.5629 33.5038 97.5744 34.0115C97.2802 34.1628 96.966 34.2344 96.6567 34.2344Z"
          fill="#DFF7FA"
        />
        <path
          d="M87.7871 22.7972C87.304 22.7972 86.8195 22.6243 86.434 22.2736C85.9971 21.8763 85.5446 21.4815 85.0893 21.1003C84.2374 20.3868 84.1253 19.1179 84.8386 18.266C85.552 17.4144 86.8209 17.3019 87.6728 18.0153C88.1698 18.4316 88.6637 18.8626 89.1409 19.2968C89.963 20.0442 90.0236 21.3168 89.2759 22.1388C88.8792 22.5754 88.3341 22.7972 87.7871 22.7972V22.7972Z"
          fill="#DFF7FA"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="50.5007"
            y1="39.8469"
            x2="50.5007"
            y2="75.8514"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7ED99E" />
            <stop offset="0.2532" stop-color="#81DAA3" />
            <stop offset="0.5725" stop-color="#88DDB3" />
            <stop offset="0.9261" stop-color="#95E2CD" />
            <stop offset="1" stop-color="#98E3D3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="25.25"
            y1="43.6484"
            x2="25.25"
            y2="10.6212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EA7D32" />
            <stop offset="1" stop-color="#F0B160" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="75.75"
            y1="43.6484"
            x2="75.75"
            y2="10.6212"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#74D2E8" />
            <stop offset="1" stop-color="#BAEAF5" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="50.4993"
            y1="51.3137"
            x2="50.4993"
            y2="1.1644"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EC6F80" />
            <stop offset="1" stop-color="#ECA0AA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear"
            x1="33.3717"
            y1="48.8927"
            x2="33.3717"
            y2="-3.34076"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F9EDAF" />
            <stop offset="1" stop-color="#FFFCDD" />
          </linearGradient>
          <linearGradient
            id="paint5_linear"
            x1="67.6276"
            y1="48.8927"
            x2="67.6276"
            y2="-3.34076"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F9EDAF" />
            <stop offset="1" stop-color="#FFFCDD" />
          </linearGradient>
          <linearGradient
            id="paint6_linear"
            x1="13.5338"
            y1="87.0129"
            x2="102.657"
            y2="87.0129"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EFC27B" />
            <stop offset="1" stop-color="#F3D5A6" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};
export default Umbrella;
