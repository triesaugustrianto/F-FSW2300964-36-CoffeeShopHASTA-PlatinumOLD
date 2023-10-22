import { useState } from 'react'
import { Button, Flex, Popconfirm, Space, Table, message } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import axios from 'axios'
import useSWR, { mutate } from 'swr'
import { useNavigate } from 'react-router'


const ProductTable = () => {
  const [product, setProduct] = useState([])
  const apiGetUrl = 'http://localhost:2000/api/products';
  const navigate = useNavigate()
  const { data: products } = useSWR(apiGetUrl, async (url) => {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);
    setProduct(products.query)
    
  });
  
  const confirm = (id) => {
    const apiDeleteUrl = `http://localhost:2000/api/products/${id}`
    axios
    .delete(apiDeleteUrl)
    .then((response) => {
      if (response.status === 201) {
        setTimeout(() => {
          message.success('Delete product successfully');
          mutate(apiGetUrl)
        }, 1000)
        
       
      } else {
        message.error('Failed to delete product');
      }
    })
      .catch((error) => {
      message.error('Internal server error')
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Stock',
      key: 'stock',
      dataIndex: 'stock',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => (

        <Space size="middle">
    <Popconfirm
            title="Delete the product"
            id={record.id}
            description="Are you sure to delete this product?"
    onConfirm={() => confirm(record.id)}
    okText="Yes"
            cancelText="No"
            okType='default'
  >
    <Button danger>Delete 
    <DeleteOutlined /></Button>
    </Popconfirm>
          <Button
            id={record.id}
            onClick={() => navigate(`edit/${record.id}`)}>
            Edit <EditOutlined />
          </Button>
        </Space>
      ),
    },
  ]
  

  return (

    <Flex style={{
      flexDirection: 'column',
      margin: 20,
      gap: 20
    }}>
      <Flex style={{
        justifyContent: 'flex-end'
      }}>
        <Button onClick={() => navigate('create')}>
         + Add Product
        </Button>
      </Flex>
      <Flex>
      <Table columns={columns} dataSource={product} />
      </Flex>
      
    </Flex>
  )
}

export default ProductTable