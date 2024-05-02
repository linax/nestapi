import { EvaluationPin } from "src/evaluation-pin/entities/evaluation-pin.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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


   /* @DeleteDateColumn()
    deletedAt?: Date;

    OneToOne(() => EvaluationPin)
    @JoinColumn()
    evp: EvaluationPin
   */

}

