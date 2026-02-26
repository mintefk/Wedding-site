export default function Location() {
  return (
    <section id="location" className="py-28 bg-neutral-100 text-center">
  <h2 className="luxury-title text-4xl mb-6">Location</h2>
  <div className="w-20 h-[1px] bg-amber-400 mx-auto mb-8"></div>
      <div className="max-w-3xl mx-auto">
        <iframe
          title="map"
          className="w-full h-72"
          src="https://www.google.com/maps/embed?pb="
        ></iframe>
      </div>
    </section>
  );
}