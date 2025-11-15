import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Как быстро вы можете подобрать книги?",
    answer: "Мы формируем индивидуальную подборку за 24 часа. Если нужны стандартные комплекты - отправим в день заказа."
  },
  {
    question: "Можно ли вернуть книги, если они не подошли?",
    answer: "Да, у нас действует гарантия 14 дней. Если книги не подошли по цвету или стилю - мы бесплатно заменим их на другие."
  },
  {
    question: "Доставляете ли вы в регионы?",
    answer: "Да, мы доставляем по всей России. По Москве и МО - доставка за 24 часа. В регионы - от 2 до 5 дней в зависимости от удалённости."
  },
  {
    question: "Какой минимальный заказ?",
    answer: "Минимальный комплект - от 10 книг (990 рублей). Но мы рекомендуем заказывать от 20-30 книг для создания гармоничной композиции."
  },
  {
    question: "Можно ли заказать книги определённого цвета?",
    answer: "Конечно! Мы специализируемся на подборе книг по цвету. Просто укажите нужную палитру при заказе."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{
      padding: '5rem 2rem',
      backgroundColor: '#E8DFD4'
    }}>
      <div style={{
        maxWidth: '900px',
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
            Частые вопросы
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B635A'
          }}>
            Ответы на популярные вопросы о наших услугах
          </p>
        </motion.div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '1rem',
                border: '2px solid #D4C9BD',
                overflow: 'hidden'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  backgroundColor: openIndex === index ? '#F5F0EA' : '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: '#3A342E',
                  flex: 1
                }}>
                  {faq.question}
                </span>
                <div style={{
                  width: '2rem',
                  height: '2rem',
                  backgroundColor: openIndex === index ? '#C8A25E' : '#F5F0EA',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.3s ease'
                }}>
                  {openIndex === index ? (
                    <Minus style={{
                      width: '1rem',
                      height: '1rem',
                      color: '#FFFFFF'
                    }} />
                  ) : (
                    <Plus style={{
                      width: '1rem',
                      height: '1rem',
                      color: '#3A342E'
                    }} />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  padding: '0 2rem 1.5rem',
                  fontSize: '1rem',
                  color: '#6B635A',
                  lineHeight: 1.7
                }}>
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}