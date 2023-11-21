import { LinkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import Link from 'next/link';

export function FooterWithLogo() {
    return (
        <footer className="border-t mt-12 pt-12 pb-32 px-8 w-full">
            <div>
                <Image
                    src='/vvc_logo.png'
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-2/5">
                    <div className="text-gray-600 block mt-4 p-0 lg:pr-16">
                        <p>Số 461, Trương Định, Hoàng Mai, Hà Nội, Việt Nam</p><br />
                        <div className='flex items-center mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            +84 91666483
                        </div>
                        <div className='flex items-center mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                            </svg>
                            vvcgreen@gmail.com
                        </div>
                        <div className='flex items-center mt-2'>
                            <LinkIcon className="w-6 h-6 mr-2" />
                            <Link href='https://www.facebook.com/hannguyen.vvc?mibextid=ZbWKwL'>
                                Facebook
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full mt-6 lg:mt-0 sm:w-1/2 lg:w-1/5 flex flex-row-reverse"></div>
                <div className="w-full mt-6 lg:mt-0 sm:w-1/2 lg:w-1/5 flex flex-row-reverse">
                    <div>
                        <h6 className="font-semibold text-gray-700 mb-4 flex flex-row-reverse">Công ty</h6>
                        <ul>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Giới thiệu</Link> </li>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Dự án</Link> </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full mt-6 lg:mt-0 sm:w-1/2 lg:w-1/5  flex flex-row-reverse">
                    <div>
                        <h6 className="font-semibold text-gray-700 mb-4 flex flex-row-reverse">Điều khoản</h6>
                        <ul>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Bảo mật</Link> </li>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Vận hành</Link> </li>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Tài liệu</Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}