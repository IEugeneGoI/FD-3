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

  render: function() {
    return React.DOM.div( {className:'Ishop'}, 
      React.createElement(HeaderBlock, {header: this.props.header}),
      React.DOM.div( {className:'media-cards'}, this.props.content.map( item => 
          React.createElement(Mediablock, {key:item.code, name: item.name, url: item.url, price: item.price, inStock: item.inStock})
        ) 
      )
    );
  },
});
