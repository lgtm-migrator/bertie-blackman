import React from 'react'

import { Navigation, NavigationItem } from '@components/navigation'

import { NavigationItem as NavigationItemType } from '@typings'

interface HeaderProps {
  navigationItems: NavigationItemType[]
}

const currentYear = new Date().getFullYear()

const Footer: React.FC<HeaderProps> = ({ navigationItems }) => (
  <footer className="flex items-center bg-primary py-5 px-3 flex-wrap">
    <small className="text-accent font-bold">&copy;{currentYear} bertie blackman</small>

    <Navigation>
      {navigationItems.map((navigationItem, index) => (
        <NavigationItem
          to={navigationItem.to}
          label={navigationItem.label}
          key={navigationItem.label}
          external={navigationItem.external}
          className={index > 0 ? 'ml-3' : undefined}
        />
      ))}
    </Navigation>
  </footer>
)

export default Footer
