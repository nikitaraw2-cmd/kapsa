import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="pt-4 pb-2 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-1">
            Оформляем пространства настоящими книгами
          </h2>
          <p className="opacity-70 text-sm leading-tight mb-0.5">
            Для кафе, ресторанов, отелей, студий и офисов.
          </p>
          <p className="opacity-70 text-sm leading-tight">
            Подходит и для частных квартир и домов.
          </p>
        </motion.div>
      </div>
    </section>
  );
}