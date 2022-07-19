import axios from 'axios';

const SELLER_API_BASE_URL = "http://localhost:9090/api/buyer/"
class buyerService{

    getAllBuyer(){
        return axios.get(SELLER_API_BASE_URL);
    }

    createBuyer(buyer){
        return axios.post('http://localhost:9090/api/buyer/addBuyer/', buyer );
    }

    getBuyer(buyerId){
        return axios.get('http://localhost:9090/api/buyer/' + buyerId);
    }

    updateBuyer(buyer, buyerId){
        return axios.put('http://localhost:9090/api/buyer/' + buyerId, buyer);
    }

    deleteBuyer(buyerId){
        return axios.delete('http://localhost:9090/api/buyer/' + buyerId);
    }

}

export default new buyerService();