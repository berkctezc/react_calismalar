import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap"; //kullandigimiz reactstrap elementini kullanabilmek için importluyoruz

export default class CategoryList extends Component {
  state = { //state'te tutulmak istenen degisken,obje, array vb......
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" },
    ]
  }; 


  render() {
    return (
      <div>
          {/* App.js'de component'e yazılan title degeri -> <h3>Category List</h3> */}
        <h3>{this.props.info.title}</h3>
        <h3>{this.state.counter}</h3> {/* state kullanımı */}
        {/*Reactstrapten kullandığımız listgroup*/}
        <ListGroup>
          {//map fonksiyonu ile objeyi veya arrayi döngü ile item olarak atama yaptık
          this.state.categories.map(category => (
            <ListGroupItem onClick={()=>this.props.changeCategory(category)} key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
            //key = her elemanın unique değeri yani id'si
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}
