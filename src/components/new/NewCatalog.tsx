import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface Category {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  route: string;
}

const categories: Category[] = [
  {
    id: "vintage",
    title: "Винтажные книги",
    subtitle: "Книги с историей и фактурой",
    image: "https://images.unsplash.com/photo-1633099158362-17b8ba5b27db?w=800&auto=format&fit=crop",
    route: "/vintage-books"
  },
  {
    id: "modern",
    title: "Современные книги",
    subtitle: "Ровные корешки, чистые линии",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop",
    route: "/modern-books"
  },
  {
    id: "color",
    title: "Книги по цвету",
    subtitle: "Подбор по оттенкам интерьера",
    image: "https://images.unsplash.com/photo-1628522972018-e7479d00e06e?w=800&auto=format&fit=crop",
    route: "/color-books"
  },
  {
    id: "theme",
    title: "Книги по тематике",
    subtitle: "Искусство, архитектура, классика",
    image: "https://images.unsplash.com/photo-1551600357-faaba97a5b08?w=800&auto=format&fit=crop",
    route: "/theme-books"
  }
];

export function NewCatalog() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleClick = (route: string) => {
    // Просто переходим по ссылке
    window.location.href = route;
  };

  return (
    <section id="catalog" style={{
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
            Наш каталог
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6B635A',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Выберите подходящую категорию для вашего интерьера
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(category.id)}
              onHoverEnd={() => setHoveredId(null)}
              onClick={() => handleClick(category.route)}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: hoveredId === category.id 
                  ? '0 20px 40px rgba(0,0,0,0.15)' 
                  : '0 10px 20px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                transform: hoveredId === category.id ? 'translateY(-8px)' : 'translateY(0)',
                border: `2px solid ${hoveredId === category.id ? '#C8A25E' : '#D4C9BD'}`
              }}
            >
              {/* Image */}
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '75%',
                overflow: 'hidden',
                backgroundColor: '#D4C9BD'
              }}>
                <motion.img
                  src={category.image}
                  alt={category.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  animate={{
                    scale: hoveredId === category.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)',
                  opacity: hoveredId === category.id ? 1 : 0.8,
                  transition: 'opacity 0.3s ease'
                }} />
              </div>

              {/* Content */}
              <div style={{
                padding: '1.5rem',
                backgroundColor: '#FFFFFF'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#3A342E',
                  marginBottom: '0.5rem'
                }}>
                  {category.title}
                </h3>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#6B635A',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {category.subtitle}
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
                    x: hoveredId === category.id ? 5 : 0
                  }}
                >
                  <span>Смотреть каталог</span>
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