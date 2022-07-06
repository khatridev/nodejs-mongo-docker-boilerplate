module.exports = {
  db: {
    test: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.louydui.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  },
};
