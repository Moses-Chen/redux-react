import Input from "../presentation/Input";
import { connect } from "react-redux";
import updateName from "../../actions/updateName";

const mapStateToProps = state => {
    return {
        value: state.userData.name.first,
        label: "First Name"
    };
};

function mapDispatchToProps(dispatch) {
    return ({
        callback: (firstName => { dispatch(updateName({ first: firstName })) })
    });
}

const FirstNameInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default FirstNameInput;