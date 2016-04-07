var Config = {};

Config.socketio = {};
Config.socketio.HOST = process.env.SOCKETIO_HOST || 'localhost';
Config.socketio.PORT = process.env.SOCKETIO_PORT || process.env.PORT || 3000;
Config.socketio.url = () => { return 'http://' + Config.socketio.HOST + ':' + Config.socketio.PORT }

export default Config;
