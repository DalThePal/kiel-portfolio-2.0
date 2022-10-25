import React, { useEffect, useRef, useState } from "react"

import ScrollSmoother from "gsap/ScrollSmoother"

export const useIsSmooth = () => {
  const [smooth, setSmooth] = useState(true)

  useEffect(() => {
    const enableSmooth = () => {
      setSmooth(true)
    }
    const disableSmooth = () => {
      setSmooth(false)
    }

    window.addEventListener("wheel", enableSmooth, { passive: true })
    window.addEventListener("touchstart", disableSmooth, { passive: true })

    return () => {
      window.removeEventListener("wheel", enableSmooth)
      window.removeEventListener("touchstart", disableSmooth)
    }
  }, [])

  return smooth
}

const Scroll = ({ children }) => {
  const isSmooth = useIsSmooth()
  const isPaused = useRef(false)

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: isSmooth ? 1 : 0,
      smoothTouch: isSmooth ? 1 : 0,
      effects: true,
    })

    // persist paused state across re-renders
    setTimeout(() => {
      smoother.paused(isPaused.current)
    }, 0)

    return () => {
      isPaused.current = smoother.paused()
      smoother.kill()
    }
  }, [isSmooth])

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  )
}

export default Scroll
