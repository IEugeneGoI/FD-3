var Filter = React.createClass({

  displayName: 'Filter',

  propTypes: {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  getInitialState: function() {
    return {
      wordsArray: this.props.words,
      filtered: false,
      checked: false,
      text:''
    };
  },

  freeTextChanged: function(eo) { 
    console.log('текст изменён - ' + eo.target.value); 
    this.setState( {filtered: true, text: eo.target.value}, this.filterText);
  },

  sortText: function(eo) {
    this.setState({checked: eo.target.checked}, this.filterText)
  },

  filterText: function () {
    let result = this.props.words.slice();

    if (this.state.checked) {
      result.sort();
    }

    if (this.state.filtered) {
      result = result.filter(item => item.includes(this.state.text));
      console.log(result);
    }

    this.setState({wordsArray: result});
  },

  reset: function() {
    this.setState({wordsArray: this.props.words, checked: false, text: ''});
  },

  render: function() {
    var selectInner = this.state.wordsArray.map( (item, index) => 
      React.DOM.option({key: index}, item)
    );

    return React.DOM.div( {className:'Filter'},
      React.DOM.input({type: 'checkbox', checked: this.state.checked, onChange: this.sortText}),
      React.DOM.input({type: 'text', value: this.state.text, onChange: this.freeTextChanged}),
      React.DOM.input({type: 'button', value: 'сброс', onClick: this.reset}),
      React.DOM.div(null, React.DOM.select({size: '5', name: 'select'}, selectInner))
    );
  }
});
