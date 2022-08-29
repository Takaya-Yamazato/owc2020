import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && typeof image === 'string') {
    return <img style={imageStyle} src={image} alt={alt} />
  }

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <GatsbyImage
        image={childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    )
  }

  return <StaticImage src="../img/logo.svg" alt="default image" />
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
