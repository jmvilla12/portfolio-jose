import type { ReactNode } from 'react'
import { useInView } from '@hooks/index'

interface RevealProps {
  children: ReactNode
  /**
   * Classes for the revealing element itself — pass the layout class here
   * (`card-grid`, `stats`, …) so no extra wrapper enters the box model.
   */
  className?: string
}

/**
 * Reveals its direct children on scroll, staggered. The observer sits on the
 * group rather than on each child, so a list costs one observer, not N.
 */
const Reveal = ({ children, className = '' }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={['reveal', inView && 'is-visible', className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}

export default Reveal
