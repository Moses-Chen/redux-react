import types from "./types";

function updateAddress(addressInfo) {
    const type = types.UPDATE_ADDRESS;
    const payload = addressInfo;

    return Object.freeze({
        type: type,
        payload: payload
    });
};

export default updateAddress;