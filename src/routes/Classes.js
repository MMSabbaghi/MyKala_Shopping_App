import SiteLayout from "../layout/SiteLayout";

export class Route {
  constructor(
    title,
    path,
    Page,
    options = { layout: null, subRoutes: null, authorize: null }
  ) {
    this.title = title;
    this.path = path;
    this.Page = Page;
    this.Layout = options.layout || SiteLayout;
    this.subRoutes = options.subRoutes || [];
    this.authorize = options.authorize || false;
  }
}

export class SubRoute {
  constructor(path, Element) {
    this.path = path;
    this.Element = Element;
  }
}
