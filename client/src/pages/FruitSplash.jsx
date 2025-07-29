// import React from 'react';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { useRef, useEffect } from 'react';

// const fruitGroups = [
//   { type: 'strawberry', src: '/fruits/strawberry.png', instances: [
//     { id: 1, startX: -150, endX: -60, size: 30 },
//     { id: 2, startX: -120, endX: -30, size: 35 },
//     { id: 3, startX: -90, endX: 0, size: 25 }
//   ]},
//   { type: 'kiwi', src: '/fruits/kiwi.png', instances: [
//     { id: 4, startX: 100, endX: 40, size: 40 },
//     { id: 5, startX: 130, endX: 70, size: 35 },
//     { id: 6, startX: 70, endX: 10, size: 45 }
//   ]},
//   { type: 'mango', src: '/fruits/mango.png', instances: [
//     { id: 7, startX: -80, endX: -20, size: 50 },
//     { id: 8, startX: -110, endX: -50, size: 45 },
//     { id: 9, startX: -50, endX: 10, size: 55 }
//   ]},
//   { type: 'blueberry', src: '/fruits/blueberry.png', instances: [
//     { id: 10, startX: 60, endX: 20, size: 20 },
//     { id: 11, startX: 90, endX: 50, size: 25 },
//     { id: 12, startX: 30, endX: -10, size: 15 }
//   ]},
//   { type: 'apple', src: '/fruits/apple.png', instances: [
//     { id: 13, startX: -160, endX: -80, size: 45 },
//     { id: 14, startX: -130, endX: -60, size: 50 },
//     { id: 15, startX: -100, endX: -40, size: 40 }
//   ]},
//   { type: 'banana', src: '/fruits/banana.png', instances: [
//     { id: 16, startX: 110, endX: 50, size: 55 },
//     { id: 17, startX: 140, endX: 70, size: 50 },
//     { id: 18, startX: 100, endX: 30, size: 60 }
//   ]},
//   { type: 'dragon', src: '/fruits/dragon.png', instances: [
//     { id: 19, startX: -120, endX: -30, size: 50 },
//     { id: 20, startX: -90, endX: -10, size: 45 },
//     { id: 21, startX: -60, endX: 0, size: 55 }
//   ]},
//   { type: 'grape', src: '/fruits/grape.png', instances: [
//     { id: 22, startX: 100, endX: 40, size: 35 },
//     { id: 23, startX: 130, endX: 70, size: 40 },
//     { id: 24, startX: 70, endX: 10, size: 30 }
//   ]},
//   { type: 'lytchi', src: '/fruits/lytchi.png', instances: [
//     { id: 25, startX: -100, endX: -20, size: 35 },
//     { id: 26, startX: -130, endX: -50, size: 40 },
//     { id: 27, startX: -70, endX: 10, size: 30 }
//   ]},
//   { type: 'pineapple', src: '/fruits/pineapple.png', instances: [
//     { id: 28, startX: 80, endX: 20, size: 60 },
//     { id: 29, startX: 110, endX: 50, size: 65 },
//     { id: 30, startX: 90, endX: 30, size: 55 }
//   ]},
//   { type: 'raspberry', src: '/fruits/raspberry.png', instances: [
//     { id: 31, startX: -80, endX: -30, size: 25 },
//     { id: 32, startX: -100, endX: -40, size: 20 },
//     { id: 33, startX: -60, endX: -10, size: 30 }
//   ]},
//   { type: 'starfruit', src: '/fruits/starfruit.png', instances: [
//     { id: 34, startX: 60, endX: 10, size: 45 },
//     { id: 35, startX: 90, endX: 40, size: 50 },
//     { id: 36, startX: 120, endX: 60, size: 40 }
//   ]},
//   { type: 'watermelon', src: '/fruits/watermelon.png', instances: [
//     { id: 37, startX: -110, endX: -30, size: 60 },
//     { id: 38, startX: -80, endX: -10, size: 70 },
//     { id: 39, startX: -140, endX: -50, size: 65 }
//   ]}
// ];

// const FruitSplash = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { threshold: 0.4 });
//   const fruitControls = useAnimation();
//   const bowlControls = useAnimation();

//   useEffect(() => {
//     if (isInView) {
//       bowlControls.start({
//         rotate: [0, -5, 3, -2, 0],
//         transition: { duration: 1.5 }
//       });

