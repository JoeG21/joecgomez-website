import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Footer from './Footer'

import '../styling/App.css'
import '../styling/Home.css'
import '../styling/Project.css'
import '../styling/About.css'
import '../styling/Blogs.css'
import '../styling/Contact.css'
import Typical from 'react-typical'
import {
  BrowserRouter,
  Route,
  Switch,
  HashRouter
} from 'react-router-dom';

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.log('hello again!')
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, []);

  let loadingComponent = (
    <div className='loading'>
      <h1>
        <Typical
          loop={1}
          wrapper='b'
          steps={[
            'hello_world!',
            1000,
            ''
          ]}
        />
      </h1>
    </div>
  )

  let application = (
    <BrowserRouter>
      <Navbar />
      <div className='App'>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/blogs'>
            <Blogs />
          </Route>
          {/* <Route path='/#about'>
            <About />
          </Route> */}
          {/* <Route path='/about'>
            <About />
          </Route> */}

          {/* <HashRouter path='/#about'>
            <About />
          </HashRouter> */}
          <Route path='/'>
            <Home />
            {/* <About /> */}
            {/* <Route path='/about'> <About /> </Route> */}
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  )


  return (
    <>
      <div className='App-Container'>
        {/* {loading ? loadingComponent : application} */}
        {application}
      </div>
      <Footer />
    </>
  );
}

export default App;