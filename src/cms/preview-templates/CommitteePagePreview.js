import React from 'react'
import PropTypes from 'prop-types'
import { CommitteePageTemplate } from '../../templates/committee'

const CommitteePagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <CommitteePageTemplate
      image={getAsset(entry.getIn(['data', 'image']))}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
    />
  )
}

CommitteePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CommitteePagePreview
