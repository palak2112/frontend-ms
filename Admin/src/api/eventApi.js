import requestMaker from "./networkHandler/requestMaker"

// CRUD API call
export const fetchAllEvents = () => {
    const url = '/event/';
    const params = {};
    const payload = {};
    return requestMaker(url,"get",{params,payload});
}

export const fetchEventById = (eventId) => {
    const url = '/event/' + String(eventId);
    const params = {};
    const payload = {};
    return requestMaker(url,"get",{params,payload});
}

export const createEvent = (payload) => {
    const url = '/event/';
    const params = {};
    return requestMaker(url,"post",{params,payload});
}

export const updateEvent = (payload,eventId) => {
    const url = '/event/' + String(eventId);
    const params = {};
    return requestMaker(url,"patch",{params,payload});
}

export const deleteEvent = (eventId) => {
    const url = '/event/' + String(eventId);
    const params = {};
    const payload = {};
    return requestMaker(url,"delete",{params,payload});
}
