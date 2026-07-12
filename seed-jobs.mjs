import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Job from './models/JobModel.js';
import User from './models/userModel.js';

dotenv.config();

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('MONGO_URI is not set');
  process.exit(1);
}

await mongoose.connect(uri);

const sampleUsers = [
  {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    password: await bcrypt.hash('password123', 10),
    isAdmin: false,
  },
  {
    name: 'Bob Smith',
    email: 'bob@example.com',
    password: await bcrypt.hash('password123', 10),
    isAdmin: false,
  },
];

const createdUsers = await User.insertMany(sampleUsers);

const sampleJobs = [
  { title: 'Frontend Developer', company: 'Acme Corp', status: 'applied', location: 'Remote', user: createdUsers[0]._id },
  { title: 'Backend Engineer', company: 'Globex', status: 'interview', location: 'New York, NY', user: createdUsers[0]._id },
  { title: 'Product Manager', company: 'Initech', status: 'offer', location: 'Austin, TX', user: createdUsers[1]._id },
  { title: 'DevOps Engineer', company: 'Northwind', status: 'review', location: 'Chicago, IL', user: createdUsers[1]._id },
  { title: 'QA Engineer', company: 'Fabrikam', status: 'open', location: 'Denver, CO', user: createdUsers[0]._id },
];

await Job.insertMany(sampleJobs);
console.log('Inserted sample users:', createdUsers.length);
console.log('Inserted sample jobs:', sampleJobs.length);
await mongoose.disconnect();
