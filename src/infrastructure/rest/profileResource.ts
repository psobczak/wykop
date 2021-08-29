import axios from 'axios';
import { env } from "../config";
import { ILink } from '../entity/link/link';
import { IProfile } from "../entity/profile/profile";
import { PaginatedResponse } from './genericResponse';

export class ProfileResource {

    static getProfileByName(profileName: string): Promise<IProfile> {
        return axios.get(`${env.BASE_URL}/Profiles/Index/${profileName}/appkey/${env.KEY}`)
            .then(response => {
                const data = response.data; 
                return data.data;}
            ).catch(error => {
                throw new Error(error);
            });
    }

    static getLinksCommentedByProfile(profileName: string, pageNumber?: number): Promise<PaginatedResponse<ILink>> {
        const number = pageNumber || 1;
        return axios.get(`${env.BASE_URL}/Profiles/Commented/${profileName}/int/${number}/appkey/${env.KEY}`)
            .then(response => {
                const data = response.data; 
                return data;
            }
            ).catch(error => {
                throw new Error(error);
            });
    }
}