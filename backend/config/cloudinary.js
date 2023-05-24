import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({ 
  cloud_name: 'saewf', 
  api_key: '117255964481188', 
  api_secret: '4WipRg5RpjL3K6YFaT-JvZXrAl0' 
});

export default cloudinary;
