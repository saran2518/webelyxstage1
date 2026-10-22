export const shouldShowMobileCta = (heroActionVisible: boolean, footerVisible: boolean, menuOpen: boolean) =>
  !heroActionVisible && !footerVisible && !menuOpen;