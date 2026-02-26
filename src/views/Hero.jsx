export default function Hero({ date, city }) {
  return (
    <section className="h-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552')] bg-cover bg-center text-white">
      <div className="bg-black/50 p-10 text-center">
        <h2 className="text-5xl mb-4">We Are Getting Married</h2>
        <p className="text-lg">{date} • {city}</p>
      </div>
    </section>
  );
}