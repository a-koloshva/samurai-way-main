export type StateType = {
    profilePage: ProfilePageType;
    dialogsPage: DialogsPageType;
};

export type ProfilePageType = {
    postsData: PostsDataType[];
};

export type DialogsPageType = {
    dialogsData: DialogsDataType[];
    messagesData: MessagesDataType[];
};

export type PostsDataType = {
    id: number;
    message: string;
    likeCount: number;
};

export type DialogsDataType = {
    id: number;
    name: string;
};

export type MessagesDataType = {
    id: number;
    text: string;
};

export const state: StateType = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hello', likeCount: 5 },
            { id: 2, message: 'i love Vlada', likeCount: 10 },
            { id: 3, message: 'kak you', likeCount: 15 },
            { id: 4, message: 'i fine ty', likeCount: 15 },
        ],
    },

    dialogsPage: {
        dialogsData: [
            { id: 1, name: 'Andrey' },
            { id: 2, name: 'Vlada' },
            { id: 3, name: 'Sasha' },
            { id: 4, name: 'Tamara' },
        ],
        messagesData: [
            { id: 1, text: 'hi' },
            { id: 2, text: 'hey' },
            { id: 3, text: 'hello' },
            { id: 4, text: 'hay' },
        ],
    },
};

export const addPost = (postMessage: string) => {
    let newPost = { id: 5, message: postMessage, likeCount: 7 };
    state.profilePage.postsData.push(newPost);
};
