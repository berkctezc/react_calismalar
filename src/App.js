import React,{Component} from "react";

//oluşturduğumuz componentleri kullanmak için import ediyoruz
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";

import { Container, Row, Col } from "reactstrap"; //kullandığımız reactstrap özellikleri import edildi

export default class App extends Component {

  state={currentCategory:"",products:[]}

  componentDidMount(){
    this.getProducts();
  }

  changeCategory = (category) => { //event fonksiyon (onclickte kullanildi)
    this.setState({currentCategory:category.categoryName})
  };

  getProducts = ()=>{
    fetch("http://localhost:3000/products")
    .then(response=>response.json())
    .then(data=>this.setState({products: data}))
  };


  render() {
    let infoNavi = { title: "Navbar" };
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi info={infoNavi} />{" "}
            {/* Bu sekilde de propsdan deger alinabilir*/}
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} /> {/*Props yapisi icin (solda verilen degisken ismi component ici kullanilabilir)*/}
            </Col>
            <Col xs="9">
              <ProductList 
              products={this.state.products}
              currentCategory={this.state.currentCategory} 
              info={productInfo} />
            </Col>
          </Row>
        </Container>
        {/*JSX içinde JS kodu yazmak için "{}" kullanilir */}
      </div>
    ); //olusturdugumuz navi componenti
  }
}
