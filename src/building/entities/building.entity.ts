import { EvaluationPin } from "src/evaluation-pin/entities/evaluation-pin.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('building') 
export class Building{
    @PrimaryGeneratedColumn()
    id: number;

    @Column(({ nullable: true }) )
    address: string;

    @Column(({ nullable: true }) )
    email: string;

    @Column(({ nullable: true }) )
    telephone: string;

    @Column()
    public: boolean;


    @OneToOne(() => EvaluationPin)
    @JoinColumn()
    evaluationPin: EvaluationPin
   

}

