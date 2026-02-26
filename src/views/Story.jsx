export default function Story({ story }) {
  return (
    <section id="story" className="py-28 bg-rose-50 text-center px-6">
      <h2 className="luxury-title text-4xl mb-6">Our Story</h2>
      <div className="w-20 h-[1px] bg-amber-400 mx-auto mb-8"></div>
      <p className="max-w-2xl mx-auto">{story}</p>
    </section>
  );
}