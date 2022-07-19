import axios from "axios";

class productServices{

    getAllProducts(){
        return axios.get('http://localhost:9090/api/products/');
    }

    creaetProducts(product, sellerId){
        return axios.post('http://localhost:9090/api/seller/' + sellerId +'/products', product);
    }

    deleteBuyer(buyerId){
        return axios.delete('http://localhost:9090/api/product/' + buyerId);
    }
}

export default new productServices();