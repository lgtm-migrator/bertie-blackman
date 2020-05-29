import React from 'react'

import { Navigation, NavigationItem } from '../../components/navigation'

const GITHUB_URL = 'https://github.com/covertbert/'
const LINKEDIN_URL = 'https://www.linkedin.com/in/bertie-blackman-3654767a/'

const Footer: React.FC = () => {
  return (
    <footer className="flex items-center bg-primary p-3 flex-wrap">
      <small className="text-white">&copy; Copyright {new Date().getFullYear()}</small>

      <Navigation>
        <NavigationItem to="/work" label="work" />
        <NavigationItem to="/blog" label="blog" className="ml-3" />
        <NavigationItem external to={GITHUB_URL} label="github" className="ml-3" />
        <NavigationItem external to={LINKEDIN_URL} label="linkedin" className="ml-3" />
      </Navigation>
    </footer>
  )
}

export default Footer
