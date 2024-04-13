import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

export const Route = createFileRoute('/test/app/')({
  component: AppPage,
  validateSearch: (search) =>
    z
      .object({
        query: z.string().optional(),
      })
      .parse(search),
});

let rerenderCount = 0;

function AppPage() {
  rerenderCount++;
  console.log('[test/app/index.tsx] render count', rerenderCount);

  const { query } = Route.useSearch();
  const navigate = Route.useNavigate();

  const onChangeInput = (event: any) => {
    navigate({
      from: Route.id,
      to: Route.id,
      search: {
        query: event.target.value,
      },
      replace: true,
      resetScroll: false,
    });
  };

  return (
    <div>
      <h1>App</h1> <br />
      <div>
        <label htmlFor="query">Query</label>
        <br />
        <input
          id="query"
          placeholder="Search..."
          value={query || ''}
          onChange={onChangeInput}
        />
      </div>
    </div>
  );
}
