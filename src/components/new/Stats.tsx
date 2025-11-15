import { motion } from "motion/react";
import { TrendingUp, Users, Package, Award } from "lucide-react";

const stats = [
  {
    icon: Package,
    value: "10,000+",
    label: "Книг в наличии",
    description: "Винтажные и современные издания"
  },
  {
    icon: Users,
    value: "500+",
    label: "Довольных клиентов",
    description: "Кафе, отели, офисы по всей России"
  },
  {
    icon: TrendingUp,
    value: "24 часа",
    label: "Быстрая доставка",
    description: "По Москве и Московской области"
  },
  {
    icon: Award,
    value: "100%",
    label: "Гарантия качества",
    description: "Замена если не подошло"
  }
];

export function Stats() {
  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: '#F5F0EA'
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
            Почему выбирают нас
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B635A',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Мы создаём уникальные библиотечные композиции для любых пространств
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: '#FFFFFF',
                padding: '2.5rem 2rem',
                borderRadius: '1rem',
                border: '2px solid #D4C9BD',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '4rem',
                height: '4rem',
                backgroundColor: '#F5F0EA',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                border: '2px solid #C8A25E'
              }}>
                <stat.icon style={{
                  width: '2rem',
                  height: '2rem',
                  color: '#C8A25E'
                }} />
              </div>
              <div style={{
                fontSize: '3rem',
                fontWeight: 700,
                color: '#C8A25E',
                marginBottom: '0.5rem',
                fontFamily: 'Cormorant Garamond, serif'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                color: '#3A342E',
                marginBottom: '0.5rem'
              }}>
                {stat.label}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: '#6B635A',
                lineHeight: 1.6
              }}>
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}