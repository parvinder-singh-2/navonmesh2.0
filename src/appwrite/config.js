import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId) 

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createComplaint({title, description, location, featuredImage, status, slug, userId, catagoery}) {
        try {
            const result = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteRoadComplaintsId,
                slug, {
                title,
                description,
                location,
                featuredImage,
                status,
                userId,
                catagoery
            });
            return result;
        } catch (error) {
            console.log("Appwrite service :: Create Road Complaint :: error", error);
            ;
        }
        
    }

    async updateComplaint(slug, {title, description, location, featuredImage, status, catagoery}) {
        try {
            const result = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteRoadComplaintsId,
                slug, {
                title,
                description,
                location,
                featuredImage,
                status,
                catagoery
            });
            return result;
        } catch (error) {
            console.log("Appwrite service :: Update Road Complaint :: error", error);
        }
    }

    async deleteComplaint(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteRoadComplaintsId,
                slug);
            return true;
        } catch (error) {
            console.log("Appwrite service :: Delete Road Complaint :: error", error);
            return false;
        }
    }

    async getComplaints(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteRoadComplaintsId),
                slug;
        } catch (error) {
            console.log("Appwrite service :: Get Road Complaints :: error", error);
            return false;
        }
    }

    async getComplaints(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteRoadComplaintsId,
                queries);
        } catch (error) {
            console.log("Appwrite service :: Get Road Complaints :: error", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file);
        } catch (error) {
            console.log("Appwrite service :: Upload File :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId);
            return true;
        } catch (error) {
            console.log("Appwrite service :: Delete File :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId);
    }
}


const service = new Service();
export default service