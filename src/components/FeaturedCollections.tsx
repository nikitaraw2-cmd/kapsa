import { motion } from "motion/react";

interface Collection {
  id: string;
  title: string;
  price: string;
  image: string;
}

const collections: Collection[] = [
  {
    id: "sand",
    title: "Песочные тона",
    price: "от 990₽",
    image: "https://images.unsplash.com/photo-1565631941072-6f24492b8497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGFycmFuZ2VkJTIwYmVpZ2UlMjBuZXV0cmFsfGVufDF8fHx8MTc2Mjk4MjAwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "minimal",
    title: "Минимал белый",
    price: "от 1 190₽",
    image: "https://images.unsplash.com/photo-1621255619930-739359991b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXV0cmFsJTIwYm9va3MlMjBzdHlsaW5nfGVufDF8fHx8MTc2Mjk3ODcwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "heritage",
    title: "Наследие",
    price: "от 1 490₽",
    image: "https://images.unsplash.com/photo-1605265406841-9d9967ea2989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbnRpcXVlJTIwYm9va3MlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2Mjk3ODcwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "forest",
    title: "Лесная зелень",
    price: "от 1 090₽",
    image: "https://images.unsplash.com/photo-1585521551422-497df464aa43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGJvb2tzJTIwc3RhY2t8ZW58MXx8fHwxNzYyOTc3MDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function FeaturedCollections() {
  return (
    <section className="py-20 px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="mb-3">Избранные коллекции</h2>
          <p className="opacity-60">Готовые комплекты с ценами</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <motion.img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>

              <div className="text-center">
                <h4 className="mb-1">{collection.title}</h4>
                <p className="text-sm opacity-60">{collection.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}