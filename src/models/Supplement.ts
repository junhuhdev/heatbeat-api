import mongoose from "mongoose";

const SupplementSchema = new mongoose.Schema({
    name: String,
    dose: String,
    manufacturer: String
});

const Supplement = mongoose.model("Supplement", SupplementSchema);
export default Supplement;
