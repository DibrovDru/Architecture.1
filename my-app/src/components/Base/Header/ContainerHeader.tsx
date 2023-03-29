import { connect } from "react-redux";
import { addTaskActionCreator } from "../../../ActionCreators";
import Header from "./Header";

// const mapStateToProps = (state: any, ownProps: any) => ({
//   tasks: state.tasks,
// });

const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
  addTask: () => dispatch(addTaskActionCreator()),
});

export default connect(mapDispatchToProps)(Header);
