import '@testing-library/jest-dom';

(globalThis as any).mockSearchParams = new URLSearchParams();
(globalThis as any).mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: (globalThis as any).mockPush,
  }),
  useSearchParams: () => (globalThis as any).mockSearchParams,
}));
