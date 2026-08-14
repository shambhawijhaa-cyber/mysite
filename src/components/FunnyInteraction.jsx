import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FunnyInteraction() {
  const [forgiven, setForgiven] = useState(false)
  const [noScale, setNoScale] = useState(1)
  const [yesScale, setYesScale] = useState(1)
  const [noCount, setNoCount] = useState(0)

  const noPhrases = [
    "No 😜",
    "Are you sure? 🥺",
    "Think again! 💭",
    "Really no? 😭",
    "Please say yes! 💕",
    "You leave me no choice! 😤",
  ]

  const handleNoHover = () => {
    setNoCount(prev => prev + 1)
    setNoScale(prev => Math.max(0.3, prev - 0.15))
    setYesScale(prev => Math.min(2.5, prev + 0.25))
  }

  return (
    <section style={{ padding: '3rem 1rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        {!forgiven ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            style={{
              background: 'rgba(255,255,255,0.9)',
              padding: '2.5rem 2rem',
              borderRadius: '24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              maxWidth: '500px',
              width: '100%',
              border: '2px solid rgba(255,179,198,0.4)',
            }}
          >
            <h2
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                color: 'var(--pink-deep)',
                marginBottom: '1rem',
              }}
            >
              Do you forgive me? 🥺
            </h2>
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: 'var(--text-light)',
                marginBottom: '2rem',
                fontSize: '0.95rem',
              }}
            >
              (Choose carefully! 😜)
            </p>

            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100px',
                flexWrap: 'wrap',
              }}
            >
              {/* YES Button */}
              <motion.button
                style={{ transform: `scale(${yesScale})` }}
                whileTap={{ scale: yesScale * 0.95 }}
                onClick={() => setForgiven(true)}
                className="btn-primary"
              >
                Yes, of course! 🥰
              </motion.button>

              {/* NO Button */}
              <motion.button
                style={{
                  transform: `scale(${noScale})`,
                  opacity: noScale < 0.4 ? 0.3 : 1,
                  cursor: noScale < 0.4 ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                className="btn-secondary"
              >
                {noPhrases[Math.min(noCount, noPhrases.length - 1)]}
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            style={{
              background: 'rgba(255,255,255,0.95)',
              padding: '3rem 2rem',
              borderRadius: '24px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              maxWidth: '500px',
              width: '100%',
              border: '2px solid var(--pink-main)',
            }}
          >
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉🥳❤️</div>
            <h2
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: '2.5rem',
                color: 'var(--pink-deep)',
                marginBottom: '0.8rem',
              }}
            >
              Yay! Thank you so much! 💖
            </h2>
            <p
              style={{
                fontFamily: "'Quicksand', sans-serif",
                color: 'var(--text-dark)',
                fontSize: '1.1rem',
                lineHeight: 1.6,
              }}
            >
              You're the absolute best! I promise to make it up to you and bring endless smiles to your face! 🥰✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
