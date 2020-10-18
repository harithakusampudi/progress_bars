import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getProgressBarsData } from "../modules/bars/bars.duck";
import SELECTORS from "../selectors";
import ProgressBars from "./ProgressBars";

const mapStateToProps = createStructuredSelector({
  loading: SELECTORS.loadingData(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        getProgressBarsData,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBars);
