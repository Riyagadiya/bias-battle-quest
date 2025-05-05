
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Function to update state based on current viewport
    const updateViewportState = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set initial state
    updateViewportState()
    
    // Create a media query list object
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Event handler for breakpoint changes
    const handleBreakpointChange = () => {
      updateViewportState()
    }
    
    // Also listen for resize events for any edge cases
    window.addEventListener('resize', handleBreakpointChange)
    
    // Modern API for media query listeners
    if (mql.addEventListener) {
      mql.addEventListener('change', handleBreakpointChange)
    } else {
      // Fallback for older browsers
      mql.addListener(handleBreakpointChange)
    }
    
    return () => {
      window.removeEventListener('resize', handleBreakpointChange)
      
      if (mql.removeEventListener) {
        mql.removeEventListener('change', handleBreakpointChange)
      } else {
        // Fallback for older browsers
        mql.removeListener(handleBreakpointChange)
      }
    }
  }, [])

  return !!isMobile
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)
  const TABLET_MIN = 768
  const TABLET_MAX = 1024

  React.useEffect(() => {
    const updateState = () => {
      const width = window.innerWidth
      setIsTablet(width >= TABLET_MIN && width < TABLET_MAX)
    }
    
    updateState()
    
    const mqlMin = window.matchMedia(`(min-width: ${TABLET_MIN}px)`)
    const mqlMax = window.matchMedia(`(max-width: ${TABLET_MAX - 1}px)`)
    
    const handleChange = () => updateState()
    
    window.addEventListener('resize', handleChange)
    
    if (mqlMin.addEventListener && mqlMax.addEventListener) {
      mqlMin.addEventListener('change', handleChange)
      mqlMax.addEventListener('change', handleChange)
    } else {
      mqlMin.addListener(handleChange)
      mqlMax.addListener(handleChange)
    }
    
    return () => {
      window.removeEventListener('resize', handleChange)
      
      if (mqlMin.removeEventListener && mqlMax.removeEventListener) {
        mqlMin.removeEventListener('change', handleChange)
        mqlMax.removeEventListener('change', handleChange)
      } else {
        mqlMin.removeListener(handleChange)
        mqlMax.removeListener(handleChange)
      }
    }
  }, [])

  return !!isTablet
}
