import mongoose from "mongoose";

const UserAssessmentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    assessment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Assessment",
        required: true
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // could be SuperAdmin, Mentor, or Admin
        required: true
    },
    assignedDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["assigned", "in-progress", "completed", "suspended", "expired"],
        default: "assigned"
    },
    score: {
        type: Number,
        default: 0
    },
    attemptCount: {
        type: Number,
        default: 0
    },
    lastAttempt: {
        type: Date
    },
    report: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AssessmentReport" // link to detailed report
    }
}, { timestamps: true });

export default mongoose.models.UserAssessment || mongoose.model("UserAssessment", UserAssessmentSchema);
