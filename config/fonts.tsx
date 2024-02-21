import {Roboto} from 'next/font/google';
import { Inter } from 'next/font/google';

export const roboto = Roboto({
    weight: ['700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })
export const inner = Inter({
    subsets: ['latin'],
    weight: '500'
})


