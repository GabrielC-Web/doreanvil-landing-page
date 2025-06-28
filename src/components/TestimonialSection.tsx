import { AnimatedChar } from "./AnimatedChar";
import Recomendation from "./Recomendation";

export default function TestimonialSection() {
  const title = "What some people have to say...".split(" ");

  const recomendations: {
    name: string;
    recomendation: string;
    role: string;
    image: string;
    url: string;
  }[] = [
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4E35AQFb9XwG702xcg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1738011340925?e=1751673600&v=beta&t=-rM0dEDZvdXDxyjDbbmtfQgVCXRJyB-8mx6OaMu2efg",
      name: "Angela Ortiz",
      role: "Graphic Designer",
      recomendation: `Gabriel Carreño, an exceptional Front-end developer with whom I had the privilege of collaborating for two years on the Chinchin project. \n \n Gabriel is an extremely decisive and organized professional, always willing to face challenges and find effective solutions. Your ability to communicate clearly and concisely is an invaluable asset, greatly facilitating collaboration and mutual understanding on complex projects. \n \n His experience and deep knowledge in Front-end development is evident in the quality of his work. I recommend Gabriel without hesitation to any company or team looking for a dedicated, talented professional with great problem-solving skills.`,
      url: "https://www.linkedin.com/in/angela-ortiz-b43420284/",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/D4E35AQErEUt5figUCg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1651713834357?e=1751673600&v=beta&t=ych9teT9KpUbQHeYpbnUDx9DEOUk9U8ceT_u7pJttiM",
      name: "Alivier Zapata",
      role: "Backend developer",
      recomendation: `Gabriel is an excellent front-end developer, quite capable, and I always see first-hand how resourceful and attentive he is when it comes to working and coding.`,
      url: "https://www.linkedin.com/in/angela-ortiz-b43420284/",
    },
  ];

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
          {recomendations.map((recomendation, i) => (
            <div key={i}>
              <Recomendation recomendation={recomendation}></Recomendation>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
