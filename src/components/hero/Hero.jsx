import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ children }) => {
  // const { title, description } = useSiteMetadata()

  return (
    <section className="hero is-medium is-dark is-bold">
      {children}
    </section>
  )
}

// Hero.propTypes = {
//   content: PropTypes.node,
//   className: PropTypes.string,
// }

export default Hero
