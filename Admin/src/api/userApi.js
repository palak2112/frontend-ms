import requestMaker from "./networkHandler/requestMaker"

// CRUD API call
export const fetchAllUsers = () => {
    const url = '/user/';
    const params = {};
    const payload = {};
    return requestMaker(url,"get",{params,payload});
}

export const fetchUserById = (userId) => {
    const url = '/user/' + String(userId);
    const params = {};
    const payload = {};
    return requestMaker(url,"get",{params,payload});
}

export const createUser = (payload) => {
    const url = '/user/';
    const params = {};
    return requestMaker(url,"post",{params,payload});
}

export const updateUser = (payload,userId) => {
    const url = '/user/' + String(userId);
    const params = {};
    return requestMaker(url,"patch",{params,payload});
}

export const deleteUser = (userId) => {
    const url = '/user/' + String(userId);
    const params = {};
    const payload = {};
    return requestMaker(url,"delete",{params,payload});
}


// Fetch Documents by UID
export const getDocumentsByUID = (UID) =>{
    const url = '/user/' + String(UID) + '/documents';
    const params = {};
    const payload = {};
    return requestMaker(url,"get",{params,payload});
}