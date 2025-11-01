const DEFAULT_MONGO_PORT = 27017;

const DEFAULT_HOST = "mongo";

const MONGO_PORT = process.env.MONGO_PORT || DEFAULT_MONGO_PORT;

const MONGO_HOST = process.env.MONGO_HOST || DEFAULT_HOST;

export = process.env.MONGODB_URL || "mongodb://root:example@localhost:27017/books?authSource=admin";