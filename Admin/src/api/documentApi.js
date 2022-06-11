import requestMaker from "./networkHandler/requestMaker"

// CRUD API call
export const fetchAllDocuments = () => {
    const url = '/document/';
    const params = {};
    const payload = {};
    return requestMaker(url,"get",{params,payload});
}

export const fetchDocumentById = (documentId) => {
    const url = '/document/' + String(documentId);
    const params = {};
    const payload = {};
    return requestMaker(url,"get",{params,payload});
}

export const createDocument = (payload) => {
    const url = '/document/';
    const params = {};
    return requestMaker(url,"post",{params,payload});
}

export const updateDocument = (payload,documentId) => {
    const url = '/document/' + String(documentId);
    const params = {};
    return requestMaker(url,"patch",{params,payload});
}

export const deleteDocument = (documentId) => {
    const url = '/document/' + String(documentId);
    const params = {};
    const payload = {};
    return requestMaker(url,"delete",{params,payload});
}
