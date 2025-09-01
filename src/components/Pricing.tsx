const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Starter', price: '$29', features: ['1 Camera Stream', 'Basic Dashboard'] },
          { title: 'Pro', price: '$79', features: ['5 Streams', 'Analytics', 'Support'] },
          { title: 'Enterprise', price: 'Custom', features: ['Unlimited Streams', 'API Access', '24/7 Support'] }
        ].map((plan, idx) => (
          <div key={idx} className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="text-sm text-white/70 space-y-1 mb-4">
              {plan.features.map((f, i) => <li key={i}>✓ {f}</li>)}
            </ul>
            <button className="mt-2 bg-cyan-500 text-black px-4 py-2 rounded-xl font-semibold">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Pricing
