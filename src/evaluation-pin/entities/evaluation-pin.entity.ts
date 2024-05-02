import { Building } from "src/building/entities/building.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('evaluation_pin')
export class EvaluationPin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  type: string;

  /*@ManyToOne(() => Usuario, (usuario) => usuario.puntoEvaluacion)
  usuario: Usuario;

  @ManyToOne(() => TipoPuntoEvaluacion, (tipoPuntoEvaluacion) => tipoPuntoEvaluacion.puntoEvaluacion)
  tipoPuntoEvaluacion: TipoPuntoEvaluacion;*/

  @Column({ nullable: true })
  latitude: number;

  @Column({ nullable: true })
  longitude: number;


  @Column({ nullable: true })
  votes_up: number;

  @Column({ nullable: true })
  votes_down: number;

  @Column({ nullable: true })
  weighted_evaluation: number;



}