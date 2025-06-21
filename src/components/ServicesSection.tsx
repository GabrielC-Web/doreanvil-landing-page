export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What I Offer
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            From concept to deployment, I provide end-to-end development
            services.
          </p>
          <div className="w-20 h-1 bg-orange-700 mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Service 1 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Custom Frontend Development</h3>
            <p className="text-gray-600 leading-relaxed">
              I specialize in building dynamic, responsive, and scalable web
              applications using modern frameworks like <strong>Angular</strong>{" "}
              and <strong>React</strong>. I transform complex requirements into
              intuitive and beautiful user interfaces.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/600x400/1e40af/ffffff?text=Web+Application"
              alt="Web Application Development"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          {/* Service 2 */}
          <div className="md:order-last">
            <h3 className="text-2xl font-bold">Multi-Platform Mobile Apps</h3>
            <p className="text-gray-600 leading-relaxed">
              Using <strong>Flutter</strong>, I develop high-performance mobile
              applications for both Android and iOS from a single codebase. This
              approach saves time and ensures a consistent user experience
              across all devices.
            </p>
          </div>
          <div className="md:order-first">
            <img
              src="https://placehold.co/600x400/3b82f6/ffffff?text=Mobile+App"
              alt="Mobile App Development"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          {/* Service 3 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Code Modernization & Optimization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I can refactor and modernize existing codebases to improve
              performance, reduce technical debt, and make them easier to
              maintain. I also partner with backend teams to optimize API
              responses for faster load times.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/600x400/0f172a/ffffff?text=Code+Optimization"
              alt="Code Modernization"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
