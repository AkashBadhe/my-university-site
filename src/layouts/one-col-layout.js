/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Master from "../layouts/master"

const Layout = ({ children }) => (
	<Master>
		<main className="container">{children}</main>
	</Master>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
