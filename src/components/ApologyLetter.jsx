import { motion } from 'framer-motion'

const LETTER_CONTENT = {
  greeting: "Dear vedansh,",
  paragraphs: [
    "I AM SO PROUD OF YOU IF YOU MAKE IT TILL HERE LOL.",
     "Thank you for your patience and for being such a wonderful part of my life."
    "I WAS REALLY UNSURE ABOUT US BUT IF I GET A SS THAT YOU FOUND YOUR WAY HERE, I KNOW YOU ARE THE ONE."
    "I KNOW THAT CODE WAS NOT VERY DIFFICULT AT ALL BUT YOU KNOW SOMEONE REMEMBERING THAT MAKES SO MUCH SENSE TO ME"
    "I AM SORRY FOR BEING MEAN EARLIER BUT YOU KNOW NOW THAT I LOVE YOU 
     "CAN I BE YOUR WIFE LOL? - WASNT THIS THAT YOU ASKED ME FROM YOUR END THAT DAY?"
     "JUST THE FACT THAT YOU SAID CAN I BE YOUR BOYFRIEND AND NOT CAN YOU BE MY GIRLFRIEND HAD WON ME."
       
"
  ],
  closing: "Forever yours,",
  signature: "With all my love "
}

export default function ApologyLetter() {
  return (
    <section style={{ padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#fff',
          padding: '2.5rem 2rem',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          maxWidth: '550px',
          width: '100%',
          position: 'relative',
          border: '1px solid rgba(255,179,198,0.3)',
        }}
      >
        {/* Lined paper decoration background */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: '3.5rem',
              right: '3.5rem',
              top: `${80 + i * 38}px`,
              height: '1px',
              background: 'rgba(255,179,198,0.18)',
            }}
          />
        ))}

        {/* Greeting */}
        <p
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
            color: 'var(--pink-deep)',
            marginBottom: '1.5rem',
            fontWeight: 600,
            position: 'relative',
            zIndex: 1,
          }}
        >
          {LETTER_CONTENT.greeting}
        </p>

        {/* Paragraphs */}
        {LETTER_CONTENT.paragraphs.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: 'clamp(0.95rem, 2.5vw, 1.08rem)',
              color: 'var(--text-dark)',
              lineHeight: 1.9,
              marginBottom: '1.2rem',
              fontWeight: 500,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {para}
          </motion.p>
        ))}

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          style={{ marginTop: '2rem', position: 'relative', zIndex: 1 }}
        >
          <p
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.2rem',
              color: 'var(--text-mid)',
              marginBottom: '0.3rem',
            }}
          >
            {LETTER_CONTENT.closing}
          </p>
          <p
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: '1.5rem',
              color: 'var(--pink-deep)',
              fontWeight: 700,
            }}
          >
            {LETTER_CONTENT.signature}
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative emoji row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{ marginTop: '2rem', fontSize: '1.8rem', letterSpacing: '0.6rem' }}
      >
        🌸 💕 🌸 💕 🌸
      </motion.div>
    </section>
  )
}
