import Input from "../presentation/Input";
import { connect } from "react-redux";
import updateContactInformation from "../../actions/updateContactInformation";

const mapStateToProps = state => {
    return {
        value: state.userData.contactInfo.email,
        label: "Email "
    };
};

function mapDispatchToProps(dispatch) {
    return ({
        callback: (emailAddress => { dispatch(updateContactInformation({ email: emailAddress })) })
    });
}

const EmailInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default EmailInput;