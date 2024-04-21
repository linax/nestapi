import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('punto_evaluacion')
export class PuntoEvaluacion {
  @PrimaryGeneratedColumn()
  pev_id: number;

  @Column()
  pev_titulo: string;

  @Column()
  pev_tipo: string;

  /*@ManyToOne(() => Usuario, (usuario) => usuario.puntoEvaluacion)
  usuario: Usuario;

  @ManyToOne(() => TipoPuntoEvaluacion, (tipoPuntoEvaluacion) => tipoPuntoEvaluacion.puntoEvaluacion)
  tipoPuntoEvaluacion: TipoPuntoEvaluacion;*/

  @Column({ nullable: true })
  pev_latitud: number;

  @Column({ nullable: true })
  pev_longitud: number;


  @Column({ nullable: true })
  pev_votos_positivos: number;

  @Column({ nullable: true })
  pev_votos_negativos: number;

  @Column({ nullable: true })
  pev_evaluacion_ponderada: number;




  /*@ManyToOne(() => Comuna, (comuna) => comuna.puntoEvaluacion)
  comuna: Comuna;

  @OneToOne(() => Estacionamiento, (estacionamiento) => estacionamiento.puntoEvaluacion)
  estacionamiento: Estacionamiento;

  @OneToOne(() => Edificacion, (edificacion) => edificacion.puntoEvaluacion)
  edificacion: Edificacion;

  @OneToOne(() => EspacioPublico, (espacioPublico) => espacioPublico.puntoEvaluacion)
  espacioPublico: EspacioPublico;

  @OneToOne(() => VeredaCruce, (veredaCruce) => veredaCruce.puntoEvaluacion)
  veredaCruce: VeredaCruce;

  @OneToMany(() => EvaluacionUsuarioPuntoEvaluacion, (evaluacionUsuarioPuntoEvaluacion) => evaluacionUsuarioPuntoEvaluacion.puntoEvaluacion)
  evaluacionUsuarioPuntoEvaluacion: EvaluacionUsuarioPuntoEvaluacion[];

  @DeleteDateColumn()
  deletedAt?: Date;

  // Implement other methods from the original PHP class here (editable, subCategoria, etc.)
}*/
}
