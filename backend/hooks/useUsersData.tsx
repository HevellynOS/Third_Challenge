import { useState } from "react";
import axios from "axios";

export interface UserData {
    username: string;
    fullname: string;
    email: string;
    password: string;
}

const useUsersData = () => {
    const [usersData, setUsersData] = useState<UserData[]>([]);

    const fetchUsersData = async () => {
        const url = "https://parseapi.back4app.com/graphql";
        const headers = {
            "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
            "X-Parse-Master-Key": "0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9",
            "Content-Type": "application/json; charset=utf-8",
        };

        const query = `
            query {
                users {
                    username
                    fullname
                    email
                }
            }
        `;

        try {
            const response = await axios.post(
                url,
                {
                    query: query
                },
                {
                    headers: headers
                }
            );

            const fetchedUsers = response.data.data.users;
            setUsersData(fetchedUsers);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const createUser = async (newUserData: UserData) => {
        const url = "https://parseapi.back4app.com/graphql";
        const headers = {
            "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
            "X-Parse-Master-Key": "0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9",
            "Content-Type": "application/json; charset=utf-8",
        };

        const mutation = `
            mutation ($input: CreateUserInput!) {
                createUser(input: $input) {
                    username
                    fullname
                    email
                }
            }
        `;

        try {
            const response = await axios.post(
                url,
                {
                    query: mutation,
                    variables: {
                        input: newUserData
                    }
                },
                {
                    headers: headers
                }
            );

            const createdUser = response.data.data.createUser;
            setUsersData([...usersData, createdUser]);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return {
        usersData,
        fetchUsersData,
        createUser
    };
};

export default useUsersData;
