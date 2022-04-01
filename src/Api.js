import axios from "axios";

const api= axios.create({
    baseURL:"https://api.thecatapi.com/v1"
})
export default class Api{
static async getCatsCategories(){
    return await api.get("/categories")
}
}