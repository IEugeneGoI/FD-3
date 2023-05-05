var Ishop = React.createClass({

  displayName: 'Ishop',

  propTypes: {
    header: React.PropTypes.string.isRequired,
    content:React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        inStock: React.PropTypes.number.isRequired,
      })
    )
  },

  getInitialState: function() {
    return {
      selectedProductCode: null,
      items: this.props.content
    };
  },

  productSelected: function (code) {
    this.setState({selectedProductCode: code})
  },

  deleteItem: function () {
    let answer = confirm('Delete?');
    if (answer) {
      var filterArr = this.state.items.filter(item =>
        item.code !== this.state.selectedProductCode
      );
      this.setState({items: filterArr});
    }
  },

  setDeleteCode: function (code) {
    this.setState({selectedProductCode: code}, this.deleteItem)
  },

  render: function () {
    var productItem = this.state.items.map(v =>
        React.createElement(Product, {key: v.code, code: v.code,
          name: v.name, price: v.price, url: v.url, inStock: v.inStock,
          cbSelected: this.productSelected, cbDeleted: this.setDeleteCode,
          isSelected: (v.code == this.state.selectedProductCode)})
    );

    return React.DOM.div({className: 'Ishop'},
            React.DOM.header(null, this.props.header),
            React.DOM.table(null, React.DOM.thead(null,
                React.DOM.tr(null,
                    React.DOM.th({className: 'cell'}, 'Name'),
                    React.DOM.th({className: 'cell'}, 'Price'),
                    React.DOM.th({className: 'cell'}, 'URL'),
                    React.DOM.th({className: 'cell'}, 'Quantity'),
                    React.DOM.th({className: 'cell'}, 'Control')
                )
              ),
              React.DOM.tbody({className: 'body'}, productItem)
            ),

    );
  }
});
