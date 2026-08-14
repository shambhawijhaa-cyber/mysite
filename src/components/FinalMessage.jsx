import { motion } from 'framer-motion'

export default function FinalMessage() {
  return (
    <footer style={{ padding: '4rem 1rem 3rem', textAlign: 'center', background: 'linear-gradient(180deg, transparent 0%, rgba(255,179,198,0.2) 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💌</div>
        <h2
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--pink-deep)',
            marginBottom: '1rem',
          }}
        >
          Always & Forever
        </h2>
        <p
          style={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: '1.05rem',
            color: 'var(--text-dark)',
            lineHeight: 1.8,
            marginBottom: '2rem',
          }}
        >
          Thank you for reading all of this. You mean everything to me, and I hope this brought a little smile to your face today! ❤️
        </p>
        <div style={{ fontSize: '1.2rem', color: 'var(--text-light)', fontFamily: "'Quicksand', sans-serif" }}>
          Made with lots of love ❤️
        </div>
      </motion.div>
    </footer>
  )
}
