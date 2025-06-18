import { Briefcase, ChevronsRight } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            My Professional Journey
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Briefcase className="w-10 h-10 text-blue-600" />
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Frontend Developer
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                Soluciones financieras chinchin
              </p>
              <p className="text-md text-gray-500 mb-4">2022 – Present</p>
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <ChevronsRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Played a key role in a payment gateway processing over{" "}
                    <strong>20,000 transactions daily</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronsRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Developed 80% of the frontend for a user onboarding system
                    used by <strong>4 leading Venezuelan banks</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronsRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Engineered a comprehensive Angular library with over{" "}
                    <strong>50 reusable components</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronsRight className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Modernized code architecture, cutting monthly maintenance by{" "}
                    <strong>50 hours</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
