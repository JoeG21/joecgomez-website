import { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import About from '../components/About'

import '../styling/App.css'
import '../styling/homeComponent.css'
import '../styling/Project.css'
import '../styling/aboutComponent.css'
import '../styling/resumeComponent.css'
import '../styling/contactComponent.css'
import Typical from 'react-typical'
import {
  BrowserRouter,
  Route,
  Switch
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
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )


  return (
    <>
      {/* {loading ? loadingComponent : application} */}
      {application}
    </>
  );
}

export default App;