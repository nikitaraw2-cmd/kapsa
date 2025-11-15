import { motion } from "motion/react";
import { MessageSquare, Palette, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Консультация",
    description: "Обсуждаем ваши пожелания, стиль интерьера, цветовую гамму и количество книг"
  },
  {
    icon: Palette,
    number: "02",
    title: "Подбор",
    description: "Наши специалисты формируют персональную подборку за 24 часа"
  },
  {
    icon: Truck,
    number: "03",
    title: "Доставка",
    description: "Аккуратно упаковываем и доставляем книги в удобное для вас время"
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Гарантия",
    description: "Если что-то не подошло — меняем бесплатно в течение 14 дней"
  }
];

export function Process() {
  return (
    <section id="process" style={{
      padding: '5rem 2rem',
      backgroundColor: '#E8DFD4'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 400,
            color: '#3A342E',
            marginBottom: '1rem',
            fontFamily: 'Cormorant Garamond, serif'
          }}>
            Как мы работаем
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B635A',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Простой и понятный процесс от заявки до доставки
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                position: 'relative',
                backgroundColor: '#FFFFFF',
                padding: '2.5rem 2rem',
                borderRadius: '1rem',
                border: '2px solid #D4C9BD',
                textAlign: 'center'
              }}
            >
              {/* Step Number */}
              <div style={{
                position: 'absolute',
                top: '-1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '3rem',
                height: '3rem',
                backgroundColor: '#C8A25E',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#FFFFFF',
                border: '4px solid #E8DFD4'
              }}>
                {step.number}
              </div>

              {/* Icon */}
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#F5F0EA',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '2rem auto 1.5rem',
                border: '2px solid #D4C9BD'
              }}>
                <step.icon style={{
                  width: '2rem',
                  height: '2rem',
                  color: '#3A342E'
                }} />
              </div>

              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#3A342E',
                marginBottom: '1rem'
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: '#6B635A',
                lineHeight: 1.6
              }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            textAlign: 'center',
            marginTop: '4rem'
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '1.25rem 3rem',
              backgroundColor: '#3A342E',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease'
            }}
          >
            Начать подбор книг
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}