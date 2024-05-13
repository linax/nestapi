import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('evaluation_pin_type')
export class EvaluationPinType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
