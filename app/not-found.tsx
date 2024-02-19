import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='absolute top-1/2  left-1/2 translate-x-[-50%] translate-y-[-50%] mx-auto w-[max-content] px-[3rem] py-[1rem] border-2 border-white rounded-lg'>
            <h1 className='text-2xl text-pink-600 font-extrabold'>404</h1>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/" className='text-red-500  font-bold hover:font-extrabold hover:text-xl hover:duration-75'>Return Home</Link>
        </div>
    )
}