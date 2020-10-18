const getBarColorAndProgress = (percentage) => {
  if (percentage > 100) {
    return {
      color: "#f13535", // Red
      widthPercentage: 100,
    };
  } else if (percentage <= 0) {
    return {
      color: "#1890ff", // Blue
      widthPercentage: 0,
    };
  } else if (percentage === 100) {
    return {
      color: "#228B22", // green
      widthPercentage: percentage,
    };
  } else {
    return {
      color: "#1890ff", // Blue
      widthPercentage: percentage,
    };
  }
};

export default getBarColorAndProgress;
