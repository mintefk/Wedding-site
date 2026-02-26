export default function Events({ events }) {
  return (
    <section id="events" className="py-28 bg-white text-center">
      <h2 className="text-2xl mb-6">Events</h2>
      {events.map((event, index) => (
        <div className="border border-amber-200 p-8 max-w-md mx-auto shadow-sm hover:shadow-lg transition">
          <h3 className="font-medium">{event.title}</h3>
          <p>{event.time} • {event.location}</p>
        </div>
      ))}
    </section>
  );
}