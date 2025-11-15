import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 bg-background">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center"
        >
          <p className="opacity-80">
            КАПСА подбирает и доставляет настоящие книги для интерьеров.
          </p>
          <p className="opacity-80">
            Мы помогаем пространствам обрести аутентичность и характер.
          </p>
        </motion.div>
      </div>
    </section>
  );
}