'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Reuseable Components/header';
import Footer from '@/components/Reuseable Components/footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  
  const authPages = ['/login', '/account'];
  const isAuthPage = authPages.includes(pathname);
  
  return (
    <>
      {!isAuthPage && <Header />}
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}