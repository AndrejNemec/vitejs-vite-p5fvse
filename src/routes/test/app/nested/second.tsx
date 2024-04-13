import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test/app/nested/second')({
  component: () => <div>Hello /test/app/nested/second!</div>,
});
