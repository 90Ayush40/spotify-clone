export const initialState = {
    user: null,
    playLists: [],
    playing: false,
    item: null,
    // Remove after finished developing it will help in debugging
    
    token: "BQDH-9MzNUZwkPgXy73fkCPk9gWb3SkQErm7KrQUFqXVkRyaRCKvGduAA2lOw0m-GzxPJoIjKMim0eyIaTZk5BX5uzU2r7qLB-Rv7lM_fTkVlh65ksFXBhewsV6SYDbPvhQa5KbfxUGHwrUptnreqgj14WATPRsE0kIaRAC0BPJ1T-KI",
};

const reducer = (state, action) => {

    console.log(action);

    // Actions contain two things -> Type and [payloads]
    // There can be several types but here in this case type is "SET_USER" and [payload] is user.
    
    
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state, 
                token: action.token
            };
            default:
                // if noyhing happen
                return state;
    }

}

export default reducer;