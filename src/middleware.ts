import { stackMiddlewares } from "@/lib/middlewares/stackMiddlewares";
import { withIntl } from "@/lib/middlewares/withIntl";

const middlewares = [withIntl];

export default stackMiddlewares(middlewares);

export const config = {
  matcher: [
    "/((?!_next|android|apple|ms-icon|favicon|robots.txt|browserconfig.xml|manifest.json|mockServiceWorker.js).*)",
  ],
};
