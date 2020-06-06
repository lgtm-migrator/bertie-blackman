import React from 'react'
import { Document } from '@contentful/rich-text-types'

import Section from '@layouts/section'

import HR from '@components/hr'

import { enrich } from '@utils'

export interface WorkItemProps {
  logo: {
    url: string
    alt: string
  }
  dates: {
    from: Date
    to?: Date
  }
  description: Document
  hasHR?: boolean
}

const WorkItem: React.FC<WorkItemProps> = ({ logo, dates, description, hasHR }) => (
  <>
    <Section>
      <div className="max-w-3xl">
        <img src={logo.url} alt={logo.alt} />

        <p className="mt-6 font-bold">
          {dates.from} - {dates.to ? dates.to : 'Current'}
        </p>

        <p className="mt-4">{enrich(description)}</p>
      </div>
    </Section>

    {hasHR && <HR />}
  </>
)

export default WorkItem
