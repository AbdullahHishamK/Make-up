import React from 'react'
import Navbar from '../Nav-bar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const pageVariants = {
  initial: { x: 300, opacity: 0 },
  in: { x: 0, opacity: 1 },
  out: { x: -300, opacity: 0 }
}

const pageTransition = {
  initial: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  in: { duration: 0.8, ease: "easeInOut" },
  out: { duration: 0.8, ease: "easeInOut" }
}

const Layout = () => {
  const location = useLocation()

  return (
    <>
      <Navbar/>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          transition={pageTransition}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Layout