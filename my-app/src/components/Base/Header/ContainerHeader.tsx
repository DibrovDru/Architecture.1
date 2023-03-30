import { connect } from "react-redux";
import { addTaskActionCreator } from "../../../ActionCreators";
import Header from "./Header";

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addTask: () =>
    dispatch(
      addTaskActionCreator({
        name: "TASK",
        description: "",
        type: "TODO",
        executor: { name: "VASYA" },
      })
    ),
});

export default connect(null, mapDispatchToProps)(Header);
