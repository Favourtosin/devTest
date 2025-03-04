export default function Title({ text }: { text: string }) {
  return (
    <h1 className=" font-medium  text-sm tracking-normal  text-grayMain">
      {text}
    </h1>
  );
}
