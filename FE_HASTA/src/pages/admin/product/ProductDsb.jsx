import React from "react";
import ProductTable from "../../../components/product/product-table.component";
import { Button, Flex } from "antd";
import { useNavigate } from "react-router";

export const ProductDsb = () => {
  const navigate = useNavigate()
  const handleClick = () => {
  navigate('/add-product')
  }
  return (
      <>
          <Flex style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              border: "20px",
              gap: 10
          }}>
              <Flex style={{
                  width: 160,
                  justifyContent: 'flex-end',
                  marginLeft: 322
              }}>
              <Button type="primary" onClick={handleClick}>
                  + Add Product
          </Button>
              </Flex>
              <Flex>
                   <ProductTable/> 
              </Flex>
          </Flex>
         
      </>
     
      
  )
};
