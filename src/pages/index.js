import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "./../components/Header/Header"
import WeatherDisplay from '@/components/WeatherDisplay/WeatherDisplay'
import Footer from '@/components/Footer/Footer'
import WeatherCard from '@/components/WeatherCard.js/WeatherCard'
import Info from '@/components/Info/Info'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
<Header/>
{/* <WeatherCard/> */}
<Info/>
{/* <WeatherDisplay/> */}
<Footer/>
    </div>
  )
}
