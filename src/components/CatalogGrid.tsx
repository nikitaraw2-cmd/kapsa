import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    image: "https://images.unsplash.com/photo-1633099158362-17b8ba5b27db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwb2xkJTIwYm9va3MlMjBzdGFja3xlbnwxfHx8fDE3NjMyMDYyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    route: "/vintage-books"
  },
  {
    id: "modern",
    title: "Современные книги",
    subtitle: "Ровные корешки, чистые линии",
    image: "https://images.unsplash.com/photo-1760840415479-438f61268bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rcyUyMGNsZWFuJTIwc3BpbmVzfGVufDF8fHx8MTc2MzIwNjI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    route: "/modern-books"
  },
  {
    id: "color",
    title: "Книги по цвету",
    subtitle: "Подбор по оттенкам интерьера",
    image: "https://images.unsplash.com/photo-1628522972018-e7479d00e06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGNvbG9yJTIwY29vcmRpbmF0ZWQlMjBzaGVsZnxlbnwxfHx8fDE3NjMyMDYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    route: "/color-books"
  },
  {
    id: "theme",
    title: "Книги по тематике",
    subtitle: "Искусство, архитектура, классика и др.",
    image: "https://images.unsplash.com/photo-1551600357-faaba97a5b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBib29rcyUyMGFyY2hpdGVjdHVyZSUyMHN0YWNtfGVufDF8fHx8MTc2MzIwNjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    route: "/theme-books"
  },
];

export function CatalogGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCategoryClick = (route: string) => {
    if (route !== "#") {
      navigate(route);
    }
  };

  return (
    <section id="catalog" style={{
      paddingTop: '5rem',
      paddingBottom: '5rem',
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
      background: 'linear-gradient(to bottom, #E8DFD4, #F5F0EA)'
    }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <h2 style={{ marginBottom: '1rem', color: '#3A342E' }}>Каталог</h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#544C43',
            maxWidth: '42rem',
            margin: '0 auto',
            fontWeight: 500
          }}>
            Выберите подходящий вариант для вашего пространства
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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredId(category.id)}
              onHoverEnd={() => setHoveredId(null)}
              style={{
                cursor: 'pointer',
                backgroundColor: '#FFFFFF',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: `2px solid ${hoveredId === category.id ? '#C8A25E' : '#D4C9BD'}`,
                boxShadow: hoveredId === category.id 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                transform: hoveredId === category.id ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Image */}
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                paddingBottom: '68.75%', 
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
                    scale: hoveredId === category.id ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0.1), transparent)',
                  opacity: hoveredId === category.id ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }} />
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ 
                    marginBottom: '0.5rem', 
                    fontWeight: 600,
                    fontSize: '1.25rem',
                    color: '#3A342E'
                  }}>
                    {category.title}
                  </h4>
                  <p style={{ 
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: '#6B635A'
                  }}>
                    {category.subtitle}
                  </p>
                </div>

                {/* Кнопка */}
                <motion.button 
                  onClick={() => handleCategoryClick(category.route)}
                  onHoverStart={() => setHoveredButton(category.id)}
                  onHoverEnd={() => setHoveredButton(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '9999px',
                    border: 'none',
                    backgroundColor: hoveredButton === category.id ? '#2D2722' : '#3A342E',
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: category.route !== "#" ? 'pointer' : 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    opacity: category.route === "#" ? 0.5 : 1
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 10 }}>
                    {category.route === "#" ? "Скоро" : "Смотреть"}
                  </span>
                  {category.route !== "#" && (
                    <ArrowRight 
                      style={{
                        width: '1.25rem',
                        height: '1.25rem',
                        position: 'relative',
                        zIndex: 10,
                        transform: hoveredButton === category.id ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Декоративный элемент */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ marginTop: '5rem', textAlign: 'center' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1rem 2rem',
            borderRadius: '9999px',
            backgroundColor: '#F5F0EA',
            border: '2px solid #D4C9BD',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '9999px',
              backgroundColor: '#C8A25E',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }} />
            <span style={{ 
              fontSize: '1rem', 
              fontWeight: 600,
              color: '#3A342E'
            }}>
              Все книги тщательно отобраны вручную
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}