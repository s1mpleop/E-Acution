import React, { Component } from 'react';
import {
    Card,
    CardBody,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    CardHeader,
    Button,
    Row,
    Col,
  } from "reactstrap";
  import BidsService from '../Services/BidsService';

class CreateBids extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            id: this.props.match.params.id,
            uniqueBuyerId:'',
            bidingAmount:''
    
        };
    
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeProductDiscreptionHandler = this.changeProductDiscreptionHandler.bind(this);
        this.changeStaringBidAmountHandler = this.changeStaringBidAmountHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
      }
    
      saveProduct = (e) => {
        e.preventDefault();
        let bid = {bidAmount : this.state.bidingAmount};
        console.log('bid =>' + JSON.stringify(bid));
    
        // SellerService.createSeller(seller).then(res =>{
        //     this.props.history.push('/sellers');
        // });
        // ProductServices.creaetProducts(product, this.state.id).then(res => {
        //     this.props.history.push('/sellers');
        // });
        BidsService.createBids(bid, this.state.uniqueBuyerId, this.state.id).then(res =>{
            this.props.history.push('/products');
        });
      }
    
      cancel(){
        this.props.history.push('/products');
      }
    
      changeNameHandler = (event) =>{
        this.setState({bidingAmount: event.target.value});
        // console.log(event.target.value);
      }
    
      changeProductDiscreptionHandler = (event) =>{
        this.setState({uniqueBuyerId: event.target.value});
        // console.log(event.target.value);
      }
    
      changeStaringBidAmountHandler = (event) =>{
        this.setState({staringBidAmount: event.target.value});
        // console.log(event.target.value);
      }
    
      changeCategoryHandler = (event) =>{
        this.setState({category: event.target.value});
        // console.log(event.target.value);
      }
    
      render() {
        return (
          <Container>
            <Row className="mt-4">
              <Col sm={{ size: 6, offset: 3 }}>
                <Card color="dark" inverse>
                  <CardHeader>
                    <h3>Fill Biding Details</h3>
                  </CardHeader>
    
                  <CardBody>
                    <Form>
                    <FormGroup>
                        <Label for="Unique Buyer Id">Enter Unique Buyer Id</Label>
                        <Input type="text" placeholder="Unique Buyer Id" value={this.state.uniqueBuyerId} onChange={this.changeProductDiscreptionHandler}></Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="Biding Amount">Enter Biding Amount</Label>
                        <Input type="text" placeholder="Biding Amount" value={this.state.bidingAmount} onChange={this.changeNameHandler}/>
                      </FormGroup>
                      <Container className="text-center">
                        <Button outline color="light" onClick={this.saveProduct.bind(this)}>
                          Register
                        </Button>
                        <Button color="secondary" onClick={this.cancel.bind(this)} className="ms-2">
                          Cancel
                        </Button>
                      </Container>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      }
}

export default CreateBids;