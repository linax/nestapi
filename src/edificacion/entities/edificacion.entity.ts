import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('edificacion') 
export class Edificacion{
    @PrimaryGeneratedColumn()
    edi_id: number;

    @Column()
    edi_direccion: string;

    @Column()
    edi_email: string;

    @Column()
    edi_telefono: string;

}