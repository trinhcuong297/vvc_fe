import { Meta } from "@/layout/meta";
import {
    Typography,
    Carousel,
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(
            `https://vvcbackend.onrender.com/project`
        )
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            })
    }, []);
    return <>
        <Meta title="VVC - Dự án" description="Công ty TNHH VVC Green - Bảo trì, bảo dưỡng, vận hành tòa nhà" />
        <Carousel
            className="h-screen w-full"
            loop={true}
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >

            {projects?.map((e, index) => {
                return <div className="relative h-full w-full" key={index}>
                    <img
                        src={e?.img_url}
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/40 pt-[2rem]">
                        <div className="w-1/2 px-4 text-center">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {e?.cover}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80 overflow-hidden"
                            >
                                {e?.post?.head}
                            </Typography>
                            {/* <div className="flex justify-center gap-2">
                    <Link href="/Projects">
                      <Button size="lg" color="white">
                        Explore
                      </Button>
                    </Link>
                  </div> */}
                        </div>
                    </div>
                </div>
            })}

        </Carousel>
        <div className="container max-w-5xl px-4 py-12 mx-auto my-12">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 text-gray-800">
                    <div className="text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
                        <Typography
                            variant="h1"
                            color="gray-800"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl w-full"
                        >
                            TẤT CẢ CÁC DỰ ÁN
                        </Typography>
                    </div>
                </div>
            </div>
            <section className="">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    {
                        projects?.map((e, index) => {
                            return index % 2 == 1 ? <>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div>
                                        <div className="flex items-center">
                                            <h3 className="text-2xl font-bold tracki sm:text-3xl mr-3">{e?.cover}</h3>
                                            <Link className="" href={e?.link}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                </svg>
                                            </Link>
                                        </div>
                                        <p className="mt-3 text-lg dark:text-gray-400">{e?.post?.head}</p>
                                        <div className="mt-12 space-y-6">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leadi">
                                                        {e?.post?.check1}
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leadi">
                                                        {e?.post?.check2}
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leadi">
                                                        {e?.post?.check3}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                                        <Link href={e?.link} className="">
                                            <img src={e?.img_url} alt="" className="mx-auto rounded-lg shadow-lg" />
                                        </Link>
                                    </div>
                                </div>
                            </> : <>
                                <div>
                                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                        <div className="lg:col-start-2">
                                            <div className="flex items-center">
                                                <h3 className="text-2xl font-bold tracki sm:text-3xl mr-3">{e?.cover}</h3>
                                                <Link className="" href={e?.link}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                                    </svg>
                                                </Link>
                                            </div>
                                            <p className="mt-3 text-lg dark:text-gray-400">{e?.post?.head}</p>
                                            <div className="mt-12 space-y-6">
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <h4 className="text-lg font-medium leadi">
                                                            {e?.post?.check1}
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <h4 className="text-lg font-medium leadi">
                                                            {e?.post?.check2}
                                                        </h4>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="flex-shrink-0">
                                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className="ml-4">
                                                        <h4 className="text-lg font-medium leadi">
                                                            {e?.post?.check3}
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                            <Link href={e?.link} className="">
                                                <img src={e?.img_url} alt="" className="mx-auto rounded-lg shadow-lg" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </section>
        </div>
        {/* <div className="w-full flex flex-col items-center bg-gray-100 py-[6rem] transition-all duration-1000">
            <div className="col-span-12 text-gray-800">
                <div className="text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
                    <Typography
                        variant="h1"
                        color="gray-800"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl w-full"
                    >
                        {data?.Motto?.title}
                    </Typography>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {data?.Motto?.group?.map((e, index) => {
                    return <div key={index} className="my-4 md:mx-4 lg:mx-12">
                        <Card
                            shadow={true}
                            className="relative grid h-[32rem] w-full w-[28rem] items-end justify-center overflow-hidden text-center group transition duration-1000"
                        >
                            <CardHeader
                                floated={true}
                                shadow={true}
                                color="transparent"
                                className="absolute inset-0 m-0 h-full w-full rounded-none transition-all duration-1000 bg-[url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80')] bg-cover bg-center"
                            >
                                <div className="absolute inset-0 h-0 w-full group-hover:h-full group-hover:bg-gradient-to-t group-hover:from-yellow-400/0 group-hover:via-yellow-300/80 group-hover:to-yellow-400/80 transition-all duration-1000" />
                                <div
                                    className="mb-6 font-semibold leading-[1.5] absolute w-full flex flex-col items-center rounded-lg drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]"
                                >
                                    <Typography
                                        variant="h6"
                                        className="mb-6 font-semibold drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)] rounded-b-full w-fit text-center bg-yellow-400 px-3 pt-1 pb-3 text-gray-700"
                                    >
                                        {e?.title}
                                    </Typography>
                                </div>
                            </CardHeader>
                            <CardBody className="relative py-14 px-6 md:px-12 hidden group-hover:block w-0 group-hover:w-[28rem] h-full transition-all duration-1000">
                                <Typography
                                    variant="h4"
                                    className="mb-6 font-semibold leading-[1.5] text-gray-800 transition-all duration-1000"
                                >
                                    {e?.detail}
                                </Typography>

                                <Linkvatar
                                    size="xl"
                                    variant="circular"
                                    alt="tania andrew"
                                    className="border-2 border-white"
                                    src="/vvc_logo.png"
                                />
                            </CardBody>
                        </Card>
                    </div>
                })}
            </div>

        </div>
        <div className="w-full flex flex-col items-center py-[6rem]">
            <div className="col-span-12 text-gray-800">
                <div className="text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
                    <Typography
                        variant="h1"
                        color="gray-800"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl w-full"
                    >
                        {data?.Timeline?.title}
                    </Typography>
                </div>
            </div>
            <Timeline className="max-w-[60rem] flex flex-col items-center">
                {data?.Timeline?.info?.map((e, index) => {
                    return <TimelineItem key={index} className="mb-2">
                        <TimelineConnector className="before:bg-yellow" />
                        <TimelineHeader className="">
                            <TimelineIcon color="yellow" className="drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
                                <Typography variant="h6" color="blue-gray" className="">
                                    {e?.year}
                                </Typography>
                            </TimelineIcon>
                            <Typography variant="h6" color="blue-gray" className="leading-none">
                                {e?.name}
                            </Typography>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                            <Typography variant="small" color="gary" className="font-normal text-gray-600">
                                <i>{e?.time}</i>
                            </Typography>
                            <Typography variant="small" color="gary" className="font-normal text-gray-600">
                                {e?.detail}
                            </Typography>
                        </TimelineBody>
                    </TimelineItem>
                })}
            </Timeline>
        </div>
        <section className="p-6 bg-gray-100 text-gray-800 py-[6rem]">
            <div className="col-span-12 text-gray-800">
                <div className="text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
                    <Typography
                        variant="h1"
                        color="gray-800"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl w-full"
                    >
                        {data?.Customers?.title}
                    </Typography>
                </div>
            </div>
            <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-400">
                {data?.Customers?.customer_logo?.map((e, index) => {
                    return <div className="relative flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4 p-4" key={index}>
                        <img
                            src={e}
                            className="lg:m-2 object-cover"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center backdrop-saturate-0 hover:backdrop-saturate-100"></div>
                    </div>
                })}

            </div>
        </section> */}
    </>
}