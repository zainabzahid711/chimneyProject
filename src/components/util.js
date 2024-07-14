//this file contains function of styling

export const getImgWidth = (
  isXtraSmall,
  isSmallerScreen,
  isMeduimScreen,
  isLargeScreen
) => {
  if (isXtraSmall) return "250px";
  if (isSmallerScreen) return "290px";
  if (isMeduimScreen) return "350px";
  if (isLargeScreen) return "800px";
  return "860px";
};

export const getTextWidth = (
  isXtraSmall,
  isSmallerScreen,
  isMeduimScreen,
  isLargeScreen
) => {
  if (isXtraSmall) return "280px";
  if (isSmallerScreen) return "250px";
  if (isMeduimScreen) return "650px";
  if (isLargeScreen) return "860px";
  return "860px";
};

export const getspanWidth = (
  isXtraSmall,
  isSmallerScreen,
  isMeduimScreen,
  isLargeScreen
) => {
  if (isXtraSmall) return "280px";
  if (isSmallerScreen) return "245px";
  if (isMeduimScreen) return "550px";
  if (isLargeScreen) return "800px";
};

export const textFontSize = (
  isXtraSmall,
  isSmallerScreen,
  isMeduimScreen,
  isLargeScreen
) => {
  if (isXtraSmall) return "12px";
  if (isSmallerScreen) return "12px";
  if (isMeduimScreen) return "14px";
  if (isLargeScreen) return "14px";
};

//storage to workkkk section
export const TextWidth = (isSmallerScreen, isMeduimScreen, isLargeScreen) => {
  // if (isXtraSmall) return "390px";
  if (isSmallerScreen) return "280px";
  if (isMeduimScreen) return "340px";
  if (isLargeScreen) return "442px";
  return "462px";
};

export const ImageWidth = (isSmallerScreen, isMeduimScreen, isLargeScreen) => {
  if (isSmallerScreen) return "290px";
  if (isMeduimScreen) return "270px";
  if (isLargeScreen) return "410px";
  return "410px";
};

//earning growth section

export const TextGrowthWidth = (
  isSmallerScreen,
  isMeduimScreen,
  isLargeScreen
) => {
  if (isSmallerScreen) return "370px";
  if (isMeduimScreen) return "370px";
  if (isLargeScreen) return "700px";
  return "760px";
};

export const DescriptionWidth = (
  isSmallerScreen,
  isMeduimScreen,
  isLargeScreen
) => {
  if (isSmallerScreen) return "370px";
  if (isMeduimScreen) return "570px";
  if (isLargeScreen) return "700px";
  return "780px";
};

// ---------faq's ------- icon width

export const globalNetworkIcon = (
  isSmallerScreen,
  isMeduimScreen,
  isLargeScreen
) => {
  if (isSmallerScreen) return "233px";
  if (isMeduimScreen) return "170px";
  if (isLargeScreen) return "243px";
};
