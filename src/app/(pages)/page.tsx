export default function Page() {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl">Welcome to Next.js</h1>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://nextjs.org/docs/app/getting-started/installation"
            rel="noreferrer"
          >
            Getting Started
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://nextjs.org/learn"
            rel="noreferrer"
          >
            Learn Next.js
          </a>
        </li>
        <li>
          <a
            className="text-blue-700 underline visited:text-purple-900"
            target="_blank"
            href="https://nextjs.org/docs"
            rel="noreferrer"
          >
            Next.js Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
