import React, { Component } from "react";
import { Table, Button, Container, Card, CardHeader } from "reactstrap";
import BuyerServices from "../Services/BuyerServices";


class ListOfBuyers extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          buyers: [],
        }
    
        this.addBuyer = this.addBuyer.bind(this);
        this.deleteBuyer = this.deleteBuyer.bind(this);
        this.updateBuyer = this.updateBuyer.bind(this);
      }
    
      componentDidMount() {
        BuyerServices.getAllBuyer().then((res) => {
          this.setState({ buyers: res.data });
        });
      }
    
      addBuyer(){
        this.props.history.push('/add-buyer');
      }
    
      updateBuyer(buyerId){
        this.props.history.push(`/update-buyer/${buyerId}`);
      }
    
      deleteBuyer(buyerId){
        BuyerServices.deleteBuyer(buyerId).then((res) => {
          this.setState({buyers: this.state.buyers.filter(buyer => buyer.id !== buyerId)});
        });
      }
    
      createProducts(sellerId){
        // this.props.history.push(`/seller/add-product/${sellerId}`);
        console.log('hi');
      }
    
      render() {
        return (
          <div>
            <Container>
              <Card>
                <CardHeader>
                  Buyer's List
                </CardHeader>
              </Card>
              <Button active size="sm" onClick={this.addBuyer}>
              Add Buyer
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
                {this.state.buyers.map((buyer) => (
                  <tr key={buyer.id}>
                    <td>{buyer.id}</td>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td>{buyer.address}</td>
                    <td>{buyer.phoneNumber}</td>
                    <td>
                      
                      <Button outline color="success" onClick={() => this.updateBuyer(buyer.id)}>Update</Button>
                      <Button outline color="danger" className="ms-2"onClick={() => this.deleteBuyer(buyer.id)}>Delete</Button>
                      <Button outline color="info" className="ms-2"onClick={() => this.createProducts(buyer.id)}>Add Bid</Button>
                      
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

export default ListOfBuyers;