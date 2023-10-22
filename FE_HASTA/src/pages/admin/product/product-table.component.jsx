import { useEffect } from 'react'
import { Button, Flex, Space, Table, message } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'


import { useNavigate } from 'react-router-dom'
import ConfirmationModal from '../confirmation/confirmation.component'
import useDeleteProduct from '../../../hooks/product/useDeleteProduct'



const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
const ProductTable = () => {
  const [messageApi, contextHolder] = message.useMessage()
  const [status, deleteProduct] = useDeleteProduct()
  const navigate = useNavigate()
  const onClick = () => {
    deleteProduct()
  }
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Delete product success',
    })
}

  const error = () => {
    messageApi.error({
        type: 'error',
        content: 'Failed to delete product'
    })
  }
  useEffect(() => {
    if (status === 'success') {
        success()
        setTimeout(() => {
            navigate('/product')
        },2000)
      
    } else if (status === 'error') {
        error()
        setTimeout(() => {
        },1000)
    }
}, [status])
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
          {contextHolder}
          <ConfirmationModal
            title="Delete the product"
            description="Are you sure to delete this product?"
            confirm={onClick}>
          
          Delete <DeleteOutlined />
          </ConfirmationModal>
          <Button>
          Edit <EditOutlined />
          </Button>
        </Space>
      ),
    },
  ]
  

  return (

    <Flex  style={{
      flexDirection: 'column',
      margin: 20,
      gap: 20

    }}>
      <Flex style={{
        justifyContent: 'flex-end',

      }}>
        <Button type='text' style={{
          borderColor: 'black',
          color: 'black'
        
        }}> + Add Product</Button>
      </Flex>
      <Flex>
              <Table columns={columns} dataSource={data} />
</Flex>

    </Flex>
  )
}

export default ProductTable