var Product = React.createClass({
  displayName: 'Product',

  propTypes: {
    code: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    inStock: React.PropTypes.number.isRequired,
    cbSelected: React.PropTypes.func.isRequired,
    cbDeleted:  React.PropTypes.func.isRequired,
    isSelected: React.PropTypes.bool.isRequired
  },

  selectProduct: function () {
    this.props.cbSelected(this.props.code);
  },

  deleteIProduct: function() {
    this.props.cbDeleted(this.props.code)
  },

  render: function() {
    return React.DOM.tr({key: this.props.code, onClick: this.selectProduct, style: {background: this.props.isSelected ? 'orange' : 'white'}},
            React.DOM.td({className: 'cell'}, this.props.name),
            React.DOM.td({className: 'cell'}, this.props.price),
            React.DOM.td({className: 'cell'}, this.props.url),
            React.DOM.td({className: 'cell'}, this.props.inStock),
            React.DOM.td({className: 'cell'},
              React.DOM.input({type:'button',value:'Delete', onClick: this.deleteIProduct})
            ),
          );
  }
});

