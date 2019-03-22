import Input from "../presentation/Input";
import { connect } from "react-redux";
import updateContactInformation from "../../actions/updateContactInformation";

const mapStateToProps = state => {
    return {
        value: state.userData.contactInfo.phone,
        label: "Phone "
    };
}

function mapDispatchToProps(dispatch) {
    return ({
        callback: (phoneNumber => { dispatch(updateContactInformation({ phone: phoneNumber })) })
    });
}

const PhoneInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default PhoneInput;