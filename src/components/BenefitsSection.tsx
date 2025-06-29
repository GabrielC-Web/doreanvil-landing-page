import { BenefitsModel } from "@/models/texts.model";
import { Scaling, Sparkles } from "lucide-react";
import "../styles/benefits.css";
import { AnimatedChar } from "./AnimatedChar";

export default function BenefitsSection({
  benefits,
}: {
  benefits: BenefitsModel;
}) {
  //* Title
  const text: any = benefits.title.split(" ");

  //* The icons
  const icons: {
    icon: any;
    id: number;
  }[] = [
    {
      icon: <Scaling className="w-10 h-10 mb-4 text-[#9a6aff]" />,
      id: 1,
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4 text-d-yellow" />,
      id: 2,
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4 text-d-yellow" />,
      id: 3,
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4 text-d-yellow" />,
      id: 4,
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4 text-d-yellow" />,
      id: 5,
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4 text-d-yellow" />,
      id: 6,
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4 text-d-yellow" />,
      id: 7,
    },
  ];

  //* Creates the benefits array matching the icons with the text
  const benefitsList: any[] = benefits.list.map((benefit: any) => {
    return {
      title: benefit.title,
      icon: icons.find((icon) => icon.id == benefit.id)?.icon,
      id: benefit.id,
    };
  });

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
          {benefitsList.map((benefit, index) => (
            <div key={index} className="benefit-box">
              {benefit.icon}
              <h3 className="text-xl font-bold mb-2 grow">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
