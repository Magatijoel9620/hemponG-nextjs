'use client'

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CircleArrowUp } from "lucide-react"
export function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
  variant="default"
  size="icon"
  onClick={scrollToTop}
  aria-label="Scroll to top"
  className={cn(
    "h-12 w-12 rounded-full",
    "bg-primary/90 text-primary-foreground",
    "shadow-lg shadow-primary/25",
    "transition-all duration-300",
    "hover:scale-110 hover:bg-primary hover:shadow-xl",
    "active:scale-95",
    isVisible
      ? "translate-y-0 opacity-100"
      : "pointer-events-none translate-y-4 opacity-0"
  )}
>
  <CircleArrowUp
    className={cn(
      "h-6 w-6 stroke-[2.5]",
      isVisible && "animate-[arrowNudge_3s_ease-in-out_infinite]"
    )}
  />
</Button>
    </div>
  )
}