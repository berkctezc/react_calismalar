import React, { Component } from "react";
import { ListGroupItem, ListGroup } from "reactstrap"; //kullandigimiz reactstrap elementini kullanabilmek için importluyoruz

export default class CategoryList extends Component {
   render() {
    return (
      <div>
        <h3>{this.props.title}</h3> {/* App.js'de component'e yazılan title degeri -> <h3>Category List</h3> */}
        {/*Reactstrapten kullandığımız listgroup*/}
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Morbi leo risus</ListGroupItem>
          <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
