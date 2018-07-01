const { Schema, mongoose } = require('./db');

const LoadCounterSchema = Schema({
  count: Number,
});

const LoadCounter = mongoose.model('LoadCounter', LoadCounterSchema);

module.exports = LoadCounter;
