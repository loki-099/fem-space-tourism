import { useEffect, useState } from "react";

const getWindowWidth = () => {
  const { innerWidth: width } = window
  return { width }
}

const useGetWindowWidth = () => { 
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowWidth
}

export default useGetWindowWidth