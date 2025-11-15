import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  onNavigate?: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const handleScrollToCatalog = () => {
    if (onNavigate) {
      onNavigate("catalog");
    } else {
      const element = document.getElementById("catalog");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleScrollToCustom = () => {
    if (onNavigate) {
      onNavigate("custom");
    } else {
      const element = document.getElementById("custom");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section style={{
      position: 'relative',
      paddingTop: '5rem',
      paddingBottom: '5rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Фоновое изображение */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <img 
          src="https://images.unsplash.com/photo-1702848946800-1afb31a03814?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Books background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        {/* Градиентное наложение для читаемости текста */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(232, 223, 212, 0.95) 0%, rgba(232, 223, 212, 0.85) 50%, rgba(232, 223, 212, 0.6) 100%)'
        }} />
      </div>

      <div style={{ 
        maxWidth: '72rem', 
        margin: '0 auto', 
        width: '100%',
        position: 'relative',
        zIndex: 10
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}
        >
          <div style={{ maxWidth: '42rem' }}>
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              style={{
                marginBottom: '1.5rem',
                color: '#2D2722',
                textShadow: '0 2px 8px rgba(255, 255, 255, 0.5)'
              }}
            >
              Оформляем пространства настоящими книгами
            </motion.h1>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              border: '1px solid rgba(212, 201, 189, 0.3)'
            }}>
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#3A342E',
                lineHeight: '1.7',
                fontWeight: 600,
                margin: 0
              }}>
                Для кафе, ресторанов, отелей, студий и офисов.
              </p>
              <p style={{ 
                fontSize: '1.25rem', 
                color: '#3A342E',
                lineHeight: '1.7',
                fontWeight: 600,
                margin: 0
              }}>
                Подходит и для частных квартир и домов.
              </p>
            </div>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1.25rem',
            paddingTop: '1rem',
            flexWrap: 'wrap'
          }}>
            {/* Основная кнопка */}
            <motion.button
              onClick={handleScrollToCatalog}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '1.25rem 3rem',
                backgroundColor: '#2D2722',
                color: '#FFFFFF',
                borderRadius: '9999px',
                border: 'none',
                fontSize: '1.125rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#1F1A17';
                e.currentTarget.style.boxShadow = '0 20px 35px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#2D2722';
                e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)';
              }}
            >
              <span>Смотреть каталог</span>
              <ArrowDown style={{ width: '1.5rem', height: '1.5rem' }} />
            </motion.button>

            {/* Вторичная кнопка */}
            <motion.button
              onClick={handleScrollToCustom}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: '1.25rem 3rem',
                backgroundColor: '#C8A25E',
                color: '#FFFFFF',
                borderRadius: '9999px',
                border: '3px solid #B39050',
                fontSize: '1.125rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 10px 25px -3px rgba(200, 162, 94, 0.4), 0 4px 6px -2px rgba(200, 162, 94, 0.3)',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B39050';
                e.currentTarget.style.boxShadow = '0 20px 35px -5px rgba(200, 162, 94, 0.5), 0 10px 10px -5px rgba(200, 162, 94, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C8A25E';
                e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(200, 162, 94, 0.4), 0 4px 6px -2px rgba(200, 162, 94, 0.3)';
              }}
            >
              <Sparkles style={{ width: '1.25rem', height: '1.25rem' }} />
              <span>Получить подборку</span>
            </motion.button>
          </div>

          {/* Декоративный элемент */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{ paddingTop: '1rem' }}
          >
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '1rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#3A342E',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              border: '1px solid rgba(212, 201, 189, 0.5)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ 
                height: '8px', 
                width: '8px', 
                borderRadius: '50%',
                backgroundColor: '#C8A25E',
                boxShadow: '0 0 10px rgba(200, 162, 94, 0.6)'
              }} />
              <span>Премиальное оформление интерьеров</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}