import Link from 'next/link'

export default function Footer({ note = 'Uns — Not a database. A companion for return.' }: { note?: string }) {
  return (
    <footer className="text-center py-12 px-6 text-sm text-stone-400 border-t border-stone-200 dark:border-stone-800">
      <p>{note}</p>
      <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
        <Link href="/today" className="hover:text-emerald-700 dark:hover:text-emerald-400">Dua of the day</Link>
        <Link href="/situations" className="hover:text-emerald-700 dark:hover:text-emerald-400">By situation</Link>
        <Link href="/duas" className="hover:text-emerald-700 dark:hover:text-emerald-400">All duas</Link>
        <Link href="/support" className="hover:text-emerald-700 dark:hover:text-emerald-400">Support Uns</Link>
      </nav>
    </footer>
  )
}
