import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryItem {
  id: string;
  image: string;
  caption: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1624340236923-4e6e8724695d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwYm9va3NoZWxmfGVufDF8fHx8MTc2Mjk3NzA5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Кафе Light — Песочная серия",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1634705964493-63ad88dc7464?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxpYnJhcnl8ZW58MXx8fHwxNzYyOTc3MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Отель Аврора — Наследие",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1674653760708-f521366e5cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMGJvb2tzfGVufDF8fHx8MTc2Mjk3NzA5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Студия Loft — Минимал белый",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1655143923516-3e88f1948a34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGludGVyaW9yJTIwZGVjb3J8ZW58MXx8fHwxNzYyOTc3MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Частная резиденция — Натуральные тона",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1603058817990-2b9a9abbce86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9va3MlMjBzaGVsZnxlbnwxfHx8fDE3NjI5NzYxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Лаунж-зона — Винтаж",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1585521551422-497df464aa43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJvb2tzJTIwc3RhY2t8ZW58MXx8fHwxNzYyOTc3MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "Креативное пространство — Радужный микс",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="mb-2">Как книги преображают пространство</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-md overflow-hidden mb-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <p className="text-xs opacity-70 text-center leading-tight">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}