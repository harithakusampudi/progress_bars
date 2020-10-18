export const getBarColorAndProgress = (percentage) => {
  if (percentage > 100) {
    return {
      color: "#f13535",
      widthPercentage: 100,
    };
  } else if (percentage < 100) {
    return {
      color: "#1890ff",
      widthPercentage: percentage,
    };
  } else {
    return {
      color: "#228B22",
      widthPercentage: percentage,
    };
  }
};
