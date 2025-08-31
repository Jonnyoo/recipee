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
      <div className="main-content">
        <div className="background-container">
          <img 
            src="/public/icons/mangostickyrice.png" 
            alt="Mango Sticky Rice Sticker" 
            className="title-sticker mangostickyrice-sticker"
          />
          <img 
            src="/public/icons/parfait.png" 
            alt="Parfait Sticker" 
            className="title-sticker parfait-sticker"
          />
          <img 
            src="/public/icons/croissant.png" 
            alt="Croissant Sticker" 
            className="title-sticker croissant-sticker"
          />
          <img 
            src="/public/icons/sushi.png" 
            alt="Sushi Sticker" 
            className="title-sticker sushi-sticker"
          />
          <div className="waitlist-container">
            <div className="titletext">
              <h1 className="title1">JOIN THE</h1>
              <h1 className="title2"><span style={{ color: '#3e974bff' }}>MUNCH</span>-MENT</h1>
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
        </div>
        <div className="scrolling-rows">
          <div className="scroll-row scroll-row-1">
            {/* First set of boxes */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
            {/* Second set - duplicate for seamless loop */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
            {/* Third set - extra for smooth transition */}
            <div className="scroll-box box-color-1"></div>
            <div className="scroll-box box-color-2"></div>
            <div className="scroll-box box-color-3"></div>
            <div className="scroll-box box-color-4"></div>
            <div className="scroll-box box-color-5"></div>
            <div className="scroll-box box-color-6"></div>
          </div>
        </div>
      </div>
      <div className="features-carousel">
        <h1 className='feature-title'>Munch has features you'll love</h1>
        <div className="features-track">
          <div className="feature1">
            <div className="showcase-container">
              <img src="/mockups/1031.png" alt="App mockup" className="mockup-image" />
              <div className="showcase-content">
                <h2>Experience the Future of Food</h2>
              </div>
            </div>
          </div>
          <div className="feature2">
            <div className="showcase-container">
              <div className="showcase-content">
                <h2>Connect with Food Lovers</h2>
              </div>
              <img src="/mockups/1031.png" alt="App mockup" className="mockup-image" />
            </div>
          </div>
          <div className="feature3">
            <div className="showcase-container">
              <img src="/mockups/1031.png" alt="App mockup" className="mockup-image" />
              <div className="showcase-content">
                <h2>Explore Local Gems</h2>
              </div>
            </div>
          </div>
          <div className="feature4">
            <div className="showcase-container">
              <img src="/mockups/1031.png" alt="App mockup" className="mockup-image" />
              <div className="showcase-content">
                <h2>Explore Local Gems</h2>
              </div>
            </div>
          </div>
          <div className="feature5">
            <div className="showcase-container">
              <img src="/mockups/1031.png" alt="App mockup" className="mockup-image" />
              <div className="showcase-content">
                <h2>Explore Local Gems</h2>
              </div>
            </div>
          </div>
          <div className="feature6">
            <div className="showcase-container">
              <img src="/mockups/1031.png" alt="App mockup" className="mockup-image" />
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
