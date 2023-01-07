import { Client } from 'appwrite';

const user = new Client();

user
    .setEndpoint('http://localhost/v1')
    .setProject('63b97ab0cc36c56e5e9d');

export default user;