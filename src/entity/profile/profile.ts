import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Link } from "../link/link";

@Entity()
export class Profile {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    login: string

    @Column()
    color: number

    @Column()
    avatar: string

    @Column()
    signup_at: Date

    @Column()
    is_observed: boolean;

    @Column()
    is_blocked: boolean;

    @Column({
        default: ''
    })
    about: string;

    @Column({
        default: 0
    })
    links_added_count: number;

    @Column({
        default: 0
    })
    links_published_count: number;

    @Column({
        default: 0
    })
    comments_count: number;

    @Column()
    rank: number;

    @Column({
        default: 0
    })
    followers: number;

    @Column({
        default: 0
    })
    following: number;

    @Column({
        default: 0
    })
    entries: number;

    @Column({
        default: 0
    })
    entries_comments: number;

    @Column({
        default: 0
    })
    diggs: number;

    @OneToMany(() => Link, link => link.id)
    links: Link[]

    @BeforeInsert()
    convertAboutToUTF() {
        this.about = Buffer.from(this.about, 'utf-8').toString();
    }

}

export interface IProfile {
    login: string;
    color: number;
    avatar: string;
    signup_at: Date;
    is_observed: boolean;
    is_blocked: boolean;
    about: string;
    links_added_count: number;
    links_published_count: number;
    comments_count: number;
    rank: number;
    followers: number;
    following: number;
    entries: number;
    entries_comments: number;
    diggs: number;
}