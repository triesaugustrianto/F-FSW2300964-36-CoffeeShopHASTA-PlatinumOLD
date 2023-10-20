import { useState } from "react";

const useAddProduct = () => {
    const [status, setStatus] = useState('');
  
    const addProduct = async (productData) => {
      try {
        // Assuming you have some API function to add a product
        // const response = await api.addProduct(productData);
          const response = {
              status: 200
          }
        if (response.status === 200) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error adding product:', error);
        setStatus('error');
      }
    };
  
    return [status, addProduct];
};
  
export default useAddProduct