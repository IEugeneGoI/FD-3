import React from 'react';
import PropTypes from 'prop-types';

import './Ishop.css';
import Product from './Product';
import ProductInfo from './ProductInfo';
import ProductEdit from './ProductEdit';

class Ishop extends React.Component {

  static displayName = 'Ishop'

  static propTypes = {
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        inStock: PropTypes.string.isRequired,
      })
    )
  }

  state =  {
    selectedItemCode: '',
    items: this.props.items,
    blockChange: false,
    mode: 0, // 0-none, 1-view, 2-edit
    key: null,
    add: false
  }

  itemSelected = (code) => {
      this.setState({selectedItemCode: code, mode: 1})
  }

  itemEdited = (code) => {
      this.setState({selectedItemCode: code, mode: 2, key: ++this.state.key})
  }

  setDeleteCode = (code) => {
      this.setState({selectedItemCode: code}, this.deleteElement)
  }

  deleteElement = () => {
      let answer = confirm('Delete?');
      if (answer) {
          var filterArr = this.state.items.filter(item =>
              item.code !== this.state.selectedItemCode
          );
          this.setState({items: filterArr, mode: 0, selectedItemCode: ''});
      }
  }

  onChange = () => {
      this.setState({blockChange: true});
  }

  newProduct = () => {
    const items = this.state.items;
    const newKey = items.reduce((acc, curr) => {
      acc.code > curr.code ? acc.code : curr.code;
      return curr.code + 1;
    });
    this.setState({mode: 2, key: newKey, add: true});    
  }

  changeItems = (newItem) => {
      let items;
      if(this.state.add) {
          let item = {...newItem, code: this.state.key};
          items = this.state.items.slice();
          items.push(item);
      }else {
          items = this.state.items.map(v => v.code == newItem.code ? newItem : v);
      }
      this.setState({items: items, blockChange: false, mode: 0, add: false});
  }

  canceled = () => {
      this.setState({mode: 0, blockChange: false, add: false});
  }

  render() {

      let itemsCode = this.state.items.map(v =>
          <Product 
            key = {v.code}  
            code = {v.code}  
            blockChange = {this.state.blockChange}  
            add= {this.state.add}
            name = {v.name}  
            price = {v.price} 
            url = {v.url} 
            inStock = {v.inStock} 
            mode = {this.state.mode}
            cbSelected = {this.itemSelected} 
            cbDeleted = {this.setDeleteCode}
            cbEdited = {this.itemEdited}  
            isSelected = {v.code == this.state.selectedItemCode}
          />
      );

      let item = this.state.items.find(v => v.code == this.state.selectedItemCode);
      let   addItem = {
                  code: this.state.key,
                  name: '',
                  price: '',
                  url: '',
                  inStock: ''
                };

      return (
          <div className = 'Ishop'>
              <div className = 'ShopName'>
                {this.props.name}
              </div>
              <table className = 'table'>
                  <thead>
                      <tr>
                          <th className = 'cell'>Name</th>
                          <th className = 'cell'>Price</th>
                          <th className = 'cell'>URL</th>
                          <th className = 'cell'>Quantity</th>
                          <th className = 'cell'>Control</th>
                      </tr>
                  </thead>
                  <tbody className = 'body'>
                    {itemsCode}
                  </tbody>
              </table>
              <input type ='button' value ='New Product'  onClick = {this.newProduct}  hidden = {this.state.add == true || this.state.mode == 2}/>
              {this.state.selectedItemCode && 
                <ProductInfo 
                  item = {item}
                  mode = {this.state.mode}
                />}
              {
                (this.state.add) &&
                <ProductEdit  
                  key = {this.state.key}   
                  item = {this.state.add ? addItem : item}
                  mode = {this.state.mode}  
                  add = {this.state.add} 
                  cbChanged = {this.changeItems}
                  cbCanceled = {this.canceled} 
                  cbOnChange = {this.onChange}
                />
              }
            </div>
      );
  }
};

export default Ishop;