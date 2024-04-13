import { Link, Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test/app/nested')({
  component: NestedLayout,
});

let rerenderCount = 0;

function NestedLayout() {
  rerenderCount++;
  console.log('[test/app/nested.tsx] render count', rerenderCount);

  return (
    <div>
      <br />
      Nested layout rerender count {rerenderCount} <br />
      <Link to="/test/app/nested/first" className="[&.active]:font-bold">
        Go to /test/app/nested/first
      </Link>{' '}
      <br />
      <Link to="/test/app/nested/second" className="[&.active]:font-bold">
        Go to /test/app/nested/second
      </Link>
      <br />
      <Outlet />
    </div>
  );
}
