import React from "react";

//oluşturduğumuz componentleri kullanmak için import ediyoruz
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

import { Container, Row, Col } from "reactstrap"; //kullandığımız reactstrap özellikleri import edildi

function App() {
  let infoNavi={title:"Navbar"}
  let productInfo={title:"Product List"}
  let categoryInfo={title:"Category List"}
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi info={infoNavi}/> {/* Bu sekilde de propsdan deger alinabilir*/}
        </Row>
        <Row>
          <Col xs="3">
          <CategoryList info={categoryInfo}/> {/*Props yapisi icin*/}
          </Col>
          <Col xs="9">
          <ProductList info={productInfo}/>
          </Col>
        </Row>
      </Container>
       {/*JSX içinde JS kodu yazmak için "{}" kullanilir */}
    </div>    
  ); //olusturdugumuz navi componenti
}

export default App;
