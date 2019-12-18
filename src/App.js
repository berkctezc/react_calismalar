import React from "react";
import { Container, Row } from "reactstrap";

import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <CategoryList />
          <ProductList />
        </Row>
      </Container>
    </div>
  ); //olusturdugumuz navi componenti
}

export default App;
