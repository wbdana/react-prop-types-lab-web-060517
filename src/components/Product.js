import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div>
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>
      </ul>
    </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, weight, Product) {
    if (!props.weight) {
      return new Error('Need weight')
    } else if ( !(typeof (props.weight) === "number") ) {
      return new Error('That\'s not even a number')
    } else if ( props.weight < 80 || props.weight > 300 ) {
      return new Error('It\'s so wrong!')
    }
  }
}
