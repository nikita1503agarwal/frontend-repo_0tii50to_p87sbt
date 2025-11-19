export default function Footer() {
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300/70">
        <p>© {new Date().getFullYear()} VitalSight. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="#" className="hover:text-white transition">Security</a>
        </div>
      </div>
    </footer>
  )
}
