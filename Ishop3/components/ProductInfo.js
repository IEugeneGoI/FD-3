import React from 'react';
import PropTypes from 'prop-types';
import './ProductInfo.css'


class ProductInfo extends React.Component {

    static displayName = "IshopInfo"

    static propTypes = {
        mode: PropTypes.number.isRequired,
        item: PropTypes.object.isRequired
    }

    render () {
        return (
            <div className ='ProductInfo' hidden = {this.props.mode !== 1}>
                <h3>
                    {this.props.item ? this.props.item.name : null}
                </h3>
                <a href = {this.props.item ? this.props.item.url : null}>
                    {this.props.item ? this.props.item.url : null}
                </a>
                <span className = 'Price'>
                    {this.props.item ? this.props.item.price : null}
                </span>
            </div>
        )
    }
}

export default ProductInfo;