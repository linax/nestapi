import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EvaluationPinType } from "./type.entity";

@Entity('evaluation_pin')
export class EvaluationPin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;


  @Column({ type: 'decimal', precision: 10, scale: 8 })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 8 })
  longitude: number;


  @Column({ nullable: true })
  votes_up: number;

  @Column({ nullable: true })
  votes_down: number;

  @Column({ nullable: true })
  weighted_evaluation: number;


  @OneToOne(() => EvaluationPinType)
  @JoinColumn()
  evaluationPinType: EvaluationPinType;
}