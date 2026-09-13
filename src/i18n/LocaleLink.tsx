import { Link, NavLink } from 'react-router-dom'
import type { LinkProps, NavLinkProps } from 'react-router-dom'
import { useLocalePath } from './store'

interface LocaleLinkProps extends Omit<LinkProps, 'to'> {
  /** An app path from `ROUTES` — the locale prefix is added here. */
  to: string
}

interface LocaleNavLinkProps extends Omit<NavLinkProps, 'to'> {
  to: string
}

/**
 * `Link` that keeps the visitor in the language they are reading. Always use
 * these instead of the bare router components: a plain `<Link to="/about">`
 * would drop a French reader back into English.
 */
export const LocaleLink = ({ to, ...rest }: LocaleLinkProps) => {
  const localePath = useLocalePath()
  return <Link to={localePath(to)} {...rest} />
}

export const LocaleNavLink = ({ to, ...rest }: LocaleNavLinkProps) => {
  const localePath = useLocalePath()
  return <NavLink to={localePath(to)} {...rest} />
}
