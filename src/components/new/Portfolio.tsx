import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Кафе «Библиотека»",
    category: "Винтажные книги",
    description: "200 книг в тёплых тонах для создания уютной атмосферы",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
    books: "200 шт"
  },
  {
    id: 2,
    title: "Отель Marriott",
    category: "Современные книги",
    description: "Минималистичная подборка для лобби-бара премиум отеля",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop",
    books: "150 шт"
  },
  {
    id: 3,
    title: "IT-офис Яндекс",
    category: "По цвету",
    description: "Книги в корпоративных цветах компании",
    image: "https://images.unsplash.com/photo-1628522972018-e7479d00e06e?w=800&auto=format&fit=crop",
    books: "300 шт"
  },
  {
    id: 4,
    title: "Фотостудия Loft",
    category: "Смешанный стиль",
    description: "Эклектичная подборка для съёмок и декора",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop",
    books: "120 шт"
  }
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" style={{
      padding: '5rem 2rem',
      backgroundColor: '#FFFFFF'
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
            Наши проекты
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B635A',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Посмотрите, как книги преображают пространства наших клиентов
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: hoveredId === project.id 
                  ? '0 20px 40px rgba(0,0,0,0.15)' 
                  : '0 10px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                transform: hoveredId === project.id ? 'translateY(-8px)' : 'translateY(0)'
              }}
            >
              {/* Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '70%',
                overflow: 'hidden',
                backgroundColor: '#D4C9BD'
              }}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  animate={{
                    scale: hoveredId === project.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)',
                  opacity: hoveredId === project.id ? 1 : 0.8,
                  transition: 'opacity 0.3s ease'
                }} />

                {/* Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#3A342E'
                }}>
                  {project.books}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '1.5rem',
                backgroundColor: '#FFFFFF'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#C8A25E',
                  fontWeight: 600,
                  marginBottom: '0.5rem'
                }}>
                  {project.category}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#3A342E',
                  marginBottom: '0.5rem'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6B635A',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {project.description}
                </p>

                <motion.div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#C8A25E',
                    fontSize: '0.875rem',
                    fontWeight: 600
                  }}
                  animate={{
                    x: hoveredId === project.id ? 5 : 0
                  }}
                >
                  <span>Смотреть детали</span>
                  <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}