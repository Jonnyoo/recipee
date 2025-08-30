import { useState } from 'react'
import './App.css'
import { db } from './firebase'
import { collection, addDoc } from 'firebase/firestore'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleJoinWaitlist = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!name.trim() || !email.trim()) {
      setMessage('Please fill in all fields')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      // Add document to Firestore with random ID
      await addDoc(collection(db, 'users'), {
        name: name.trim(),
        email: email.trim(),
        timestamp: new Date()
      })
      
      setMessage('Successfully joined the waitlist!')
      setName('')
      setEmail('')
    } catch (error) {
      console.error('Error adding document: ', error)
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <span className="nav-logo">Munch</span>
        </div>
        <div className="nav-right">
          <span className="nav-item">Waitlist</span>
          <span className="nav-item">Contact</span>
        </div>
      </nav>
      <div className="home-grid">
        <div className="waitlist-container">
          <div className="titletext">
            <h1 className="title1">JOIN THE</h1>
            <h1 className="title2"><span style={{ color: '#23b739ff' }}>MUNCH</span>-MENT</h1>
          </div>
          <div className="waitlist-box">
            <form onSubmit={handleJoinWaitlist}>
              <input 
                type="text" 
                placeholder="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSubmitting}
              />
              <input 
                type="email" 
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
              {message && <p className="message">{message}</p>}
            </form>
          </div>
        </div>
        <div className="scrolling-columns">
          <div className="scroll-column scroll-column-left">
            {/* First set of boxes */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            {/* Second set - duplicate for seamless loop */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            {/* Third set - extra for smooth transition */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            {/* Fourth set */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            {/* Fifth set */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            {/* Sixth set */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            {/* Seventh set */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            {/* Eighth set */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
          </div>
          <div className="scroll-column scroll-column-right">
            {/* First set of boxes */}
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
            {/* Second set - duplicate for seamless loop */}
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
            {/* Third set - extra for smooth transition */}
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
            {/* Fourth set */}
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
            {/* Fifth set */}
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
            {/* Sixth set */}
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
            {/* Seventh set */}
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
            {/* Eighth set */}
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
          </div>
        </div>
      </div>
      <div className="features-carousel">
        <h1 className='feature-title'>Munch has features you'll love</h1>
        <div className="features-track">
          <div className="feature-discover">
            <div className="showcase-container">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="app-interface"></div>
                </div>
                <div className="phone-notch"></div>
              </div>
              <div className="showcase-content">
                <h2>Experience the Future of Food</h2>
              </div>
            </div>
          </div>
          <div className="feature-connect">
            <div className="showcase-container">
              <div className="showcase-content">
                <h2>Connect with Food Lovers</h2>
              </div>
              <div className="phone-mockup phone-right">
                <div className="phone-screen">
                  <div className="app-interface"></div>
                </div>
                <div className="phone-notch"></div>
              </div>
            </div>
          </div>
          <div className="feature-explore">
            <div className="showcase-container">
              <div className="phone-mockup">
                <div className="phone-screen">
                  <div className="app-interface"></div>
                </div>
                <div className="phone-notch"></div>
              </div>
              <div className="showcase-content">
                <h2>Explore Local Gems</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-indicators">
          <span className="indicator active"></span>
          <span className="indicator"></span>
          <span className="indicator"></span>
        </div>
      </div>
    </>
  )
}

export default App
