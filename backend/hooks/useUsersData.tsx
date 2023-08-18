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
            "X-Parse-Client-Key": "zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V",
            "Content-Type": "application/json; charset=utf-8",
        };

        const query = `
            query {
                users {
                    count
                    edges {
                        node {
                            username
                            fullname
                            email
                        }
                    }
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

            const fetchedUsers = response.data.data.users.edges.map((edge: any) => edge.node);
            setUsersData(fetchedUsers);
            console.log("Fetched Users JSON:", fetchedUsers);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const createUser = async (newUserData: UserData) => {
        const url = "https://parseapi.back4app.com/graphql";
        const headers = {
            "X-Parse-Application-Id": "DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL",
            "X-Parse-Master-Key": "0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9",
            "X-Parse-Client-Key": "zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V",
            "Content-Type": "application/json; charset=utf-8",
        };

        const mutation = `
            mutation ($input: CreateUserInput!) {
                signUp(input: {
                    fields: {
                        username: $input.username
                        fullname: $input.fullname
                        email: $input.email
                        password: $input.password
                    }
                }) {
                    viewer {
                        user {
                            id
                            createdAt
                        }
                        sessionToken
                    }
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

            const createdUser = response.data.data.signUp.viewer.user;
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
