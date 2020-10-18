import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";

import ButtonsSection from "./ButtonsSection";

import { updateBarData } from "../../modules/bars/bars.duck";
import SELECTORS from "../../selectors";

const mapStateToProps = createStructuredSelector({
  barsData: SELECTORS.barsData(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateBarData,
      },
      dispatch
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ButtonsSection);
