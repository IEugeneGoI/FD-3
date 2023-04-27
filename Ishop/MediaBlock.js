var Mediablock = React.createClass({
  displayName: 'Mediablock',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    inStock: React.PropTypes.number.isRequired,
  },

  render: function() {
    return React.DOM.div({className: 'media'},
      React.DOM.img({className: 'media__img', src: this.props.url}),
      React.DOM.div({className: 'media__body'}, 
        React.DOM.h4(null, this.props.name),
        React.DOM.p(null, `Цена: ${this.props.price} BYN`),
        React.DOM.p(null, `Осталось на складе: ${this.props.inStock} шт.`)
      )  
    );
  }
});

