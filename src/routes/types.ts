export interface SpecificRouteType {
  path: string;
  element: any;
  props?: any;
}

export interface Route {
  path: string;
  element: any;
  props?: any;
  children?: SpecificRouteType[];
}
