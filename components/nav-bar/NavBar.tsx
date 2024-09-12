import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { GlobeIcon, MoonIcon, SunIcon, RssIcon, SearchIcon, XIcon, MenuIcon, TrendingUpIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface NavBarProps {
    language: string
    t: (ar: string, en: string) => string
    isDarkMode: boolean
    isMenuOpen: boolean
    toggleDarkMode: () => void
    toggleMenu: () => void
    toggleLanguage: () => void
    isSubscribed: boolean
    setIsSubscribed: (value: boolean) => void
}

const NavBar: React.FC<NavBarProps> = ({
    isDarkMode,
    isMenuOpen,
    toggleDarkMode,
    toggleMenu,
    toggleLanguage,
    isSubscribed,
    setIsSubscribed,
    t,
    language,
}) => {

    return (
        <>
            <header className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        <div className="flex items-center gap-x-5" style={{justifyContent:'center'}}>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text" style={{paddingBottom:'4px',}}>
                                {t('مدونتي ', 'My Blog')}
                            </h1>
                            <nav className="hidden md:flex gap-x-4" >
                                <Button variant="ghost">{t('الرئيسية', 'Home')}</Button>
                                <Button variant="ghost">{t('المقالات', 'Articles')}</Button>
                                <Button variant="ghost">{t('الكتّاب', 'Authors')}</Button>
                                <Button variant="ghost">{t('عن المدونة', 'About')}</Button>
                            </nav>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <div className="relative" >
                                <Input type="search" placeholder={t('بحث...', 'Search...')} className={`w-64 ${language === 'ar' ? 'pl-8' : 'pr-8'} hidden md:block`} />
                                <SearchIcon className={`absolute ${language === 'ar' ? 'left-2' : 'right-2'} top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hidden md:block`} />
                            </div>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button onClick={toggleLanguage} variant="ghost" size="icon">
                                            <GlobeIcon className="h-5 w-5" />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{t('تغيير اللغة', 'Change Language')}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button onClick={toggleDarkMode} variant="ghost" size="icon">
                                            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{t('تبديل الوضع الليلي', 'Toggle Dark Mode')}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                        <RssIcon className="h-5 w-5" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className={`w-80 mx-1 flex flex-col`} style={{ alignItems: language === 'ar' ? 'flex-end' : 'flex-start' }} >
                                    <h3 className="font-semibold mb-2">{t('اشترك في النشرة الإخبارية', 'Subscribe to Newsletter')}</h3>
                                    <div className="flex items-center gap-x-2 mb-4" style={{ flexDirection: language === 'ar' ? 'row-reverse' : 'row' }}>
                                        <Switch
                                            id="newsletter-subscription"
                                            checked={isSubscribed}
                                            onCheckedChange={setIsSubscribed}
                                            style={{ transform: language === 'ar' ? 'scaleX(-1)' : 'scaleX(1)' }}
                                        />
                                        <label htmlFor="newsletter-subscription">
                                            {isSubscribed ? t('مشترك', 'Subscribed') : t('غير مشترك', 'Not Subscribed')}
                                        </label>
                                    </div>
                                    {!isSubscribed && (
                                        <form>
                                            <Input type="email" placeholder={t('بريدك الإلكتروني', 'Your email')} className={`mb-2`} style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}/>
                                            <Button type="submit" className="w-full">{t('اشترك', 'Subscribe')}</Button>
                                        </form>
                                    )}
                                </PopoverContent>
                            </Popover>
                            <Button onClick={toggleMenu} variant="ghost" size="icon" className="md:hidden">
                                {isMenuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <div className={`md:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                    <nav className="flex flex-col space-y-2 p-4">
                        <Button variant="ghost">{t('الرئيسية', 'Home')}</Button>
                        <Button variant="ghost">{t('المقالات', 'Articles')}</Button>
                        <Button variant="ghost">{t('الكتّاب', 'Authors')}</Button>
                        <Button variant="ghost">{t('عن المدونة', 'About')}</Button>
                    </nav>
                </div>
            )}

            <nav className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} hidden md:block`} >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
                    <Tabs defaultValue="all" className="w-full" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
                        <TabsList>
                            <TabsTrigger value="all">{t('جميع المقالات', 'All Articles')}</TabsTrigger>
                            <TabsTrigger value="technology">{t('التكنولوجيا', 'Technology')}</TabsTrigger>
                            <TabsTrigger value="culture">{t('الثقافة', 'Culture')}</TabsTrigger>
                            <TabsTrigger value="science">{t('العلوم', 'Science')}</TabsTrigger>
                            <TabsTrigger value="trending">
                                <TrendingUpIcon className="h-4 w-4 mr-2" />
                                {t('الأكثر رواجًا', 'Trending')}
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </nav>

        </>
    )
}

export default NavBar
