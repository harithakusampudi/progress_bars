import getBarColorAndProgress from "../../utils";

it("If percentage is 50", function () {
  expect(getBarColorAndProgress(50).color).toEqual("#1890ff");
  expect(getBarColorAndProgress(50).widthPercentage).toEqual(50);
});

it("If percentage is 280", function () {
  expect(getBarColorAndProgress(280).color).toEqual("#f13535");
  expect(getBarColorAndProgress(280).widthPercentage).toEqual(100);
});

it("If percentage 100", function () {
  expect(getBarColorAndProgress(100).color).toEqual("#228B22");
  expect(getBarColorAndProgress(100).widthPercentage).toEqual(100);
});

it("If percentage 0", function () {
  expect(getBarColorAndProgress(0).color).toEqual("#1890ff");
  expect(getBarColorAndProgress(0).widthPercentage).toEqual(0);
});

it("If percentage -40", function () {
  expect(getBarColorAndProgress(-40).color).toEqual("#1890ff");
  expect(getBarColorAndProgress(-40).widthPercentage).toEqual(0);
});
