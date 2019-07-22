import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/one-col-layout"
import BootStrapCarousel from '../components/bootstrap-carousel'
import { Container } from 'react-bootstrap'
import BlogCards from '../components/cards/blog-cards'
const UserTemplate = ({ data }) => (
  <Layout>
    <BootStrapCarousel data={data.allStrapiCarousel.edges} />
    <br></br>
    <h1>{data.strapiUser.username}</h1>

    <Container>
      <BlogCards cards={data.strapiUser.articles} />
    </Container>
  </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        content
      }
	}
	allStrapiCarousel {
      edges {
        node {
          title
          subtitle
          image {
            childImageSharp {
              resize(width: 1200, height: 400){
                src
              }
            }
          }
        }
      }
    }
  }
`
