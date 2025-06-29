import { RecomendationsModel } from "@/models/texts.model";
import { AnimatedChar } from "./AnimatedChar";
import Recomendation from "./Recomendation";

export default function RecomendationsSection({
  recomendations,
}: {
  recomendations: RecomendationsModel;
}) {
  const title = recomendations.title.split(" ");

  return (
    <div className="h-fit min-h-svh pt-20">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="h2-container">
          {title.map((el: string, i: number) => (
            <AnimatedChar key={i} delay={i / 10}>
              {el}
            </AnimatedChar>
          ))}
        </div>

        <div className="flex flex-wrap justify-evenly gap-6 py-20">
          {recomendations.list.map((recomendation, i) => (
            <div key={i}>
              <Recomendation recomendation={recomendation}></Recomendation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
