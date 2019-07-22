import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Reactmarkdown from "react-markdown"
import styles from './article.module.scss'
import Master from '../../layouts/master'

const ArticleTemplate = ({ data }) => (
	<Master>
		<div className={styles.image__container}>
			<Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
		</div>
		<div className={styles.page__container}>
			<div className={`${styles.articleContainer} container`}>
				<div className={styles.article__page}>
					<div>
						<h1>{data.strapiArticle.title}</h1>
						<p>
							by{" "}
							<Link to={`/authors/User_${data.strapiArticle.author.id}`}>
								{data.strapiArticle.author.username}
							</Link>
						</p>
					</div>
					<Reactmarkdown
						source={data.strapiArticle.content}
						transformImageUri={uri =>
							uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
						}
						className={styles.articleContent}
						escapeHtml={false}
					/>
				</div>
			</div>
		</div>
	</Master>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`


