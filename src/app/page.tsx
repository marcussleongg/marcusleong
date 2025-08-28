import Image from 'next/image'

export default function Page() {
    return <div><h1>Hello, Next.js!</h1><Image src="globe.svg" alt="globe" width={100} height={100}/></div>
  }