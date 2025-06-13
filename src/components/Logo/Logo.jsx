import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import "./Logo.css"

function Logo() {
  const logoRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      const tl = gsap.timeline(
        // {
        //   repeat: -1,
        //   repeatDelay: 1,
        //   yoyo: true
        // }
      )

      tl.from(".logo-letter:nth-child(-n+3) img", {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
      })

      tl.from(".logo-letter:nth-child(n+5):nth-child(-n+7) img", {
        x: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.5)",
      }, "-=0.4"); 

      tl.from(".logo-letter:nth-child(4) img", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      }, "-=0.3");

      tl.from(".logo-subtext .logo-by", {
        y: 20,
        opacity: 0,
        duration: 0.2,
        ease: "power2.out(1)",
      })
      tl.from(".logo-subtext .logo-mobzway", {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out(1.5)",
      })
    }, logoRef) 

    return () => ctx.revert()
  }, [])

  return (
    <div className="logo-wrapper" ref={logoRef}>
      <div className="logo-main">
        <div className="logo-letter"><img src="/logo/G.png" alt="G" /></div>
        <div className="logo-letter"><img src="/logo/A.png" alt="A" /></div>
        <div className="logo-letter"><img src="/logo/M.png" alt="M" /></div>
        <div className="logo-letter logo-z"><img src="/logo/Z.png" alt="Z" /></div>
        <div className="logo-letter"><img src="/logo/W.png" alt="W" /></div>
        <div className="logo-letter"><img src="/logo/A.png" alt="A" /></div>
        <div className="logo-letter"><img src="/logo/Y.png" alt="Y" /></div>
      </div>

      <div className="logo-subtext">
        <img src="/logo/by2.png" alt="by" className="logo-by"/>
        <img src="/logo/mobzway2.png" alt="mobzway" className="logo-mobzway"/>
      </div>
    </div>
  )
}

export default Logo