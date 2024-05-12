import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    userdId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId], // an array of product ids
      of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;
