// "use client"

// import { motion, useScroll, useTransform } from "framer-motion"
// import { useRef } from "react"

// interface SectionTransitionProps {
//   color?: string
// }

// export default function SectionTransition({ color = "#65CF5F" }: SectionTransitionProps) {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"],
//   })

//   const pathLength = useTransform(scrollYProgress, [0, 0.5], [0, 1])
//   const opacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 1, 1, 0])

//   return (
//     <motion.div ref={ref} className="h-24 w-full relative overflow-hidden" style={{ opacity }}>
//       <svg className="absolute w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none">
//         <motion.path
//           d="M0,0 C240,100 480,100 720,50 C960,0 1200,0 1440,100 L1440,100 L0,100 Z"
//           fill={color}
//           style={{ pathLength, opacity }}
//           initial={{ pathLength: 0 }}
//         />
//       </svg>
//     </motion.div>
//   )
// }
