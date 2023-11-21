import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import Image from 'next/image'
import Link from "next/link";


export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const [imgWidth, setimgWidth] = React.useState(200);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
        window.addEventListener(
            "scroll",
            () => {
                if (scrollY < 50) {
                    document.getElementById('navbar').classList.add("!bg-transparent")
                    setimgWidth(200)
                }
                else {
                    document.getElementById('navbar').classList.remove("!bg-transparent")
                    setimgWidth(100)
                }
            }
        );
        if (scrollY < 50) {
            document.getElementById('navbar').classList.add("!bg-transparent")
            setimgWidth(200)
        }
        else {
            document.getElementById('navbar').classList.remove("!bg-transparent")
            setimgWidth(100)
        }
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold text-gray-700 text-[0.875rem] hover:text-gray-800 hover:underline hover:underline-offset-4 hover:decoration-2 decoration-orange-200"
            >

                <Link href="/" className="flex items-center">
                    Trang chủ
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold text-gray-700 text-[0.875rem] hover:text-gray-800 hover:underline hover:underline-offset-4 hover:decoration-2 decoration-orange-200"
            >
                <Link href="/AboutUs" className="flex items-center">
                    Giới thiệu
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold text-gray-700 text-[0.875rem] hover:text-gray-800 hover:underline hover:underline-offset-4 hover:decoration-2 decoration-orange-200"
            >
                <Link href="/Projects" className="flex items-center">
                    Dự án
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold text-gray-700 text-[0.875rem] hover:text-gray-800 hover:underline hover:underline-offset-4 hover:decoration-2 decoration-orange-200"
            >
                <Link href="/Hiring" className="flex items-center">
                    Tuyển dụng
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold text-gray-700 text-[0.875rem] hover:text-gray-800 hover:underline hover:underline-offset-4 hover:decoration-2 decoration-orange-200"
            >
                <Link href="/News" className="flex items-center">
                    Tin tức
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-semibold text-gray-700 text-[0.875rem] hover:text-gray-800 hover:underline hover:underline-offset-4 hover:decoration-2 decoration-orange-200"
            >
                <Link href="/Video" className="flex items-center">
                    Video
                </Link>
            </Typography>
            {/* <Button size="md" className="mt-1 rounded-lg sm:mt-0 max-w-[4rem]" as="li">
                <svg
                    width="13"
                    height="14"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                        fill="#CFD8DC"
                    />
                    <path
                        d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                        stroke="#CFD8DC"
                        stroke-width="2"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Button> */}
        </ul>
    );

    return (
        // <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
        <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 border-none transition-all duration-1000 backdrop-blur-none bg-opacity-100 backdrop-saturate-100 shadow-none" id="navbar">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link href="/">
                    <Image
                        src='/vvc_logo.png'
                        className="transition-all duration-1000 lg:m-2"
                        width={imgWidth}
                        height={100}
                    />
                </Link>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav} className="bg-white">
                {navList}
            </MobileNav>
        </Navbar>
        // </div>
    );
}