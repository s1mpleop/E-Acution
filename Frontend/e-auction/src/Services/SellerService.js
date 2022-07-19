import axios from 'axios';

const SELLER_API_BASE_URL = "http://localhost:9090/api/seller/"
class sellerService{

    getAllSeller(){
        return axios.get(SELLER_API_BASE_URL);
    }

    createSeller(seller){
        return axios.post('http://localhost:9090/api/seller/addSeller/', seller );
    }

    getSeller(sellerId){
        return axios.get('http://localhost:9090/api/seller/' + sellerId);
    }

    updateSeller(seller, sellerId){
        return axios.put('http://localhost:9090/api/seller/' + sellerId, seller);
    }

    deleteSeller(sellerId){
        return axios.delete('http://localhost:9090/api/seller/' + sellerId);
    }

}

export default new sellerService();