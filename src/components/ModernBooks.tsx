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

const modernProducts: Product[] = [
  {
    id: "modern-1",
    title: "Современные книги белые корешки (12 шт)",
    description: "Чистые белые и светло-серые корешки. Минималистичный дизайн для современных интерьеров.",
    price: "4 490 ₽",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "modern-2",
    title: "Набор в чёрно-белой гамме (15 шт)",
    description: "Контрастное сочетание чёрных и белых корешков. Строгий современный стиль.",
    price: "5 490 ₽",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "modern-3",
    title: "Современные книги серебристые (10 шт)",
    description: "Серебристые и металлические оттенки корешков. Футуристичный акцент.",
    price: "6 990 ₽",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "modern-4",
    title: "Большой набор современных книг (25 шт)",
    description: "Микс современных изданий с ровными корешками. Для заполнения больших стеллажей.",
    price: "9 990 ₽",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "modern-5",
    title: "Скандинавский стиль (18 шт)",
    description: "Пастельные и светлые тона. Идеально для скандинавского интерьера.",
    price: "7 490 ₽",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "modern-6",
    title: "Современная классика в тёмных тонах (12 шт)",
    description: "Тёмно-синие, графитовые и чёрные корешки премиум-изданий.",
    price: "8 990 ₽",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
    available: true
  }
];

export function ModernBooks() {
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
            Современные книги
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#544C43',
            lineHeight: '1.7',
            maxWidth: '48rem',
            fontWeight: 500
          }}>
            Чистые линии и ровные корешки современных изданий. Минималистичный стиль для актуальных интерьеров.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {['Ровные корешки', 'Минимализм', 'Современный дизайн', 'Быстрая доставка'].map((feature, index) => (
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
          {modernProducts.map((product, index) => (
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
                transition: 'all 0.3s ease',
                opacity: product.available ? 1 : 0.6
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
                {!product.available && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <span style={{
                      color: '#FFFFFF',
                      fontSize: '1.25rem',
                      fontWeight: 700
                    }}>
                      Нет в наличии
                    </span>
                  </div>
                )}
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
                  whileHover={{ scale: product.available ? 1.02 : 1 }}
                  whileTap={{ scale: product.available ? 0.98 : 1 }}
                  disabled={!product.available}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    borderRadius: '9999px',
                    border: 'none',
                    backgroundColor: product.available ? '#3A342E' : '#D4C9BD',
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontWeight: 700,
                    cursor: product.available ? 'pointer' : 'not-allowed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (product.available) {
                      e.currentTarget.style.backgroundColor = '#2D2722';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (product.available) {
                      e.currentTarget.style.backgroundColor = '#3A342E';
                    }
                  }}
                >
                  <ShoppingCart style={{ width: '1.25rem', height: '1.25rem' }} />
                  <span>{product.available ? 'Заказать' : 'Нет в наличии'}</span>
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
            Не нашли подходящий вариант?
          </h3>
          <p style={{
            fontSize: '1.125rem',
            color: '#544C43',
            marginBottom: '2rem',
            maxWidth: '36rem',
            margin: '0 auto 2rem'
          }}>
            Мы подберём современные книги специально под ваш интерьер и пожелания
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