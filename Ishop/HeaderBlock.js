var HeaderBlock = React.createClass({
  displayName: 'HeaderBlock',

  propTypes: {
    header: React.PropTypes.string,
  },
  
  render: function() {
    return React.DOM.header(null,
      React.DOM.h1(null, this.props.header)
    );      
  }
})