import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative py-5 border-t-2 border-t-white mt-4">
      <div className="text-sm text-white font-display flex justify-center">
        <p>&copy; {new Date().getFullYear()} petecroke.com</p>
      </div>
    </footer>
  )
}
