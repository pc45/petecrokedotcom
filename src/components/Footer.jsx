import { GridPattern } from '@/components/GridPattern'

export function Footer() {
  return (
    <footer className="relative py-5 border-y-2 border-y-white mt-4">
      <div className="text-sm text-white font-display flex justify-center">
        <p>&copy; {new Date().getFullYear()} petecroke.com</p>
      </div>
    </footer>
  )
}
