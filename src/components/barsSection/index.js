import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import BarsSection from "./BarsSection";
import SELECTORS from "../../selectors";

const mapStateToProps = createStructuredSelector({
  barsData: SELECTORS.barsData(),
  loading: SELECTORS.loadingData(),
});

export default connect(mapStateToProps, null)(BarsSection);
