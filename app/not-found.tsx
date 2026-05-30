import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f1e7] px-6 text-center text-stone-800 dark:bg-[#0a0f0d] dark:text-stone-100">
      <div className="max-w-md">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-300">404</p>
        <h1 className="font-serif text-5xl">Page not found</h1>
        <p className="mt-5 leading-8 text-stone-700 dark:text-stone-300">
          The page you are looking for is not available. Return to the dua library to keep browsing.
        </p>
        <Link href="/duas" className="mt-8 inline-block rounded-2xl bg-emerald-700 px-7 py-4 font-medium text-white transition-colors hover:bg-emerald-800">
          Browse duas
        </Link>
      </div>
    </main>
  )
}
