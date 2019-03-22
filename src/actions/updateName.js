import types from "./types";

function updateName(nameInfo) {
    const type = types.UPDATE_NAME;
    const payload = nameInfo;

    return Object.freeze({
        type: type,
        payload: payload
    });
};

export default updateName;