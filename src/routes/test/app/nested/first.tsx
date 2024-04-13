import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/test/app/nested/first')({
  component: () => <div>Hello /test/app/nested/first!</div>,
});
