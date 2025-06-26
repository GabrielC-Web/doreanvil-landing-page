import { AnimatedChar } from "./AnimatedChar";

export default function TestimonialSection() {
  const title = "What some people have to say...".split(" ");

  return (
    <div className="h-fit min-h-svh">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="h2-container">
          {title.map((el: string, i: number) => (
            <AnimatedChar key={i} delay={i / 10}>
              {el}
            </AnimatedChar>
          ))}
        </div>
      </div>
    </div>
  );
}
