import { useState } from "react"

const useDeleteProduct = () => {
    const [status, setStatus] = useState('')

    const deleteProduct = async () => {
        try {
            const response = {
                status: 400
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
    }
    return [status, deleteProduct]
}
export default useDeleteProduct