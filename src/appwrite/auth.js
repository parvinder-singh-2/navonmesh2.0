import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            await this.account.create(ID.unique(), email, password, name); 
            if (useraccount) {
                //Call Another Method(Login)
            } else {
                return useraccount;
            }
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService

