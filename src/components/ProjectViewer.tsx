export default function ProjectViewer({ project }: { project: any }) {
  return (
    <div className="relative max-w-5/6 max-h-full w-2xl h-[30rem] border-2 border-orange-700">
      <figure className="flex justify-center flex-col items-center">
        <img
          src={project.img.desktop}
          className="w-full max-w-5/6 h-full"
          alt=""
        />
        {/* <img src={project.img.mobile} className="w-" alt="" /> */}
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </figure>
    </div>
  );
}
