'use strict';

import SocketIo from "socket.io";

import Server from "./server";

const io = SocketIo(process.env.PORT || 3000);

new Server(io);
