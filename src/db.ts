import mongoose from 'mongoose';

const uri: string = process.env.MONGO_URI!;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'speedtest' }, (err: any) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('successfully connected to db');
  }
});

export { mongoose };
