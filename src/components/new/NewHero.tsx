import { motion } from "motion/react";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1702848946800-1afb31a03814?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1920&auto=format&fit=crop"
];

export function NewHero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '5rem'
    }}>
      {/* Background Slider */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        {heroImages.map((img, index) => (
          <motion.div
            key={img}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImage === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              inset: 0
            }}
          >
            <img
              src={img}
              alt="Books"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </motion.div>
        ))}
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(232, 223, 212, 0.98) 0%, rgba(232, 223, 212, 0.92) 40%, rgba(232, 223, 212, 0.7) 70%, rgba(232, 223, 212, 0.5) 100%)'
        }} />
      </div>

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '700px'
        }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '9999px',
              border: '1px solid #D4C9BD',
              marginBottom: '2rem'
            }}
          >
            <Star style={{ width: '1rem', height: '1rem', fill: '#C8A25E', color: '#C8A25E' }} />
            <span style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#3A342E'
            }}>
              Более 500 довольных клиентов
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#2D2722',
              marginBottom: '1.5rem',
              fontFamily: 'Cormorant Garamond, serif'
            }}
          >
            Превратите интерьер в<br />
            <span style={{ color: '#C8A25E' }}>произведение искусства</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
              color: '#3A342E',
              lineHeight: 1.6,
              marginBottom: '2rem',
              fontWeight: 500
            }}
          >
            Тщательно подобранные винтажные и современные книги для кафе, отелей, офисов и домов. Доставка за 24 часа.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}
          >
            {[
              'Подбор за 1 день',
              'От 990 ₽ за комплект',
              'Доставка по всей РФ'
            ].map((benefit, index) => (
              <div
                key={benefit}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '0.75rem',
                  border: '1px solid #D4C9BD'
                }}
              >
                <CheckCircle style={{ 
                  width: '1.25rem', 
                  height: '1.25rem', 
                  color: '#C8A25E',
                  flexShrink: 0
                }} />
                <span style={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#3A342E'
                }}>
                  {benefit}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1.25rem 2.5rem',
                backgroundColor: '#3A342E',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '9999px',
                fontSize: '1.125rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease'
              }}
            >
              Смотреть каталог
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '1.25rem 2.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: '#3A342E',
                border: '2px solid #3A342E',
                borderRadius: '9999px',
                fontSize: '1.125rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3A342E';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                e.currentTarget.style.color = '#3A342E';
              }}
            >
              Получить консультацию
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(212, 201, 189, 0.5)',
              display: 'flex',
              gap: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#C8A25E',
                fontFamily: 'Cormorant Garamond, serif'
              }}>
                500+
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6B635A'
              }}>
                Реализованных проектов
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#C8A25E',
                fontFamily: 'Cormorant Garamond, serif'
              }}>
                24ч
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6B635A'
              }}>
                Средний срок доставки
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 700,
                color: '#C8A25E',
                fontFamily: 'Cormorant Garamond, serif'
              }}>
                4.9★
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6B635A'
              }}>
                Средняя оценка клиентов
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: '2rem',
            height: '3rem',
            border: '2px solid #3A342E',
            borderRadius: '9999px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '0.5rem'
          }}
        >
          <motion.div
            style={{
              width: '0.25rem',
              height: '0.5rem',
              backgroundColor: '#3A342E',
              borderRadius: '9999px'
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}