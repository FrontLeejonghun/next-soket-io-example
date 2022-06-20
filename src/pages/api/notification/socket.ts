import { Server as NetServer } from 'http';
import { NextApiRequest } from 'next';
import { Server } from 'socket.io';
import { NextApiResponseServerIO } from 'common/types';

export const config = {
  api: {
    bodyParser: false,
  },
};

const socket = (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (!res.socket.server.io) {
    const httpServer: NetServer = res.socket.server as any;

    res.socket.server.io = new Server(httpServer, {
      path: '/api/notification/socket',
    });
  }

  res.end();
};

export default socket;
