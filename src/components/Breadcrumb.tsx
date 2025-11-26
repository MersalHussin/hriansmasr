import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface BreadcrumbProps {
  currentPage: string
}

function Breadcrumb({ currentPage }: BreadcrumbProps) {
  const { t } = useTranslation()

  return (
    <nav className="flex items-center justify-center gap-2 text-white/80 text-sm md:text-base mt-4">
      <Link to="/" className="hover:text-white transition-colors">
        {t('home')}
      </Link>
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
      </svg>
      <span className="text-white font-semibold">{currentPage}</span>
    </nav>
  )
}

export default Breadcrumb
