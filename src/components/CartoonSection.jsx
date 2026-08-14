import { motion } from 'framer-motion'

const REASONS = [
  { emoji: "💖", title: "Your Kindness", desc: "You have the warmest heart and care so much." },
  { emoji: "😊", title: "Your Smile", desc: "It brightens up even my dullest days instantly." },
  { emoji: "🌸", title: "Your Patience", desc: "Thank you for listening and understanding me always." },
  { emoji: "✨", title: "Our Memories", desc: "Every single moment spent with you is so special." },
]

export default function CartoonSection() {
  return (
    <section style={{ padding: '3rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: 'center',
          fontFamily: "'Dancing Script', cursive",
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          color: 'var(--purple-deep)',
          marginBottom: '2.5rem',
        }}
      >
        Reasons Why You're Special 🌟
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        {REASONS.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -5 }}
            style={{
              background: '#fff',
              padding: '1.8rem 1.2rem',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              border: '1px solid rgba(201,177,255,0.3)',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '0.8rem' }}>{item.emoji}</div>
            <h3 style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.4rem', color: 'var(--pink-deep)', marginBottom: '0.5rem' }}>
              {item.title}
            </h3>
            <p style={{ fontFamily: "'Quicksand', sans-serif", fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.5 }}>
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
