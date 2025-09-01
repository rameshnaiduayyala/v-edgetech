const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>
      <p className="text-white/70 mb-8">Want a custom solution or demo? Contact us now.</p>
      <form className="space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50" />
        <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50"></textarea>
        <button className="bg-cyan-500 text-black px-6 py-2 rounded-xl font-bold">Send Message</button>
      </form>
    </section>
  )
}
export default Contact
