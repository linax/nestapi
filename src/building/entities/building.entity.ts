import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('edificacion') 
export class Building{
    @PrimaryGeneratedColumn()
    edi_id: number;

    @Column(({ nullable: true }) )
    edi_direccion: string;

    @Column(({ nullable: true }) )
    edi_email: string;

    @Column(({ nullable: true }) )
    edi_telefono: string;

    @Column()
    edi_publico: boolean;

   

}