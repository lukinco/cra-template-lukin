import React from 'react'
import t from 'prop-types'

const Title = ({ children }) => (
  <h1>{children}</h1>
)

Title.propTypes = {
  children: t.node,
}

export default Title
