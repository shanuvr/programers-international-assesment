import mongoose, { Document } from "mongoose";

export interface IEnquiry extends Document {
  fullName: string;
  quantity: number;
  mobile: string;
  address: string;
  demoRequest: boolean;
  productId: mongoose.Types.ObjectId;
}

const enquirySchema = new mongoose.Schema<IEnquiry>(
  {
    fullName: {
      type: String,
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    demoRequest: {
      type: Boolean,
      default: false,
    },

    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Enquiry = mongoose.model<IEnquiry>(
  "Enquiry",
  enquirySchema
);

export default Enquiry;