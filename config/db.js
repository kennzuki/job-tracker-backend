import mongoose from "mongoose";

const connectDB = async () => {
	const uri = process.env.MONGO_URI;
	if (!uri) {
		console.error("MONGO_URI is not set in environment");
		return;
	}
	try {
		await mongoose.connect(uri, {
			// mongoose v7+ uses sensible defaults; options left for compatibility
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected");
	} catch (err) {
		console.error("MongoDB connection error:", err);
		process.exit(1);
	}
};

export default connectDB;
