import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Preload a route's data as soon as the user hovers/touches a Link, so
    // navigation feels instant by the time they actually click.
    defaultPreload: "intent",
    // Only show a pendingComponent (skeleton) if a navigation is genuinely
    // slow, and keep it visible briefly once shown to avoid flicker.
    defaultPendingMs: 150,
    defaultPendingMinMs: 300,
  });

  return router;
};
