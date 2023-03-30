import { connect } from "react-redux";
import { Tasks } from "./Tasks";

const mapStateToProps = (state: any, ownProps: any) => ({
  tasks: state.tasksReducer,
});

export default connect(mapStateToProps, null)(Tasks);
