import { message } from 'antd';
// import React from 'react';

const Message = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = (content: string) => {
    messageApi.open({
      type: 'success',
      content: content,
    });
  };

  const error = (content: string) => {
    messageApi.open({
      type: 'error',
      content: content,
    });
  };

  const warning = (content: string) => {
    messageApi.open({
      type: 'warning',
      content: content
    });
  };

  return { contextHolder, success, error, warning };
};

export default Message;
