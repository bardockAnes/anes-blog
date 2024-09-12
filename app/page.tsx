'use client'
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { CalendarIcon, UserIcon, ClockIcon, MessageCircleIcon, ShareIcon, MoonIcon, SunIcon, BookmarkIcon, SearchIcon, GlobeIcon, TrendingUpIcon, ThumbsUpIcon, RssIcon, MenuIcon, XIcon } from "lucide-react"
import NavBar from '@/components/nav-bar/NavBar'
import Main from '@/components/main/Main'

export default function UltraModernBilingualBlog() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [language, setLanguage] = useState('ar')
  const [date, setDate] = useState<Date>()
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [readingTime, setReadingTime] = useState([1, 10])
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleLanguage = () => setLanguage(language === 'ar' ? 'en' : 'ar')
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (mainRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = mainRef.current
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
        setScrollProgress(progress)
      }
    }

    const mainElement = mainRef.current
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll)
      return () => mainElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const t = (ar: string, en: string) => language === 'ar' ? ar : en

  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} font-sans transition-colors duration-200`}>
      <Progress value={scrollProgress} className="fixed top-0 left-0 right-0 z-50 h-1" />
      <NavBar
        isDarkMode={isDarkMode}
        isMenuOpen={isMenuOpen}
        toggleDarkMode={toggleDarkMode}
        toggleMenu={toggleMenu}
        toggleLanguage={toggleLanguage}
        isSubscribed={isSubscribed}
        setIsSubscribed={setIsSubscribed}
        t={t}
        language={language}
      />

      <Main 
      language={language}
      date={date}
      setDate={setDate}
      isDarkMode={isDarkMode}
      readingTime={readingTime}
      setReadingTime={setReadingTime}
      t={t}
      mainRef={mainRef}    
      />


      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('عن المدونة', 'About the Blog')}</h3>
              <p className="text-sm text-gray-500">
                {t('مدونة متخصصة في نشر المحتوى الثقافي والتكنولوجي والعلمي بطريقة مبسطة وممتعة.', 'A blog specialized in publishing cultural, technological, and scientific content in a simplified and enjoyable way.')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('روابط سريعة', 'Quick Links')}</h3>
              <ul className="space-y-2">
                <li><Button variant="link">{t('الصفحة الرئيسية', 'Home')}</Button></li>
                <li><Button variant="link">{t('أحدث المقالات', 'Latest Articles')}</Button></li>
                <li><Button variant="link">{t('اتصل بنا', 'Contact Us')}</Button></li>
                <li><Button variant="link">{t('سياسة الخصوصية', 'Privacy Policy')}</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('تابعنا', 'Follow Us')}</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              {t('حقوق النشر © 2023 مدونتي الحديثة. جميع الحقوق محفوظة.', 'Copyright © 2023 My Modern Blog. All rights reserved.')}
            </p>
            <Button variant="ghost" size="sm" onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })}>
              {t('العودة للأعلى', 'Back to Top')}
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}