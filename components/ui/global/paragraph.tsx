export default function Paragraph({ text }: { text: string }) {
  return (
    <span className="text-[13px] leading-[19.5px]   text-graySupport tracking-normal">
      {text}
    </span>
  );
}
