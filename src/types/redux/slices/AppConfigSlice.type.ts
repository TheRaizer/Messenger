export enum ViewportStates {
  MOBILE = 'mobile',
  TABLET = 'tablet',
  DESKTOP = 'desktop',
}

export type AppConfigState = {
  viewportState: ViewportStates;
};
