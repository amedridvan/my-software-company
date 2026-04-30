function App() {
  const services = [
    {
      emoji: "🧩",
      title: "Custom Software Solutions",
      desc: "We build tailored software platforms that fit your exact operations and business goals.",
    },
    {
      emoji: "🚀",
      title: "Web App Development",
      desc: "Modern, high-performance web applications focused on speed, security, and usability.",
    },
    {
      emoji: "📲",
      title: "Mobile App Development",
      desc: "Scalable iOS and Android apps with smooth UX, strong architecture, and reliable delivery.",
    },
    {
      emoji: "☁️",
      title: "Cloud & DevOps",
      desc: "Cloud migration, CI/CD, and infrastructure optimization for better performance and uptime.",
    },
    {
      emoji: "🤖",
      title: "AI Automation",
      desc: "AI-driven features and workflow automation to reduce manual effort and improve decisions.",
    },
    {
      emoji: "🛡️",
      title: "Security & Compliance",
      desc: "Application security, vulnerability prevention, and compliance-ready implementation.",
    },
  ];
  const time11=new Date().getFullYear();

  return (
    <div className="font-sans bg-purple-950 text-white overflow-x-hidden">
      <head> 
        <title  >RG compnay  </title>
        <img  rel="icon" type="image/png" href="../images/icon.png" />
      </head>
      {/* Hero Section */}
      <header className="bg-purple-950 text-white min-h-screen">
        

        <div className="sticky top-0 z-50 backdrop-blur-md bg-purple-950/80 border-b border-purple-800/70">
          <div className="container mx-auto px-4">
            {/* Navbar */}
            <div className="flex flex-col md:flex-row justify-between items-center py-5 animate-fade-in-up">
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide mb-4 md:mb-0">
                RG<span className="text-fuchsia-400"> COMPANY</span>
              </h1>
              <nav className="space-x-6 text-sm md:text-base font-medium">
                <a href="#services" className="hover:text-fuchsia-400 transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-fuchsia-400 after:transition-all hover:after:w-full">Services</a>
                <a href="#about" className="hover:text-fuchsia-400 transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-fuchsia-400 after:transition-all hover:after:w-full">About</a>
                <a href="#contact" className="hover:text-fuchsia-400 transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-fuchsia-400 after:transition-all hover:after:w-full">Contact</a>
              </nav>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Navbar */}
          <div className="h-4" />

          {/* Hero Content */}
          <div className="text-center py-20 md:py-28 max-w-4xl mx-auto animate-fade-in-up animation-delay-100">
            <span className="inline-block bg-slate-800 border border-slate-700 text-slate-200 text-sm md:text-base font-medium px-4 py-2 rounded-full mb-6">
              Trusted by growing startups and enterprise teams
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Build Faster.
              <br />
              Scale Smarter.
            </h2>
            <p className="text-lg md:text-2xl mb-10 text-slate-300 max-w-3xl mx-auto">
              We design and deliver high-impact software products that help your business launch faster, operate better, and grow with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#contact"
                className="bg-fuchsia-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-fuchsia-400 transform hover:scale-105 transition duration-300 shadow-xl hover:shadow-fuchsia-500/30"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="px-8 py-3 rounded-full font-semibold border border-purple-700 bg-purple-900 text-purple-100 hover:bg-purple-800 transition duration-300"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="bg-purple-900 border border-purple-700 rounded-2xl p-4 animate-fade-in-up animation-delay-200">
                <p className="text-2xl font-bold">50+</p>
                <p className="text-sm text-slate-300">Successful Projects</p>
              </div>
              <div className="bg-purple-900 border border-purple-700 rounded-2xl p-4 animate-fade-in-up animation-delay-300">
                <p className="text-2xl font-bold">20+</p>
                <p className="text-sm text-slate-300">Global Clients</p>
              </div>
              <div className="bg-purple-900 border border-purple-700 rounded-2xl p-4 animate-fade-in-up animation-delay-400">
                <p className="text-2xl font-bold">4+ Years</p>
                <p className="text-sm text-slate-300">Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

      {/* Services Section */}
      <section id="services" className="py-24 bg-purple-950 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block bg-purple-900 border border-purple-700 text-purple-100 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Services Built for Modern Businesses
            </h2>
            <p className="text-slate-300 text-lg">
              From product strategy to deployment, we build digital solutions that are reliable, scalable, and user-focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => (
              <article
                key={index}
                className="group bg-slate-800 rounded-3xl p-8 border border-purple-700 shadow-sm hover:shadow-xl hover:shadow-fuchsia-500/20 hover:border-fuchsia-500 transform hover:-translate-y-2 transition duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl text-4xl mb-5 flex items-center justify-center transition bg-purple-900 group-hover:bg-purple-800 group-hover:scale-110 animate-float-slow">
                  {service.emoji}
                </div>
                <h3 className="text-xl font-bold mb-3 transition text-white group-hover:text-fuchsia-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {service.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

      {/* About Section */}
      <section id="about" className="py-28 bg-purple-950 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              About
            </h2>
            <span className="inline-block bg-purple-900 border border-purple-700 text-purple-100 text-sm font-semibold px-4 py-1 rounded-full mb-6">
              About RG Company
            </span>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Building software that helps businesses grow.
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-4">
              RG Company delivers custom software, web applications, mobile apps, cloud solutions, and AI-powered systems for modern businesses.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Our mission is simple: automate operations, improve customer experience, and give companies a technology foundation that scales with confidence.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 animate-fade-in-up animation-delay-200">
              <div className="bg-purple-900 border border-purple-700 rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-fuchsia-400">50+</p>
                <p className="text-slate-300 mt-1 text-sm">Projects</p>
              </div>
              <div className="bg-purple-900 border border-purple-700 rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-fuchsia-400">20+</p>
                <p className="text-slate-300 mt-1 text-sm">Clients</p>
              </div>
              <div className="bg-purple-900 border border-purple-700 rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-fuchsia-400">4+</p>
                <p className="text-slate-300 mt-1 text-sm">Years</p>
              </div>
              <div className="bg-purple-900 border border-purple-700 rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-fuchsia-400">24/7</p>
                <p className="text-slate-300 mt-1 text-sm">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

      {/* Footer */}
      <footer id="contact" className="bg-purple-950 text-white py-12 border-t border-purple-900">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© {time11} RG COMPANY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
