const UPDATE_NEW_MESSAGE_BODY_DIALOGS = 'UPDATE_NEW_MESSAGE_BODY_DIALOGS';

let initialState = {
    messageData: [
        {id: '1', message: 'Hi', src: ''},
        {id: '2', message: 'Yoi'},
        {id: '3', message: 'Byyy'},
        {id: '4', message: 'ВYYY'},
        {id: '5', message: 'Hello'},
    ],
    dialogs: [
        {
            id: '1',
            name: 'Василий',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGMHyaJaJdu1Q6PesEEPHGdKAPaGoaCZqe_pkn4XJZLWudStnN'
        },
        {
            id: '2',
            name: 'Генадий',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxJbBQ_JvY_hXs4if2HmoIcRAdofDdiEOjY82yfoNlo4HkBnO1'
        },
        {
            id: '3',
            name: 'Алексей',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRAvtQ5QGFbFY861oIhYmOCL-bPaF73hepDNPQa8FfoHoUFX7cz'
        },
        {
            id: '4',
            name: 'Влада',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0Aigo8TJLP-TdZtauPgAKce6QJuaxG8EUDyarQrs-xxNer9h2'
        },
        {
            id: '5',
            name: 'Виктория',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGjvKSeYKpoeC4v9d9_52ZhYlV__HtXaJQg-eU2eu9gfx_NfBD'
        },
    ],
    messageDialog: [],
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY_DIALOGS:
            return {
                ...state,
                messageData: [...state.messageData, {id: '6', message: action.newText}],
            };
        default:
            return state;
    }
};
export const updateNewMessageBodyCreator_dialogs = (newText) => ({type: UPDATE_NEW_MESSAGE_BODY_DIALOGS, newText});

