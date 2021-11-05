import {
    BaseEntity,
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@Entity()
export default class Establishment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ nullable: false })
    name!: String

    // @Column({type: "text"})
    // address: Address;

    @CreateDateColumn({ type: "timestamp" })
    createdAt!: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updateAt!: Date;

    @DeleteDateColumn({ type: "timestamp"} )
    deletedAt!: Date;
}