import types from "./types";

function updateContactInformation(contactInfo) {
    const type = types.UPDATE_CONTACT_INFORMATION;
    const payload = contactInfo;

    return Object.freeze({
        type: type,
        payload: payload
    });
};

export default updateContactInformation;