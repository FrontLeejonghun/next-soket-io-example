import { useRef, useState } from 'react';
import axios from 'axios';
import { NextPage } from 'next';
import { io } from 'socket.io-client';
import { SampleButton } from 'components';

const Home: NextPage = () => {
  const [notification, setNotification] = useState<any>([]);
  const [id, setID] = useState<string | null>('');
  const connect = useRef<boolean>(false);

  const callAPI = () => {
    const interval = setInterval(() => {
      axios.post('/api/notification/onNotification', {
        message: `notification-test-${Math.floor(Math.random() * 10)}`,
        id,
      });

      if (!connect.current) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const connectIO = () => {
    const socket = io('http://localhost:3000', {
      path: '/api/notification/socket',
    });

    socket.on('connect', () => {
      setID(socket.id);
      connect.current = true;
    });

    socket.on('message', ({ message }: Record<string, string>) => {
      if (message.includes('7')) {
        socket.disconnect();
        connect.current = false;
        setID(null);

        alert('disconnect');
        return;
      }

      setNotification((prev: string[]) => [...prev, message]);
    });
  };

  return (
    <>
      <div>next Start kit</div>
      <SampleButton label="api콜" onClick={callAPI} />
      <SampleButton label="커넥트" onClick={connectIO} />
      <div> connect : {connect.current.toString()}</div>
      <div> socket ID : {id}</div>
      {notification.length > 0 &&
        notification.map((v: string, index: number) => {
          return <div key={index}>{v}</div>;
        })}
    </>
  );
};

export default Home;
