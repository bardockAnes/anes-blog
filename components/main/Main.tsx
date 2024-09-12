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

interface MainProps {
  language: string
  t: (ar: string, en: string) => string
  isDarkMode: boolean
  date: Date | undefined
  setDate: (value: Date | undefined) => void
  readingTime: number[]
  setReadingTime: (value: number[]) => void
  mainRef: React.RefObject<HTMLDivElement>
}


const Main: React.FC<MainProps> = ({
  language,
  isDarkMode,
  t,
  mainRef,
  date,
  setDate,
  setReadingTime,
  readingTime,
}) => {

  return (
    <main ref={mainRef} className="flex-1 overflow-y-auto">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className={`overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-0 shadow-lg transition-shadow duration-300 hover:shadow-xl`}>
                <div className="relative h-64 w-full">
                  <img
                    src={`https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                    alt={t('صورة المقال الرئيسي', 'Main Article Image')}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-3xl font-bold text-white mb-2">{t('عنوان المقال الرئيسي الحديث', 'Modern Main Article Title')}</h2>
                    <div className="flex items-center text-sm text-gray-300">
                      <CalendarIcon className="ml-2 h-4 w-4" />
                      <span>{t('١٥ يونيو ٢٠٢٣', 'June 15, 2023')}</span>
                      <UserIcon className="mr-4 ml-2 h-4 w-4" />
                      <span>{t('أحمد محمد', 'Ahmed Mohamed')}</span>
                      <ClockIcon className="mr-4 ml-2 h-4 w-4" />
                      <span>{t('٥ دقائق للقراءة', '5 min read')}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {t(
                      'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
                      'This text is an example of text that can be replaced in the same space. This text has been generated from the Arabic text generator. Where you can generate such text or many other texts in addition to increasing the number of characters generated by the application.'
                    )}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button variant="outline">{t('اقرأ المزيد', 'Read More')}</Button>
                  <div className="flex items-center space-x-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <BookmarkIcon className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t('حفظ المقال', 'Bookmark Article')}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MessageCircleIcon className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t('التعليقات', 'Comments')}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <ShareIcon className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{t('مشاركة', 'Share')}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardFooter>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <Card key={item} className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-0 shadow-md hover:shadow-lg transition-shadow duration-200`}>
                    <div className="relative h-48 w-full">
                      <img
                        src={`https://plus.unsplash.com/premium_photo-1671209795288-cdbcf73bb53e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                        alt={`${t('صورة المقال', 'Article Image')} ${item}`}
                        className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="text-xs">
                          {t('جديد', 'New')}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <h3 className="text-xl font-semibold mb-2">{t(`عنوان المقال الحديث ${item}`, `Modern Article Title ${item}`)}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="ml-2 h-4 w-4" />
                        <span>{`${item + 10} ${t('يونيو ٢٠٢٣', 'June 2023')}`}</span>
                        <UserIcon className="mr-4 ml-2 h-4 w-4" />
                        <span>{t('فاطمة أحمد', 'Fatima Ahmed')}</span>
                        <ClockIcon className="mr-4 ml-2 h-4 w-4" />
                        <span>{t('٣ دقائق للقراءة', '3 min read')}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {t(
                          'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.',
                          'This is an example text that can be replaced in the same space. This text has been generated from the Arabic text generator.'
                        )}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                      <Button variant="ghost">{t('اقرأ المزيد', 'Read More')}</Button>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="icon">
                          <BookmarkIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MessageCircleIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <ShareIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <aside className="space-y-6">
              <Card className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-0 shadow-md`}>
                <CardHeader>
                  <h2 className="text-xl font-bold">{t('بحث متقدم', 'Advanced Search')}</h2>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="relative">
                      <Input type="text" placeholder={t('كلمات البحث', 'Search keywords')} className="pr-8" />
                      <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t('اختر الفئة', 'Select category')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t('جميع الفئات', 'All categories')}</SelectItem>
                        <SelectItem value="technology">{t('التكنولوجيا', 'Technology')}</SelectItem>
                        <SelectItem value="culture">{t('الثقافة', 'Culture')}</SelectItem>
                        <SelectItem value="science">{t('العلوم', 'Science')}</SelectItem>
                      </SelectContent>
                    </Select>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? date.toDateString() : t('اختر التاريخ', 'Pick a date')}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <div>
                      <label className="text-sm font-medium">{t('وقت القراءة (بالدقائق)', 'Reading time (minutes)')}</label>
                      <Slider
                        defaultValue={[1, 10]}
                        max={60}
                        step={1}
                        onValueChange={setReadingTime}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-sm mt-1">
                        <span>{readingTime[0]} {t('دقيقة', 'min')}</span>
                        <span>{readingTime[1]} {t('دقيقة', 'min')}</span>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      <SearchIcon className="mr-2 h-4 w-4" />
                      {t('بحث', 'Search')}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-0 shadow-md`}>
                <CardHeader>
                  <h2 className="text-xl font-bold">{t('المؤلفون المميزون', 'Featured Authors')}</h2>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    {[1, 2, 3].map((author) => (
                      <div key={author} className="flex items-center space-x-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${t('م', 'A')}${author}`} />
                          <AvatarFallback>{t('م', 'A')}{author}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{t(`اسم المؤلف ${author}`, `Author Name ${author}`)}</p>
                          <p className="text-sm text-gray-500">{t(`${author * 5} مقالات`, `${author * 5} articles`)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-0 shadow-md`}>
                <CardHeader>
                  <h2 className="text-xl font-bold">{t('الوسوم الشائعة', 'Popular Tags')}</h2>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['تكنولوجيا', 'ثقافة', 'علوم', 'فن', 'رياضة', 'سياسة', 'صحة', 'تعليم'].map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {t(tag, tag.charAt(0).toUpperCase() + tag.slice(1))}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main