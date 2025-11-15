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
          <h2 className="mb-4" style={{ color: '#3A342E' }}>
            Нужна индивидуальная подборка?
          </h2>
          <p style={{ color: '#544C43', fontSize: '1.125rem', fontWeight: 500 }}>
            Мы создадим её для вашего пространства
          </p>
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
              <label 
                htmlFor="name" 
                className="block mb-2 text-sm font-semibold"
                style={{ color: '#3A342E' }}
              >
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
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#D4C9BD',
                  color: '#3A342E'
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="contact" 
                className="block mb-2 text-sm font-semibold"
                style={{ color: '#3A342E' }}
              >
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
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: '#D4C9BD',
                  color: '#3A342E'
                }}
              />
            </div>
          </div>

          <div>
            <label 
              htmlFor="description" 
              className="block mb-2 text-sm font-semibold"
              style={{ color: '#3A342E' }}
            >
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
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#D4C9BD',
                color: '#3A342E'
              }}
            />
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-4 rounded-full transition-all duration-300 flex items-center gap-2"
              style={{
                backgroundColor: '#3A342E',
                color: '#FFFFFF',
                border: 'none',
                fontSize: '1.125rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2D2722';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3A342E';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
              }}
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