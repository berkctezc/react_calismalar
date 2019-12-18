import React from "react";

//oluşturduğumuz componentleri kullanmak için import ediyoruz
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

import { Container, Row, Col } from "reactstrap"; //kullandığımız reactstrap özellikleri import edildi

function App() {
  let titleNavi="Navbar"
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi title={titleNavi}/> {/* Bu sekilde de propsdan deger alinabilir*/}
        </Row>
        <Row>
          <Col xs="3">
          <CategoryList title="Category List"/> {/*Props yapisi icin*/}
          </Col>
          <Col xs="9">
          <ProductList title="Product List"/>
          </Col>
        </Row>
      </Container>
       {/*JSX içinde JS kodu yazmak için "{}" kullanilir */}
    </div>    
  ); //olusturdugumuz navi componenti
}

export default App;
