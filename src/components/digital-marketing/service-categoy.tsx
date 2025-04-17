// 'use client'

// import { useEffect, useRef } from "react"
// import Image from "next/image"

// function CompactServiceCategory({
//   title,
//   subtitle,
//   icon,
// }: {
//   icon?: string
//   title?: string
//   subtitle?: string
// }) {
//   return (
//     <div className="flex items-center justify-start w-full max-w-[144px] px-3 py-2 bg-gray-600/40 rounded-full shadow-sm shrink-0 mr-3">
//       <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white -ml-1.5 mr-2 overflow-hidden">
//         {icon && (
//           <Image
//             src={icon || "/placeholder.svg"}
//             alt={title || ""}
//             width={28}
//             height={28}
//             className="object-fill"
//           />
//         )}
//       </div>
//       <div className="text-white leading-none">
//         <h2 className="text-[9.6px] font-semibold tracking-wide">{title}</h2>
//         <p className="text-[7.2px] tracking-[0.42em]">{subtitle}</p>
//       </div>
//     </div>
//   )
// }

// export default function AutoScrollingCategories() {
//   const scrollRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const scrollContainer = scrollRef.current
//     if (!scrollContainer) return

//     let animationId: number
//     let scrollPosition = 0

//     const scroll = () => {
//       scrollPosition += 0.5

//       // Reset when we've scrolled the width of one item
//       if (scrollPosition >= 200) {
//         scrollPosition = 0
//       }

//       scrollContainer.scrollLeft = scrollPosition

//       animationId = requestAnimationFrame(scroll)
//     }

//     animationId = requestAnimationFrame(scroll)

//     return () => {
//       cancelAnimationFrame(animationId)
//     }
//   }, [])

//   return (
//     <div
//       ref={scrollRef}
//       className="flex overflow-x-hidden w-full max-w-full whitespace-nowrap"
//     >
//       {[...Array(10)].map((_, i) => (
//         <CompactServiceCategory
//           key={i}
//           title={`Title ${i + 1}`}
//           subtitle="Subtitle"
//           icon="/placeholder.svg"
//         />
//       ))}
//     </div>
//   )
// }
