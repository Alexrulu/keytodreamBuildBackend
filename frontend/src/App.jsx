import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from 'motion/react'

import Header   from "./layout/Header.jsx"
import Hero     from "./layout/Hero.jsx"
import Main     from "./layout/Main.jsx"
import Footer   from "./layout/Footer.jsx"
import Alquilar from "./pages/Alquilar.jsx"
import Comprar  from "./pages/Comprar.jsx"
import Article  from "./pages/Article.jsx"
import Register from "./pages/Register.jsx"
import Login    from "./pages/Login.jsx"
import Map      from "./pages/Map.jsx"

const pageTransition = {
     initial:{clipPath:'circle(0 at 50% 50%)'   },
     animate:{clipPath:'circle(100% at 50% 50%)', transition:{duration:1}},
        exit:{clipPath:'circle(0 at 50% 50%)'   },
}

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={
          <motion.div initial={{opacity:0 }} 
                      animate={{opacity:1 }}
                   transition={{duration:1}}>
            <Hero />
            <Main />
            <Footer />
          </motion.div>
        }/>

        <Route path="/alquilar" element={
          <motion.div {...pageTransition}>
            <Alquilar />
          </motion.div>
        }/>

        <Route path="/comprar" element={
          <motion.div {...pageTransition}>
            <Comprar />
          </motion.div>
        }/>

        <Route path="/article" element={
          <motion.div {...pageTransition}>
            <Article />
          </motion.div>
        }/>

        <Route path="/register" element={
          <motion.div {...pageTransition}>
            <Register />
          </motion.div>
        }/>

        <Route path="/login" element={
          <motion.div {...pageTransition}>
            <Login />
          </motion.div>
        }/>

        <Route path="/map" element={
          <motion.div {...pageTransition}>
            <Map />
          </motion.div>
        }/>

      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
export default App