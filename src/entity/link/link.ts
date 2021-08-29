import { BeforeInsert, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Profile } from "../profile/profile";

@Entity()
export class Link {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column({
        charset: 'utf8mb'
    })
    description: string;

    @Column({
        default: ''
    })
    tags: string;

    @Column({
        default: ''
    })
    source_url: string;

    @Column({
        default: 0
    })
    vote_count: number;

    @Column({
        default: 0
    })
    bury_count: number;

    @Column({
        default: 0
    })
    comments_count: number;

    @Column({
        default: 0
    })
    related_count: number;

    @Column()
    date: Date;

    @ManyToOne(() => Profile, profile => profile.links)
    profile: Profile;

    @Column({
        default: ''
    })
    preview: string;

    @Column()
    plus18: boolean;

    @Column()
    status: string;

    @Column()
    can_vote: boolean;

    @Column()
    is_hot: boolean;

    @BeforeInsert()
    fixQuotes() {
        this.title.replace('&quot;', '');
        console.log(this.title);
    }
}

export interface Author {
    login: string;
    color: number;
    sex: string;
    avatar: string;
}

export interface Info {
    type: string;
    message: string;
}

export interface ILink {
    id: number;
    title: string;
    description: string;
    tags: string;
    source_url: string;
    vote_count: number;
    bury_count: number;
    comments_count: number;
    related_count: number;
    date: string;
    author: Author;
    preview: string;
    plus18: boolean;
    status: string;
    can_vote: boolean;
    is_hot: boolean;
    info?: Info;
}