//       fruitControls.start((i) => ({
//         x: i.endX,
//         y: 0,
//         opacity: 1,
//         rotate: [i.startX > 0 ? -180 : 180, Math.random() * 60 - 30],
//         transition: {
//           delay: Math.random() * 0.5,
//           duration: 0.8 + Math.random() * 0.4,
//           type: 'spring',
//           bounce: 0.5 + Math.random() * 0.3,
//         },
//       }));
//     } else {
//       fruitControls.start({
//         x: (i) => i.startX,
//         y: -300,
//         opacity: 0,
//         rotate: (i) => i.startX > 0 ? -180 : 180,
//       });
//     }
//   }, [isInView, fruitControls, bowlControls]);

//   const allFruits = fruitGroups.flatMap(group =>
//     group.instances.map(instance => ({
//       ...instance,
//       src: group.src,
//       type: group.type
//     }))
//   );

//   return (
//     <div
//       ref={ref}
//       className="relative w-full h-[600px] flex items-end justify-center bg-gradient-to-b from-white to-orange-100 overflow-hidden"
//     >
//       {/* Falling Fruits */}
//       {allFruits.map((fruit, i) => (
//         <motion.img
//           key={`${fruit.type}-${fruit.id}`}
//           src={fruit.src}
//           alt={`${fruit.type}-${fruit.id}`}
//           className="absolute"
//           style={{
//             width: `${fruit.size}px`,
//             height: `${fruit.size}px`,
//             bottom: `${140 + (fruit.id % 3) * 20}px`, // staggered stacking
//             zIndex: 100 - fruit.id, // proper layering
//           }}
//           custom={fruit}
//           initial={{
//             x: fruit.startX,
//             y: -300,
//             opacity: 0,
//             rotate: fruit.startX > 0 ? -180 : 180,
//           }}
//           animate={fruitControls}
//         />
//       ))}

//       {/* Bowl */}
//       <motion.img
//         src="/fruits/bowl.png"
//         alt="bowl"
//         className="z-10 relative w-[300px] h-auto"
//         animate={bowlControls}
//         initial={{ rotate: 0 }}
//       />
//     </div>
//   );
// };

// export default FruitSplash;

//Scrolling Animation

import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const fruitGroups = [
  {
    type: "strawberry",
    src: "/fruits/strawberry.png",
    instances: [
      { id: 1, startX: -150, endX: -60, size: 30 },
      { id: 2, startX: -120, endX: -30, size: 35 },
      { id: 3, startX: -90, endX: 0, size: 25 },
    ],
  },
  {
    type: "kiwi",
    src: "/fruits/kiwi.png",
    instances: [
      { id: 4, startX: 100, endX: 40, size: 40 },
      { id: 5, startX: 130, endX: 70, size: 35 },
      { id: 6, startX: 70, endX: 10, size: 45 },
    ],
  },
  {
    type: "mango",
    src: "/fruits/mango.png",
    instances: [
      { id: 7, startX: -80, endX: -20, size: 50 },
      { id: 8, startX: -110, endX: -50, size: 45 },
      { id: 9, startX: -50, endX: 10, size: 55 },
    ],
  },
  {
    type: "blueberry",
    src: "/fruits/blueberry.png",
    instances: [
      { id: 10, startX: 60, endX: 20, size: 20 },
      { id: 11, startX: 90, endX: 50, size: 25 },
      { id: 12, startX: 30, endX: -10, size: 15 },
    ],
  },
  {
    type: "apple",
    src: "/fruits/apple.png",
    instances: [
      { id: 13, startX: -160, endX: -80, size: 45 },
      { id: 14, startX: -130, endX: -60, size: 50 },
      { id: 15, startX: -100, endX: -40, size: 40 },
    ],
  },
  {
    type: "banana",
    src: "/fruits/banana.png",
    instances: [
      { id: 16, startX: 110, endX: 50, size: 55 },
      { id: 17, startX: 140, endX: 80, size: 50 },
      { id: 18, startX: 100, endX: 30, size: 60 },
    ],
  },
  {
    type: "dragon",
    src: "/fruits/dragon.png",
    instances: [
      { id: 19, startX: -120, endX: -30, size: 50 },
      { id: 20, startX: -90, endX: -10, size: 45 },
      { id: 21, startX: -60, endX: 0, size: 55 },
    ],
  },
  {
    type: "grape",
    src: "/fruits/grape.png",
    instances: [
      { id: 22, startX: 100, endX: 40, size: 35 },
      { id: 23, startX: 130, endX: 70, size: 40 },
      { id: 24, startX: 70, endX: 10, size: 30 },
    ],
  },
  {
    type: "lytchi",
    src: "/fruits/lytchi.png",
    instances: [
      { id: 25, startX: -100, endX: -20, size: 35 },
      { id: 26, startX: -130, endX: -50, size: 40 },
      { id: 27, startX: -70, endX: 10, size: 30 },
    ],
  },
  {
    type: "pineapple",
    src: "/fruits/pineapple.png",
    instances: [
      { id: 28, startX: 80, endX: 20, size: 60 },
      { id: 29, startX: 110, endX: 50, size: 65 },
      { id: 30, startX: 90, endX: 30, size: 55 },
    ],
  },
  {
    type: "raspberry",
    src: "/fruits/raspberry.png",
    instances: [
      { id: 31, startX: -30, endX: 20, size: 35 },
      { id: 32, startX: -60, endX: -10, size: 45 },
      { id: 33, startX: 0, endX: 30, size: 40 },
    ],
  },
  {
    type: "starfruit",
    src: "/fruits/starfruit.png",
    instances: [
      { id: 34, startX: 60, endX: 10, size: 45 },
      { id: 35, startX: 90, endX: 40, size: 50 },
      { id: 36, startX: 120, endX: 60, size: 40 },
    ],
  },
  {
    type: "watermelon",
    src: "/fruits/watermelon.png",
    instances: [
      { id: 37, startX: -110, endX: -30, size: 60 },
      { id: 38, startX: -80, endX: -10, size: 70 },
      { id: 39, startX: -140, endX: -50, size: 65 },
    ],
  },
];

