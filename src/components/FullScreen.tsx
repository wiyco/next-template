export function FullScreen({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid h-dvh w-full place-content-center text-neutral-800 dark:text-neutral-300">
      {children}
    </main>
  );
}
