import axios from 'axios';

const baseURL= axios.create({baseURL:"https://61c3bac1f1af4a0017d99090.mockapi.io/dictionaryData"})

export default class api{
  static getItems = async () =>{
      const {data} =  await baseURL.get();
      return data
  }

  static putItem = async (item) => {
   return await baseURL.put(`/${item.id}`,item)
  }

  static postItem = async (item) => {
      return await baseURL.post("/",item)
  }

  static deleteItem = async (id) => {
     return await baseURL.delete(id)
  }
}