const FruitSplash = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3 });
  const fruitControls = useAnimation();
  const bowlControls = useAnimation();
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;

    if (isInView) {
      if (isScrollingDown) {
        bowlControls.start({
          rotate: [0, -4, 3, -2, 0],
          transition: { duration: 1.2, ease: "easeInOut" },
        });

        fruitControls.start((fruit, i) => ({
          x: fruit.endX,
          y: 0,
          opacity: 1,
          rotate: [fruit.startX > 0 ? -180 : 180, 0],
          transition: {
            delay: i * 0.03,
            duration: 1.2,
            type: "spring",
            bounce: 0.4,
            ease: "easeOut",
          },
        }));
      } else {
        fruitControls.start((fruit, i) => ({
          x: fruit.startX,
          y: -300,
          opacity: 0,
          rotate: fruit.startX > 0 ? -180 : 180,
          transition: {
            delay: i * 0.02,
            duration: 1,
            ease: "easeInOut",
          },
        }));
      }
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isInView]);

  const allFruits = fruitGroups.flatMap((group) =>
    group.instances.map((instance) => ({
      ...instance,
      src: group.src,
      type: group.type,
    }))
  );

  return (
    <div
      ref={ref}
      className="relative w-full h-[600px] flex items-end justify-center bg-gradient-to-b from-white to-orange-100 overflow-hidden"
    >
      {allFruits.map((fruit, i) => (
        <motion.img
          key={`${fruit.type}-${fruit.id}`}
          src={fruit.src}
          alt={`${fruit.type}-${fruit.id}`}
          className="absolute"
          style={{
            width: `${fruit.size}px`,
            height: `${fruit.size}px`,
            bottom: `${140 + (fruit.id % 3) * 20}px`,
            zIndex: 100 - fruit.id,
          }}
          custom={fruit}
          initial={{
            x: fruit.startX,
            y: -300,
            opacity: 0,
            rotate: fruit.startX > 0 ? -180 : 180,
          }}
          animate={fruitControls}
        />
      ))}

      {/* Bowl */}
      <motion.img
        src="/fruits/bowl.png"
        alt="bowl"
        className="z-10 relative w-[300px] h-auto"
        animate={bowlControls}
        initial={{ rotate: 0 }}
      />
    </div>
  );
};

export default FruitSplash;
