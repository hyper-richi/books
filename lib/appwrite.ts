import { Account, Client, Avatars, Databases } from "react-native-appwrite";

export const client: Client = new Client();

client
    .setEndpoint("https://sfo.cloud.appwrite.io/v1")
    .setProject("69216642003b4f85d955") // Your Project ID
    .setPlatform("dev.kamalov.books"); // Your package name / bundle identifier

export const account: Account = new Account(client);
export const avatars: Avatars = new Avatars(client);
export const databases: Databases = new Databases(client);
