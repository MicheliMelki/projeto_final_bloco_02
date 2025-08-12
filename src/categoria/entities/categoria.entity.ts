import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 50, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string

    @UpdateDateColumn()
    data: Date
}