const DEFAULT_PORT = 3000;

const DEFAULT_HOST = "127.0.0.1";

const HOST = process.env.HOST || DEFAULT_HOST;

export = process.env.PORT || DEFAULT_PORT;