import Input from "../presentation/Input";
import { connect } from "react-redux";
import updateName from "../../actions/updateName";

const mapStateToProps = state => {
    return {
        value: state.userData.name.last,
        label: "Last Name"
    };
};

function mapDispatchToProps(dispatch) {
    return ({
        callback: (lastName => { dispatch(updateName({ last: lastName })) })
    });
}

const LastNameInput = connect(mapStateToProps, mapDispatchToProps)(Input);

export default LastNameInput;