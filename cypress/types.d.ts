interface Selectors {
  [index: string]: string;
}

declare class ConsentBanner {
  private selectors: Selectors;

  constructor();

  accept(): void;
  isBannerVisible(): void;
  isBannerNotVisible(): void;
}
