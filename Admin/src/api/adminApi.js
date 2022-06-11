import requestMaker from "./networkHandler/requestMaker"

// CRUD API call
export const fetchAllAdmins = () => {
    const url = '/admin/';
    const params = {};
    const payload = {};
    return requestMaker(url,"get",{params,payload});
}

export const fetchAdminById = (adminId) => {
    const url = '/admin/' + String(adminId);
    const params = {};
    const payload = {};
    return requestMaker(url,"get",{params,payload});
}

export const createAdmin = (payload) => {
    const url = '/admin/';
    const params = {};
    return requestMaker(url,"post",{params,payload});
}

export const updateAdmin = (payload,adminId) => {
    const url = '/admin/' + String(adminId);
    const params = {};
    return requestMaker(url,"patch",{params,payload});
}

// Dont Use This
// export const deleteAdmin = (adminId) => {
//     const url = '/admin/' + String(adminId);
//     const params = {};
//     const payload = {};
//     return requestMaker(url,"delete",{params,payload});
// }


