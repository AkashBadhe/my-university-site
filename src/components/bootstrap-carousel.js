import React from 'react'
import { Carousel } from 'react-bootstrap'
import { graphql } from "gatsby"

export default function BootStrapCarousel({ data }) {
	return (
		<div>
			<Carousel>
				{data.map(data => {
					let node = data.node
					return (<Carousel.Item key={node.id}>
						<img
							className="d-block w-100"
							style={{
								width: 600,
								heigh: 400
							}}
							src={node && node.image && node.image.childImageSharp &&
								node.image.childImageSharp.resize &&
								node.image.childImageSharp.resize.src}
							alt={node.Title}
						/>
						<Carousel.Caption>
							<h3>{node.Title}</h3>
							<p>{node.subtitle}</p>
						</Carousel.Caption>
					</Carousel.Item>)
				})}
			</Carousel>
		</div>
	)
}

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`





