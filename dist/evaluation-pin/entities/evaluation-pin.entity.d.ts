import { EvaluationPinType } from "./type.entity";
export declare class EvaluationPin {
    id: number;
    title: string;
    latitude: number;
    longitude: number;
    votes_up: number;
    votes_down: number;
    weighted_evaluation: number;
    evaluationPinType: EvaluationPinType;
}
