import mongoose from "mongoose";

const overallStatSchema = new mongoose.Schema(
  {
    totalCustomers: Number,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
      {
        month: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    dailyData: [
      {
        date: String,
        totalSales: Number,
        totalUnits: Number,
      },
    ],
    salesByCategory: {
      type: Map,
      of: Number,
    },
  },
  { timestamps: true }
);

// Option 1: Update model definition with lowercase name
const OverallStat = mongoose.model("overallStat", overallStatSchema); // Use lowercase name here

// Option 2 (if Option 1 doesn't work): Clear caches or recreate the model

export default OverallStat;
