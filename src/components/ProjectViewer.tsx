export default function ProjectViewer({ project }: { project: any }) {
  return (
    <div className="relative max-w-[90%] xl:max-w-5xl max-h-[80%] xl:max-h-[550px] w-full h-full border-2 border-orange-700">
      <figure className="flex justify-center h-full w-full relative">
        <img
          src={project.img.desktop}
          className="w-full h-full absolute"
          alt=""
        />
        <img
          className="h-full absolute top-12 left-full -translate-x-5/6 z-20 border-2 border-orange-700"
          style={{ boxShadow: "black -6px -6px 10px" }}
          src={project.img.mobile}
          alt=""
        />
        {/* <img src={project.img.mobile} className="w-" alt="" /> */}
        <div
          className="w-full z-10 self-end p-3"
          style={{ marginRight: `332px` }}
        >
          <h3 className="text-center">{project.name}</h3>
          <p className="text-center">{project.description}</p>
        </div>
      </figure>
    </div>
  );
}
