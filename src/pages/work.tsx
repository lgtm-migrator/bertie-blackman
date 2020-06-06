import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Page from '@layouts/page'

import Hero from '@components/hero'
import WorkItem from '@components/work-item'
import { WorkItem as WorkItemType } from '@typings'

interface WorkQuery {
  allContentfulWork: {
    totalCount: number
    nodes: WorkItemType[]
  }
}

const getWorkItemsFromQuery = ({ allContentfulWork: { nodes } }: WorkQuery) =>
  nodes.map(({ employerName, logo, dateFrom, dateTo, description }) => ({
    employerName,
    description: description.json,
    logo: { url: logo.file.url, alt: logo.title },
    dates: { from: dateFrom, to: dateTo },
  }))

const App = () => {
  const data = useStaticQuery<WorkQuery>(graphql`
    query WorkQuery {
      allContentfulWork(sort: { fields: dateTo, order: DESC }) {
        totalCount
        nodes {
          employerName
          dateFrom(formatString: "MMMM YYYY")
          dateTo(formatString: "MMMM YYYY")
          description {
            json
          }
          logo {
            file {
              url
            }
            title
          }
        }
        totalCount
      }
    }
  `)

  const employerData = getWorkItemsFromQuery(data)

  return (
    <Page title="work">
      <Hero
        heading="work"
        body="I've spent the last 5 years in the industry working on a variety of products backed by varying tech stacks, giving me the experience to adapt to any working environment."
      />

      {employerData.map((employer, index) => (
        <WorkItem
          key={employer.employerName}
          logo={employer.logo}
          description={employer.description}
          dates={employer.dates}
          hasHR={index + 1 < data.allContentfulWork.totalCount}
        />
      ))}
    </Page>
  )
}

export default App
