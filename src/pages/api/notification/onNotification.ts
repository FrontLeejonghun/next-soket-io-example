import { NextApiRequest } from 'next';
import { NextApiResponseServerIO } from 'common/types';

const onNotification = async (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === 'POST') {
    const { message, id } = req.body;

    res.socket.server.io.to(id).emit('message', { message });

    res.status(201).json({ message });
  }
};

export default onNotification;
