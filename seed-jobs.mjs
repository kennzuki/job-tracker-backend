import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Job from './models/JobModel.js';

dotenv.config();

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('MONGO_URI is not set');
  process.exit(1);
}

await mongoose.connect(uri);
const sampleJobs = [
  { title: 'Frontend Developer', company: 'Acme Corp', status: 'applied', location: 'Remote', user: '64f1a2b3c4d5e6f7a8b9c0d1' },
  { title: 'Backend Engineer', company: 'Globex', status: 'interview', location: 'New York, NY', user: '64f1a2b3c4d5e6f7a8b9c0d1' },
  { title: 'Product Manager', company: 'Initech', status: 'offer', location: 'Austin, TX', user: '64f1a2b3c4d5e6f7a8b9c0d1' }
];

await Job.insertMany(sampleJobs);
console.log('Inserted sample jobs:', sampleJobs.length);
await mongoose.disconnect();
