import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    position: "Владелец кафе «Библиотека»",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Заказывали 200 винтажных книг для оформления кафе. Результат превзошёл все ожидания! Гости постоянно фотографируются на фоне наших книжных полок.",
    date: "2 недели назад"
  },
  {
    id: 2,
    name: "Дмитрий Соколов",
    position: "Дизайнер интерьеров",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "Работаю с КАПСА уже год. Рекомендую всем своим клиентам. Быстро, качественно, всегда подбирают именно то, что нужно. Профессионалы своего дела!",
    date: "1 месяц назад"
  },
  {
    id: 3,
    name: "Елена Волкова",
    position: "Управляющая отелем",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    text: "Оформили лобби-бар нашего отеля современными книгами. Атмосфера стала намного уютнее и премиальнее. Спасибо за индивидуальный подход!",
    date: "3 недели назад"
  }
];

export function Reviews() {
  return (
    <section id="reviews" style={{
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
            Отзывы клиентов
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B635A',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Что говорят о нас владельцы кафе, отелей и дизайнеры
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: '#FFFFFF',
                padding: '2rem',
                borderRadius: '1rem',
                border: '2px solid #D4C9BD',
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Quote Icon */}
              <div style={{
                position: 'absolute',
                top: '-1rem',
                right: '2rem',
                width: '3rem',
                height: '3rem',
                backgroundColor: '#C8A25E',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid #F5F0EA'
              }}>
                <Quote style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  color: '#FFFFFF'
                }} />
              </div>

              {/* Rating */}
              <div style={{
                display: 'flex',
                gap: '0.25rem',
                marginBottom: '1rem'
              }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    style={{
                      width: '1.25rem',
                      height: '1.25rem',
                      fill: '#C8A25E',
                      color: '#C8A25E'
                    }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p style={{
                fontSize: '1rem',
                color: '#3A342E',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                fontStyle: 'italic'
              }}>
                "{review.text}"
              </p>

              {/* Author */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1rem',
                borderTop: '1px solid #E8DFD4'
              }}>
                <img
                  src={review.avatar}
                  alt={review.name}
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid #D4C9BD'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#3A342E',
                    marginBottom: '0.25rem'
                  }}>
                    {review.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#6B635A'
                  }}>
                    {review.position}
                  </div>
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#9B9389'
                }}>
                  {review.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}