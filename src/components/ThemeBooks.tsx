import { motion } from "motion/react";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  available: boolean;
}

const themeProducts: Product[] = [
  {
    id: "theme-1",
    title: "Архитектура и дизайн (12 шт)",
    description: "Книги об архитектуре, интерьерном дизайне и урбанистике. Альбомы с иллюстрациями.",
    price: "8 990 ₽",
    image: "https://images.unsplash.com/photo-1551600357-faaba97a5b08?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "theme-2",
    title: "Искусство и живопись (15 шт)",
    description: "Альбомы с репродукциями, история искусства, биографии художников.",
    price: "9 990 ₽",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "theme-3",
    title: "Классическая литература (20 шт)",
    description: "Русская и зарубежная классика. Толстой, Достоевский, Шекспир, Гёте.",
    price: "6 990 ₽",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "theme-4",
    title: "Философия и психология (10 шт)",
    description: "Работы известных философов и психологов. Для создания интеллектуальной атмосферы.",
    price: "5 490 ₽",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "theme-5",
    title: "Путешествия и география (12 шт)",
    description: "Путеводители, атласы, книги о странах и культурах мира.",
    price: "6 490 ₽",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "theme-6",
    title: "Кулинария и гастрономия (8 шт)",
    description: "Кулинарные книги с красивыми иллюстрациями. Идеально для кафе и ресторанов.",
    price: "7 490 ₽",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop",
    available: true
  }
];

export function ThemeBooks() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCustomOrder = () => {
    navigate('/', { state: { scrollTo: 'custom' } });
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#E8DFD4',
      paddingTop: '2rem',
      paddingBottom: '5rem'
    }}>
      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        marginBottom: '3rem'
      }}>
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ x: -5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            border: 'none',
            color: '#3A342E',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            marginBottom: '2rem'
          }}
        >
          <ArrowLeft style={{ width: '1.25rem', height: '1.25rem' }} />
          <span>Назад к каталогу</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{ 
            marginBottom: '1rem', 
            color: '#3A342E',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)'
          }}>
            Книги по тематике
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#544C43',
            lineHeight: '1.7',
            maxWidth: '48rem',
            fontWeight: 500
          }}>
            Тематические подборки для создания нужной атмосферы. Искусство, архитектура, классика и многое другое.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {['Любая тематика', 'Профессиональный подбор', 'Уникальные издания', 'Быстрая доставка'].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              style={{
                padding: '1rem',
                backgroundColor: '#F5F0EA',
                borderRadius: '0.75rem',
                border: '1px solid #D4C9BD',
                textAlign: 'center'
              }}
            >
              <span style={{ 
                fontSize: '0.875rem', 
                fontWeight: 600,
                color: '#3A342E'
              }}>
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: '72rem',
        margin: '0 auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {themeProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: `2px solid ${hoveredId === product.id ? '#C8A25E' : '#D4C9BD'}`,
                boxShadow: hoveredId === product.id
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transform: hoveredId === product.id ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                paddingBottom: '75%',
                overflow: 'hidden',
                backgroundColor: '#D4C9BD'
              }}>
                <motion.img
                  src={product.image}
                  alt={product.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  animate={{
                    scale: hoveredId === product.id ? 1.08 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#3A342E',
                  marginBottom: '0.5rem'
                }}>
                  {product.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6B635A',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  {product.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: '#C8A25E'
                  }}>
                    {product.price}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '9999px',
                    border: 'none',
                    backgroundColor: '#3A342E',
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2D2722';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#3A342E';
                  }}
                >
                  <ShoppingCart style={{ width: '1.25rem', height: '1.25rem' }} />
                  <span>Заказать</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          maxWidth: '72rem',
          margin: '5rem auto 0',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          textAlign: 'center'
        }}
      >
        <div style={{
          backgroundColor: '#F5F0EA',
          padding: '3rem 2rem',
          borderRadius: '1rem',
          border: '2px solid #D4C9BD'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#3A342E',
            marginBottom: '1rem'
          }}>
            Нужна другая тематика?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#544C43',
            marginBottom: '2rem',
            maxWidth: '36rem',
            margin: '0 auto 2rem'
          }}>
            Мы подберём книги по любой тематике специально под ваш проект
          </p>
          <motion.button
            onClick={handleCustomOrder}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 3rem',
              backgroundColor: '#C8A25E',
              color: '#FFFFFF',
              border: '3px solid #B39050',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          >
            Получить индивидуальную подборку
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}