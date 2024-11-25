import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { redirect } from 'next/navigation';
 
export default function HomePage() {
  redirect('./en/home')
}