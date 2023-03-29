import { connect } from "react-redux";
import { Tasks } from "./Tasks";

const mapStateToProps = (state: any, ownProps: any) => ({
  tasks: state.tasksReducer,
});

// const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
//   addTask: () => dispatch(addTaskActionCreator()),
// });

export default connect(mapStateToProps)(Tasks);
