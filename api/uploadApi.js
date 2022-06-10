import requestMaker from "./networkHandler/requestMaker"

export const documentsUpload = (payload) =>
{
    const url = 'upload/';
    const params = {};
    return requestMaker(url,"post",{params,payload});
}