import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

import "./style.scss"

export const IMAGES = [
  {
    id: 0,
    imageSrc:
      "https://res.cloudinary.com/dbzn1y8rt/image/upload/f_auto,q_auto/v1737643607/zexptzvrvwxbsvi8pqho.jpg"
  },
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/269318/pexels-photo-269318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/1166646/pexels-photo-1166646.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: 3,
    imageSrc:
      "https://images.pexels.com/photos/3640668/pexels-photo-3640668.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  },
  {
    id: 4,
    imageSrc:
      "https://images.pexels.com/photos/3570733/pexels-photo-3570733.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
  }
]

const DraggableImages = () => {
  const sliderRef = useRef(null)
  const slidesRef = useRef(null)

  const [sliderWidth, setSliderWidths] = useState(0)
  const [slidesWidth, setSlidesWidths] = useState(0)

  const slideMarginRight = 15
  const totalSlidesMarginRight = slideMarginRight * IMAGES.length

  useEffect(() => {
    const measureSliderWidth = () => {
      setSliderWidths(sliderRef.current.clientWidth)
    }

    const measureSlidesWidth = () => {
      const slidesNode = slidesRef.current.childNodes
      const slidesArr = Array.from(slidesNode)
      const slidesSumWidth = slidesArr.reduce(
        (acc, node) => acc + node.clientWidth,
        0
      )
      setSlidesWidths(slidesSumWidth)
    }

    measureSliderWidth()
    measureSlidesWidth()

    window.addEventListener("resize", measureSliderWidth)
    window.addEventListener("resize", measureSlidesWidth)

    return () => {
      window.removeEventListener("resize", measureSliderWidth)
      window.removeEventListener("resize", measureSlidesWidth)
    }
  }, [sliderWidth, slidesWidth])

  return (
      <div ref={sliderRef} className="motion_slider">
        <motion.ul
          ref={slidesRef}
          drag="x"
          dragConstraints={{
            left: -(slidesWidth - sliderWidth + totalSlidesMarginRight),
            right: 0
          }}
          dragElastic={0.2}
          dragTransition={{ bounceDamping: 18 }}
          className="slides"
        >
          {IMAGES.map(image => (
            <li key={image.id}>
              <div className="h-full w-full" style={{ backgroundImage: `url(${image.imageSrc})` }} />
            </li>
          ))}
        </motion.ul>
      </div>
    
  )
}

export default DraggableImages
