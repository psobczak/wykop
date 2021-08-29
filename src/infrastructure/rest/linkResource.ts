import axios from 'axios';
import { env } from "../../config";
import { ILink } from '../../entity/link/link';

export class LinkResource {

    static getLinkById(id: number): Promise<ILink> {
        return axios.get(`${env.BASE_URL}/Links/Link/${id}/appkey/${env.KEY}`)
            .then(response => {
                const data = response.data;
                return data.data;
            }).catch(error => {
                throw new Error(error);
            });
    }
}
