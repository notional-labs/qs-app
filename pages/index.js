import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout pageTitle="Quicksilver DApp">
      <main className={`${styles.main} ${inter.className}`}>
        sdfsdfdsf
      </main>
    </Layout>
  )
}
