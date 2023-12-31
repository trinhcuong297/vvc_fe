import { Meta } from "@/layout/meta";
import {
    Card,
    CardHeader,
    CardBody,
    Avatar,
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Carousel,
    Button
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { About_Data } from "@/Data";

export default function AboutUs() {

    const [data, setData] = useState({});

    useEffect(() => {
        // fetch(
        //     `https://vvcbackend.onrender.com/aboutus`
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setData(data);
        //     })
        setData(About_Data);
    }, []);

    return <>
        <Meta title="VVC - Giới thiệu" description="Công ty TNHH VVC Green - Bảo trì, bảo dưỡng, vận hành tòa nhà" />
        <Carousel
            className="h-screen"
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

            {data?.Hero?.map((e, index) => {
                return <div className="relative h-full w-full" key={index}>
                    <img
                        src={e.img_url}
                        alt="Hero"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                {e.cover}
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                {e.detail}
                            </Typography>
                            <div className="flex justify-center gap-2">
                                <Button variant="outlined" className="text-white flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </Button>
                            </div>
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
                            {data?.Intro?.left}
                        </Typography>
                    </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6">
                    <div className="col-span-12 space-y-12 relative px-4 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-yellow-600 before:drop-shadow-[5px_5px_10px_rgba(255,255,153,1)]">
                        <div
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                                __html: data?.Intro?.right ? data?.Intro?.right : '',
                            }}
                            suppressHydrationWarning={true}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col items-center bg-gray-100 py-[6rem] transition-all duration-1000">
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
                            className="relative grid h-[32rem] w-[20rem] md:w-[28rem] items-end justify-center overflow-hidden text-center group transition duration-1000"
                        >
                            <CardHeader
                                floated={true}
                                shadow={true}
                                color="transparent"
                                className="absolute inset-0 m-0 h-full w-full rounded-none transition-all duration-1000 bg-cover bg-center"
                            >
                                <div className="absolute h-full w-full flex items-center">
                                    <Image
                                        src={e?.cover_img}
                                        className="lg:m-2 !object-contain px-2"
                                        fill
                                    />
                                </div>
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

                                <Avatar
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
        {/* <div className="w-full flex flex-col items-center py-[6rem]">
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
        </div> */}
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
                    return <div className="relative flex justify-center w-1/3 p-6 align-middle md:w-1/4 xl:w-1/6 p-4" key={index}>
                        <img
                            src={e}
                            className="lg:m-2 object-contain"
                        />
                        <div className="absolute inset-0 grid h-full w-full place-items-center  hover:backdrop-saturate-100"></div>
                    </div>
                })}

            </div>
        </section>
    </>
}