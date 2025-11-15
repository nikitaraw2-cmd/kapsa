import { motion } from "motion/react";
import { useState } from "react";
import { Send } from "lucide-react";

export function CustomOrder() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", contact: "", description: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="custom" className="py-20 px-6 md:px-12" style={{ backgroundColor: "#DCD2C5" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Нужна индивидуальная подборка?</h2>
          <p className="opacity-70">Мы создадим её для вашего пространства</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm opacity-70">
                Имя
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 bg-background border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                placeholder="Ваше имя"
              />
            </div>

            <div>
              <label htmlFor="contact" className="block mb-2 text-sm opacity-70">
                Контакт
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 bg-background border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors"
                placeholder="Email или телефон"
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 text-sm opacity-70">
              Описание
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-5 py-3 bg-background border-2 border-border rounded-xl focus:border-accent focus:outline-none transition-colors resize-none"
              placeholder="Расскажите о вашем пространстве, предпочтениях по цвету, количестве..."
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 bg-accent text-white rounded-full hover:bg-opacity-90 transition-all duration-300 flex items-center gap-2"
            >
              Отправить заявку
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}