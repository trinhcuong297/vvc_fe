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
                    <p className="text-gray-600 hidden lg:block mt-4 p-0 lg:pr-16">
                        Boisterous he on understood attachment as entreaties ye devonshire.
                        In mile an form snug were been sell.
                        Extremely ham any his departure for contained curiosity defective.
                        Way now instrument had eat diminution melancholy expression sentiments stimulated.
                    </p>
                </div>

                <div className="w-full mt-6 lg:mt-0 sm:w-1/2 lg:w-1/5 flex flex-row-reverse">
                    <div>
                        <h6 className="font-semibold text-gray-700 mb-4 flex flex-row-reverse">Company</h6>
                        <ul>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Team</Link> </li>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">About us</Link> </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full mt-6 lg:mt-0 sm:w-1/2 lg:w-1/5  flex flex-row-reverse">
                    <div>
                        <h6 className="font-semibold text-gray-700 mb-4 flex flex-row-reverse">Content</h6>
                        <ul>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Privacy Policy</Link> </li>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Terms & Conditions</Link> </li>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Documentation</Link> </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full mt-6 lg:mt-0 sm:w-1/2 lg:w-1/5 flex flex-row-reverse">
                    <div>
                        <h6 className="font-semibold text-gray-700 mb-4 flex flex-row-reverse">Company</h6>
                        <ul>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">Team</Link> </li>
                            <li> <Link href="/" className="block text-gray-600 py-2 flex flex-row-reverse">About us</Link> </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
}