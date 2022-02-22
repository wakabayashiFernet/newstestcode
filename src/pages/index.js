import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// export default function Home() {
//   return <div>Hello world!</div>
// }

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <ul>
      {data.allMicrocmsNews.edges.map(({ node }) => (
        <li key={node.newsId}>
          <Link to={`/news/${node.newsId}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsNews {
      edges {
        node {
          newsId
          title
        }
      }
    }
  }
`
