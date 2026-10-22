export const shouldShowMobileCta = (heroVisible: boolean, footerVisible: boolean, menuOpen: boolean) =>
  !heroVisible && !footerVisible && !menuOpen;