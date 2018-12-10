import mongoose from "mongoose";

const MedicationSchema = new mongoose.Schema({
    name: String,
    dose: String,
    manufacturer: String
});

const Medication = mongoose.model("Medication", MedicationSchema);
export default Medication;
