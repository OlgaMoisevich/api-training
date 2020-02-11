let rerenderEntireTree = () => {
        console.log('oooo')
};

let state = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likesCount: 12},
            {id: '2', message: "It's my first post", likesCount: 11},
        ],
        newPostText: '1',
        newPostTextDialog: '',
    },
    dialogsPage: {
        messageData: [
            {id: '1', message: 'Hi', src: ''},
            {id: '2', message: 'Yoi'},
            {id: '3', message: 'Byyy'},
            {id: '4', message: 'ВYYY'},
            {id: '5', message: 'Hello'},
        ],
        dialogs: [
            {id: '1', name: 'Василий', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGMHyaJaJdu1Q6PesEEPHGdKAPaGoaCZqe_pkn4XJZLWudStnN'},
            {id: '2', name: 'Генадий', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxJbBQ_JvY_hXs4if2HmoIcRAdofDdiEOjY82yfoNlo4HkBnO1'},
            {id: '3', name: 'Алексей', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAvtQ5QGFbFY861oIhYmOCL-bPaF73hepDNPQa8FfoHoUFX7cz'},
            {id: '4', name: 'Влада', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0Aigo8TJLP-TdZtauPgAKce6QJuaxG8EUDyarQrs-xxNer9h2'},
            {id: '5', name: 'Виктория', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGjvKSeYKpoeC4v9d9_52ZhYlV__HtXaJQg-eU2eu9gfx_NfBD'},
        ]
    },
    navbarPage: {
        toolbarFriehds: [
            {id: '1', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUTWh8wV_7aMa1slAC4kEnhXTqy89iZOrn-SS8eZat01OHzSa7', name: 'Anna'},
            {id: '2', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWfQ9gknu_TQkjGrse9yXPYteq2dvZfjbUGSzSBAReiHBzob5z", name: 'Masha'},
            {id: '2', src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7kcIgeRHXJRAAQWcVWfemMQjHCsNtOsu6o_1il6Oka45DxBYp", name: 'Lena'},
        ]
    },
};
window.state = state;

export let addPost = () => {
    let new_Post = {
        id: '6', message: state.profilePage.newPostText, likesCount: 0
    };
    state.profilePage.posts.push(new_Post);
    state.profilePage.newPostText = '';
    rerenderEntireTree()
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree()
};
export let updateNewPostText_1 = (newText) => {
    state.profilePage.newPostTextDialog = newText;
    rerenderEntireTree()
};

export const subscribe = (observer) => {
     rerenderEntireTree = observer;
 };

export default state
