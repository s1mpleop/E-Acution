import axios from "axios";

class bidServices{

    getAllBids(){
        return axios.get('http://localhost:9090/api/bids/');
    }

    // creaetBids(bid, sellerId){
    //     return axios.post('http://localhost:9090/api/seller/' + sellerId +'/bids', bid);
    // }

    deletebids(bidId){
        return axios.delete('http://localhost:9090/api/bids/{bidId}', bidId);
    }

    createBids(bid, buyerId, productId){
        console.log(productId);
        return axios.post('http://localhost:9090/api/buyer/' + buyerId +'/product/'+ productId + '/bids', bid);
    }
}

export default new bidServices();