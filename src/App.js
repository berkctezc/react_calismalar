import React from "react";

//oluşturduğumuz componentleri kullanmak için import ediyoruz
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

import { Container, Row, Col } from "reactstrap"; //kullandığımız reactstrap özellikleri import edildi

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <Col xs="3">
          <CategoryList />
          </Col>
          <Col xs="9">
          <ProductList />
          </Col>
        </Row>
      </Container>
    </div>
  ); //olusturdugumuz navi componenti
}

export default App;
