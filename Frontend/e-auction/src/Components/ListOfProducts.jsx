import React, { Component } from 'react';
import ProductServices from '../Services/ProductServices';
import { Table, Button, Container, Card, CardHeader } from "reactstrap";


class ListOfProducts extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          products: [],
        }
    
        // this.addProducts = this.addProducts.bind(this);
        // this.delelteSeller = this.delelteSeller.bind(this);
        // this.updateSeller = this.updateSeller.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
      }
    
      componentDidMount() {
        ProductServices.getAllProducts().then((res) => {
            this.setState({products: res.data})
        })
      }

      createBids(productId){
        this.props.history.push(`/add-bids/product/${productId}`);
      }
    
    
      deleteProduct(productId){
        ProductServices.deleteBuyer(productId).then((res) => {
          this.setState({products: this.state.products.filter(product => product.id !== productId)});
        });
        console.log('product deleted');
      }

   
    
      render() {
        return (
          <div>
            <Container>
              <Card>
                <CardHeader>
                  Products' List
                </CardHeader>
              </Card>
              
            <Table hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Discreption</th>
                  <th>Staring Bid Amount</th>
                  <th>Last Date Of Biding</th>
                  <th>Category</th>
                  <th>Seller Name</th>
                  <th>Seller Phone Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.discreption}</td>
                    <td>{product.staringBidAmount}</td>
                    <td>{product.lastDateOfBiding}</td>
                    <td>{product.category}</td>
                    <td>{product.seller.name}</td>
                    <td>{product.seller.phoneNumber}</td>
                    { <td>
                      
                      <Button outline color="danger" onClick={() => this.deleteProduct(product.id)}>Delete</Button>
                      <Button outline color="info" className="ms-2"onClick={() => this.createBids(product.id)}>Create Bid</Button>
                    </td> }
                  </tr>
                ))}
              </tbody>
            </Table>
            </Container>
            
          </div>
        );
      }
}

export default ListOfProducts;