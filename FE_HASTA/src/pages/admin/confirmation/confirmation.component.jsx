import React from 'react';
import { Button, Popconfirm } from 'antd';

const ConfirmationModal = ({ title, description, confirm, cancel }) => {
    // const { title } = title 
    return (
  
        <Popconfirm
        title={title}
        description={description}
        onConfirm={confirm}
        // onCancel={cancel}
      >
        <Button danger>Delete</Button>
      </Popconfirm>
    );
}
export default ConfirmationModal;