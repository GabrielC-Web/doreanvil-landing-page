import { useEffect, useRef, useState } from "react";
import "../styles/projects.css";
import { AnimatedChar } from "./AnimatedChar";
import ProjectViewer from "./ProjectViewer";
//! Optimize images
import {
  desktopBooksEcommerce,
  desktopClothingEcommerce,
  desktopGallery,
  desktopMakeupEcommerce,
  mobileBooksEcommerce,
  mobileClothesEcommerce,
  mobileGallery,
  mobileMakeupEcommerce,
} from "@/assets/projects/images";
import { ProjectItemModel, ProjectsModel } from "@/models/texts.model";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsSectionAlternative({
  projects,
}: {
  projects: ProjectsModel;
}) {
  //* Title
  const text: any = projects.title.split(" ");

  const horizontalScroller = useRef<HTMLDivElement | null>(null);

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const [scrollLeftEnded, setScrollLeftEnded] = useState<boolean>(false);
  const [scrollRightEnded, setScrollRightEnded] = useState<boolean>(false);

  // Effect to update viewportWidth on resize
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);

      checkControllersAvailable();
    };

    checkControllersAvailable();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      checkControllersAvailable();
    };

    horizontalScroller.current?.addEventListener("scroll", handleScroll);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      horizontalScroller.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHorizontalScroll = (way: "before" | "after") => {
    checkControllersAvailable();

    if (way == "before") {
      horizontalScroller.current?.scrollBy({
        left: -viewportWidth,
        behavior: "smooth", // For smooth animation
      });
    } else {
      horizontalScroller.current?.scrollBy({
        left: viewportWidth,
        behavior: "smooth",
      });
    }
  };

  /**
   * Revisa si se puede scrollear a la derecha o la izquierda
   */
  const checkControllersAvailable = () => {
    setScrollLeftEnded(false);
    setScrollRightEnded(false);

    if (horizontalScroller.current && viewportWidth > 800) {
      setScrollLeftEnded(horizontalScroller.current?.scrollLeft == 0);
      setScrollRightEnded(
        horizontalScroller.current!.scrollLeft + viewportWidth >=
          horizontalScroller.current?.scrollWidth
      );
    }
  };

  //? Projects animation

  const projectImages = [
    {
      img: {
        mobile: mobileClothesEcommerce,
        desktop: desktopClothingEcommerce,
      },
      id: 1,
    },
    {
      img: {
        mobile: mobileMakeupEcommerce,
        desktop: desktopMakeupEcommerce,
      },
      id: 2,
    },
    {
      img: {
        mobile: mobileBooksEcommerce,
        desktop: desktopBooksEcommerce,
      },
      id: 3,
    },
    {
      img: {
        mobile: mobileGallery,
        desktop: desktopGallery,
      },
      id: 4,
    },
  ];

  //? Projects

  //* Creates the benefits array matching the icons with the text
  const projectsList: any[] = projects.projects.map(
    (project: ProjectItemModel) => {
      return {
        name: project.name,
        description: project.description,
        img: projectImages.find((img) => img.id == project.id)?.img,
        id: project.id,
        skills: project.skills,
        url: project.url,
        visitButtonText: projects.visitButtonText,
        openButtonText: projects.openButtonText,
        closeButtonText: projects.closeButtonText,
      };
    }
  );

  return (
    <section id="projects" className="pt-20">
      <div className="h2-container">
        {/* Title */}
        {text.map((el: string, i: number) => (
          <AnimatedChar key={i} delay={i / 10}>
            {el}
          </AnimatedChar>
        ))}
      </div>
      <div className="h-svh relative">
        <div className="overflow-hidden">
          {/* horizontal scroll controller (Solo en tamaños de escritorio) */}
          {viewportWidth > 1024 && (
            <div className="absolute container mx-auto w-full h-10 right-1/2 top-1/2 z-20 translate-x-1/2 translate-y-1/4  flex justify-between items-center">
              <div
                className={
                  "size-fit border-2 border-d-orange cursor-pointer" +
                  (scrollLeftEnded ? " opacity-50 pointer-events-none" : "")
                }
                onClick={() => {
                  handleHorizontalScroll("before");
                }}
              >
                <ChevronLeft className="text-d-blue"></ChevronLeft>
              </div>
              <div
                className={
                  "size-fit border-2 border-d-orange cursor-pointer" +
                  (scrollRightEnded ? " opacity-50 pointer-events-none" : "")
                }
                onClick={() => {
                  handleHorizontalScroll("after");
                }}
              >
                <ChevronRight className="text-d-blue"></ChevronRight>
              </div>
            </div>
          )}

          {/* Projects */}
          <div
            id="scroll_h_container"
            ref={horizontalScroller}
            className="w-full flex items-center gap-3 overflow-x-auto"
          >
            {projectsList.map((project, i) => (
              <div key={i} className="box">
                <ProjectViewer project={project}></ProjectViewer>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
