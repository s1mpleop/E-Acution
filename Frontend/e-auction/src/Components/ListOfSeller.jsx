import React, { Component } from "react";
import { Table, Button, Container, Card, CardHeader } from "reactstrap";
import SellerService from "../Services/SellerService";

class ListOfSeller extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sellers: [],
    }

    this.addSeller = this.addSeller.bind(this);
    this.delelteSeller = this.delelteSeller.bind(this);
    this.updateSeller = this.updateSeller.bind(this);
  }

  componentDidMount() {
    SellerService.getAllSeller().then((res) => {
      this.setState({ sellers: res.data });
    });
  }

  addSeller(){
    this.props.history.push('/add-seller');
  }

  updateSeller(sellerId){
    this.props.history.push(`/update-seller/${sellerId}`);
  }

  delelteSeller(sellerId){
    SellerService.deleteSeller(sellerId).then((res) => {
      this.setState({sellers: this.state.sellers.filter(seller => seller.id !== sellerId)});
    });
  }

  createProducts(sellerId){
    this.props.history.push(`/seller/add-product/${sellerId}`);
  }

  render() {
    return (
      <div>
        <Container>
          <Card>
            <CardHeader>
              Seller's List
            </CardHeader>
          </Card>
          <Button active size="sm" onClick={this.addSeller}>
          Add Seller
        </Button>
        <Table hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sellers.map((seller) => (
              <tr key={seller.id}>
                <td>{seller.id}</td>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.address}</td>
                <td>{seller.phoneNumber}</td>
                <td>
                  
                  <Button outline color="success" onClick={() => this.updateSeller(seller.id)}>Update</Button>
                  <Button outline color="danger" className="ms-2"onClick={() => this.delelteSeller(seller.id)}>Delete</Button>
                  <Button outline color="info" className="ms-2"onClick={() => this.createProducts(seller.id)}>Add Product</Button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Container>
        
      </div>
    );
  }
}

export default ListOfSeller;
