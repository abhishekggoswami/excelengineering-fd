type LoopingLetterHeadingProps = {
  text: string
  className?: string
}

export default function LoopingLetterHeading({ text, className = '' }: LoopingLetterHeadingProps) {
  return (
    <h2 className={`cta-heading-flow ${className}`}>{text}</h2>
  )
}
