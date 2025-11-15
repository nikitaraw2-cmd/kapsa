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

const vintageProducts: Product[] = [
  {
    id: "vintage-1",
    title: "Набор винтажных книг (10 шт)",
    description: "Подборка книг 1960-1980х годов с аутентичной фактурой. Разные размеры и цвета корешков.",
    price: "3 990 ₽",
    image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "vintage-2",
    title: "Винтажные книги в тёмных тонах (15 шт)",
    description: "Коричневые, бордовые и тёмно-зелёные корешки. Идеально для классических интерьеров.",
    price: "5 490 ₽",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "vintage-3",
    title: "Винтажные книги светлых оттенков (10 шт)",
    description: "Бежевые и светло-коричневые корешки. Создают уютную атмосферу.",
    price: "3 990 ₽",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "vintage-4",
    title: "Большой набор винтажных книг (25 шт)",
    description: "Микс размеров и цветов. Для заполнения больших стеллажей и полок.",
    price: "9 990 ₽",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "vintage-5",
    title: "Винтажная классика с золотым тиснением (8 шт)",
    description: "Книги с золотыми элементами на корешках. Премиум-сегмент.",
    price: "6 990 ₽",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop",
    available: true
  },
  {
    id: "vintage-6",
    title: "Винтажные мини-книги (20 шт)",
    description: "Маленькие винтажные издания. Для декора небольших полок и ниш.",
    price: "4 490 ₽",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop",
    available: false
  }
];

export function VintageBooks() {
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
      {/* Header */}
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
            Винтажные книги
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#544C43',
            lineHeight: '1.7',
            maxWidth: '48rem',
            fontWeight: 500
          }}>
            Книги с историей и характером. Настоящие издания 1960-1980х годов для создания аутентичной атмосферы в интерьере.
          </p>
        </motion.div>

        {/* Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {['Аутентичная фактура', 'Уникальные экземпляры', 'Разные размеры', 'Быстрая доставка'].map((feature, index) => (
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

      {/* Products Grid */}
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
          {vintageProducts.map((product, index) => (
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
              {/* Product Image */}
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

              {/* Product Info */}
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

                {/* Add to Cart Button */}
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

      {/* Custom Order CTA */}
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
            Мы подберём винтажные книги специально под ваш интерьер и пожелания
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