import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Job from './models/Job.js';

dotenv.config();

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('MONGO_URI is not set');
  process.exit(1);
}

await mongoose.connect(uri);
const sampleJobs = [
  { title: 'Frontend Developer', company: 'Acme Corp', status: 'applied', location: 'Remote' },
  { title: 'Backend Engineer', company: 'Globex', status: 'interview', location: 'New York, NY' },
  { title: 'Product Manager', company: 'Initech', status: 'offer', location: 'Austin, TX' }
];

await Job.insertMany(sampleJobs);
console.log('Inserted sample jobs:', sampleJobs.length);
await mongoose.disconnect();
