import React from "react"
import { graphql } from "gatsby"
import "../styles/global.css"
import Layout from "../layouts/one-col-layout";
import BootStrapCarousel from '../components/bootstrap-carousel'
import { Container } from 'react-bootstrap'
import BlogCards from '../components/cards/blog-cards'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div >
        <BootStrapCarousel data={data.allStrapiCarousel.edges} />
        <br></br>
        <Container>
          <BlogCards cards={data.allStrapiArticle.edges} />
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`  
query {allStrapiCarousel {
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
  	allStrapiArticle{
      edges{
        node{
          id
          title
          content
          image {
            childImageSharp {
              resize(width: 235, height: 160){
                src
              }
            }
          }
        }
      }
    }
  }`

