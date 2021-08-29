import { createConnection, getRepository } from "typeorm";
import { Link } from "./entity/link/link";
import { LinkResource } from "./infrastructure/rest/linkResource";

createConnection().then(async connection => {

    
    // let users = [
    //     'skitarii',
    // ];

    // const promises = users.map(profile => {
    //     return ProfileResource.getProfileByName(profile);
    // });

    // const profiles = await Promise.all(promises).then(profiles => profiles);

    // const links = await ProfileResource.getLinksCommentedByProfile('pranko_csv');

    const linksRepository = getRepository(Link);

    // linksRepository.save(links.data);

    // const profileRepository = getRepository(Profile);
    // profileRepository.save(profiles);


    const link = await LinkResource.getLinkById(6250817);
    linksRepository.save(link);
    console.log(link);



}).catch(error => console.log(error));
