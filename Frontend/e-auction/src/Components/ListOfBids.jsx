import React, { Component } from 'react';
import { Table, Button, Container, Card, CardHeader } from "reactstrap";
import BidsService from '../Services/BidsService';
class ListOfBids extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          bids: [],
        }
    
        // this.addProducts = this.addProducts.bind(this);
        // this.delelteBuyer = this.delelteBuyer.bind(this);
        // this.updateSeller = this.updateSeller.bind(this);
      }
    
      componentDidMount() {
       
        BidsService.getAllBids().then((res) => {
            this.setState({bids: res.data})
        })
      }
    
    //   delelteBuyer(sellerId){
    //     SellerService.deleteSeller(sellerId).then((res) => {
    //       this.setState({sellers: this.state.sellers.filter(seller => seller.id !== sellerId)});
    //     });
    //   }
    
      render() {
        return (
          <div>
            <Container>
              <Card>
                <CardHeader>
                  Bids' List
                </CardHeader>
              </Card>
            <Table hover size="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Seller Name</th>
                  <th>Staring Bid Amount</th>
                  <th>Date Of Biding</th>
                  <th>Buyer Name</th>
                  <th>Buyer Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.bids.map((bid) => (
                  <tr key={bid.id}>
                    <td>{bid.id}</td>
                    <td>{bid.product.name}</td>
                    <td>{bid.product.seller.name}</td>
                    <td>{bid.bidAmount}</td>
                    <td>{bid.biddingDate}</td>
                    <td>{bid.buyer.name}</td>
                    <td>{bid.buyer.phoneNumber}</td>
                    { <td>
                      
                      <Button outline color="danger" className="ms-2"onClick={() => this.delelteBuyer(bid.id)}>Delete</Button>
                      
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

export default ListOfBids;