import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	image: {
		
	}
})