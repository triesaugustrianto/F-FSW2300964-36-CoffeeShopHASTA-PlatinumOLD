import { Button, Flex, Form, Input, Select, Space, Typography, message } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import DropZone from '../upload/upload.component';
import useAddProduct from '../../hooks/product/useAddProduct';
const { Title } = Typography
const { Option } = Select;

const AddProductForm = () => {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    const [status, addProduct] = useAddProduct()
    const onFinish = (values) => {
        addProduct(values)
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
    }, [status]);
    
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'Add product success',
        });
    };
    const error = () => {
        messageApi.error({
            type: 'error',
            content: 'Failed to add product'
        })
    }
    
    return (
        
        <Flex style={{
            flexDirection: 'column',
            marginLeft: 30,
        }}>
            {contextHolder}
            <Flex style={{
                marginLeft: 100
            }}>
            <Title level={3}>Tambahkan produk baru</Title>
            </Flex>
            
            <Form
        name="complex-form"
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
            >           
        <Form.Item label="Product Name">
          <Space>
            <Form.Item
              name="name"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Product Name is required',
                },
              ]}
            >
              <Input
                style={{
                  width: 160,
                }}
                placeholder="Please input"
              />
            </Form.Item>
          </Space>
            </Form.Item>
            <Form.Item label="Stock">
          <Space>
            <Form.Item
              name="stock"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Stock is required',
                },
              ]}
            >
              <Input
                style={{
                  width: 160,
                }}
                placeholder="Please input number"
              />
            </Form.Item>
          </Space>
            </Form.Item>
            <Form.Item label="Price">
          <Space>
            <Form.Item
              name="price"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Price is required',
                },
              ]}
            >
              <Input
                style={{
                  width: 160,
                }}
                placeholder="Please input"
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item label="Category">
            <Form.Item
              name={['address', 'category']}
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Category is required',
                },
              ]}
            >
                    <Select style={{
                  width: 160
              }} placeholder="Select category">
                <Option value="Tea">Tea</Option>
                            <Option value="Coffee">Coffee</Option>
                            <Option value="Blended">Blended</Option>
                            <Option value="Others">Others</Option>
              </Select>
            </Form.Item>
                </Form.Item>
                <Form.Item label="Description">
                    <Space>
                        <Form.Item noStyle
                            name="description"
                            rules={[
                            {
                            required: true,
                            message: 'Description is required',
                            }
                        ]}>
                        <TextArea  placeholder="Please input" autoSize />
                        </Form.Item>
                    </Space>
                </Form.Item>
            <Form.Item label="Image">
                    <DropZone>
                    </DropZone>
                </Form.Item>
            <Form.Item label=" " colon={false}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form> 
        </Flex>
       
        )
}


 
            ;
            
export default AddProductForm;