import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface Category {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const categories: Category[] = [
  {
    id: "vintage",
    title: "Винтажные книги",
    subtitle: "Книги с историей и фактурой",
    image: "https://images.unsplash.com/photo-1633099158362-17b8ba5b27db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwb2xkJTIwYm9va3MlMjBzdGFja3xlbnwxfHx8fDE3NjMyMDYyNDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "modern",
    title: "Современные книги",
    subtitle: "Ровные корешки, чистые линии",
    image: "https://images.unsplash.com/photo-1760840415479-438f61268bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBib29rcyUyMGNsZWFuJTIwc3BpbmVzfGVufDF8fHx8MTc2MzIwNjI0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "color",
    title: "Книги по цвету",
    subtitle: "Подбор по оттенкам интерьера",
    image: "https://images.unsplash.com/photo-1628522972018-e7479d00e06e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGNvbG9yJTIwY29vcmRpbmF0ZWQlMjBzaGVsZnxlbnwxfHx8fDE3NjMyMDYyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "theme",
    title: "Книги по тематике",
    subtitle: "Искусство, архитектура, классика и др.",
    image: "https://images.unsplash.com/photo-1551600357-faaba97a5b08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBib29rcyUyMGFyY2hpdGVjdHVyZSUyMHN0YWNtfGVufDF8fHx8MTc2MzIwNjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function CatalogGrid() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="catalog" className="pb-4 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onHoverStart={() => setHoveredId(category.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group cursor-pointer bg-card rounded-lg overflow-hidden border border-border/30 shadow-sm"
            >
              <div className="p-3">
                {/* Image */}
                <div className="relative w-full aspect-[16/11] rounded-md overflow-hidden bg-muted mb-2">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === category.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  />
                </div>

                {/* Info */}
                <div>
                  <h4 className="mb-1">{category.title}</h4>
                  <p className="text-xs opacity-60 leading-snug mb-2">{category.subtitle}</p>

                  {/* CTA Button */}
                  <button className="w-full py-2 bg-accent text-foreground rounded-full hover:bg-opacity-85 transition-all duration-300 text-sm flex items-center justify-center gap-1.5 shadow-md">
                    Смотреть
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}