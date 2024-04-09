import { message } from 'antd';

const useMessage = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'This is a prompt message for success, and it will disappear in 10 seconds',
            duration: 10,
        });
    };

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is a prompt message for error, and it will disappear in 10 seconds',
            duration: 10,
        });
    };

    const info = () => {
        messageApi.open({
            type: 'info',
            content: 'This is a prompt message for info, and it will disappear in 10 seconds',
            duration: 10,
        });
    };

    // Xuất các hàm để hiển thị các loại tin nhắn
    return { success, error, info };
};

export default useMessage;
