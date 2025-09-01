const Testimonials: React.FC = () => {
  const quotes = [
    {
      name: 'Rahul J.',
      quote: 'The AI detection system helped us cut inspection time by 70%.',
    },
    {
      name: 'Sneha P.',
      quote: 'We integrated it into our factory line in under a day. Amazing!',
    },
    {
      name: 'Arjun M.',
      quote: 'Accurate, fast, and robust – just what we needed for surveillance.',
    },
  ]

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-10">What Clients Say</h2>
      <div className="space-y-8">
        {quotes.map((q, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-white/80 text-md italic">“{q.quote}”</p>
            <p className="mt-3 text-cyan-400 font-medium">{q.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Testimonials
