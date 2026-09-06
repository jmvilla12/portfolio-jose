import { useCountUp, useInView } from '@hooks/index'

interface CountUpProps {
  /** Figure to animate, e.g. "2+". Non-numeric values render unchanged. */
  value: string
}

const CountUp = ({ value }: CountUpProps) => {
  const { ref, inView } = useInView<HTMLSpanElement>(0.6)
  const display = useCountUp(value, inView)

  return (
    <span ref={ref} className="countup">
      {display}
    </span>
  )
}

export default CountUp
