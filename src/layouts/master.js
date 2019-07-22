/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from "../components/header"
import Foolter from '../components/footer/footer'

// import "./layout.css"

const Master = ({ children }) => (
	<StaticQuery
		query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
		render={data => (
			<>
				<Header siteTitle={data.site.siteMetadata.title} />
				{children}
				<Foolter />
			</>
		)}
	/>
)

Master.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Master
