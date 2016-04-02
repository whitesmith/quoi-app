var Config = {};

Config.socketio = {};
Config.socketio.PORT = process.env.SOCKETIO_PORT || process.env.PORT || 3000;

export default Config;
