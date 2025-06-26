import { Scaling, Sparkles, ShieldCheck } from "lucide-react";
import { AnimatedChar } from "./AnimatedChar";

export default function BenefitsSection() {
  //* Title
  const text: any = "What benefits do I offer to you?".split(" ");

  const benefits = [
    {
      icon: <Scaling className="w-10 h-10 text-orange-700 mb-4" />,
      title: "Scalable & High-Performance",
      description:
        "Building robust applications capable of handling high traffic, like payment gateways with over 20,000 daily transactions.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-orange-700 mb-4" />,
      title: "Efficient & Modern Code",
      description:
        "Leveraging reusable component libraries and modern architecture to cut down on maintenance time and ensure consistency.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-orange-700 mb-4" />,
      title: "User-Centric & Reliable",
      description:
        "Collaborating closely with UI/UX teams to create intuitive interfaces and reliable systems trusted by leading banks.",
    },
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="h2-container">
            {/* Title */}
            {text.map((el: string, i: number) => (
              <AnimatedChar key={i} delay={i / 10}>
                {el}
              </AnimatedChar>
            ))}
          </div>
          <p className="text-lg text-gray-600 mt-2">
            I deliver tangible results, not just code.
          </p>
          <div className="w-20 h-1 bg-orange-700 mx-auto mt-4 rounded"></div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              {benefit.icon}
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
