import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteShell } from "../components/site/site-shell";

export const Route = createFileRoute("/site")({
  component: () => (
    <SiteShell>
      <Outlet />
    </SiteShell>
  ),
});
