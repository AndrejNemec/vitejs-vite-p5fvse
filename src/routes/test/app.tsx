import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test/app')({
  component: AppLayout,
});

let rerenderCount = 0;

function AppLayout() {
  rerenderCount++;
  console.log('[test/app.tsx] render count', rerenderCount);

  return (
    <div>
      <h1>App Layout</h1>
      <br />
      APP LAYOUT Rerender count: {rerenderCount}
      <br />
      <Outlet />
    </div>
  );
}
