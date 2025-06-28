import { Scaling, ShieldCheck, Sparkles } from "lucide-react";
import "../styles/benefits.css";
import { AnimatedChar } from "./AnimatedChar";

export default function BenefitsSection() {
  //* Title
  const text: any = "What benefits do I offer to you?".split(" ");

  //* Benefits
  const benefits = [
    {
      icon: <Scaling className="w-10 h-10 mb-4 text-[#9a6aff]" />,
      title: "Scalability",
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4 text-d-yellow" />,
      title: "Efficiency",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 mb-4 text-d-violet" />,
      title: "User-friendly",
    },
    {
      icon: <Scaling className="w-10 h-10 mb-4 text-d-blue" />,
      title: "Robust solutions",
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4 text-d-violet" />,
      title: "Remarkable website",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 mb-4 text-d-green" />,
      title: "Mantainable and reusable code",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 mb-4 text-d-green" />,
      title: "Agile development",
    },
  ];

  return (
    <section id="benefits" className="h-fit w-full min-h-svh pt-20">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-3">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-box">
              {benefit.icon}
              <h3 className="text-xl font-bold mb-2 grow">{benefit.title}</h3>
              {/* <p className="text-gray-600">{benefit.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
