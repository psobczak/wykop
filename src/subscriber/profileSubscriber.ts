import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { Profile } from "../entity/profile/profile";

@EventSubscriber()
export class ProfileSubscriber implements EntitySubscriberInterface<Profile> {
    
    afterInsert(event: InsertEvent<Profile>) {
        console.log(`Just inserted entity ${event.entity} with id ${event.entity.id}`);
    }
}