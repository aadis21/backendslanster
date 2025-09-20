import mongoose from 'mongoose';

const ProctoringOptionSchema = new mongoose.Schema({
    inUse: { type: Boolean, default: false },
    maxViolations: { type: Number, default: 100 },
});

const AssessmentSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    assessment_id: { type: Number },
    assessmentName: { type: String },
    assessmentDesc: { type: String },
    maxMarks: { type: Number },
    shuffleQuestions: { type: Boolean, default: false },
    negativeMarking: { type: Boolean, default: false },
    passingPercentage: { type: Number, default: 0 },
    timelimit: { type: Number, default: 60 },
    isProtected: { type: Boolean, default: false },
    isVisible: { type: Boolean, default: true },
    ProctoringFor: {
        mic: ProctoringOptionSchema,
        invisiblecam: ProctoringOptionSchema,
        webcam: ProctoringOptionSchema,
        TabSwitch: ProctoringOptionSchema,
        multiplePersonInFrame: ProctoringOptionSchema,
        PhoneinFrame: ProctoringOptionSchema,
        ControlKeyPressed: ProctoringOptionSchema,
    },
    Assessmentmodules: [
        {
            module: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "AssessmentModule",
            }
        }
    ],
}, { timestamps: true });

export default mongoose.models.Assessment || mongoose.model('Assessment', AssessmentSchema);
