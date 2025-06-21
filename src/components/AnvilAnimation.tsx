export default function AnvilAnimation() {
  return (
    <div className="flex flex-col items-center justify-center size-fit flame-light -translate-y-[20%]">
      <img
        src="/src/assets/anvil.gif"
        className="size-80"
        alt="Fire camp image"
      />
      <img
        src="/src/assets/flame-lit.gif"
        className="size-20 absolute -z-10 -translate-y-[70%] translate-x-1.5"
        alt="Fire camp image"
      />
    </div>
  );
}
