import mongoose from "mongoose";
import { MedicationsCollection } from "./Collections";

const MedicationSchema = new mongoose.Schema({
    name: String,
    dose: String,
    manufacturer: String
});

const Medication = mongoose.model(MedicationsCollection, MedicationSchema);
export default Medication;
