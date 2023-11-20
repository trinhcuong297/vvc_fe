import { Meta } from "@/layout/meta";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Avatar,
    Tooltip,
    Typography,
    Carousel,
    Button,
    IconButton
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Link from "next/link";
import { News_data } from "@/Data";

export default function News() {

    const [data, setData] = useState({});
    const [news, setNews] = useState([]);
    const [active, setActive] = useState(1);

    const getItemProps = (index) =>
    ({
        variant: active === index ? "filled" : "text",
        color: "gray",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    useEffect(() => {
        // fetch(
        //     `https://vvcbackend.onrender.com/news/page/${active}`
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setNews(data);
        //     })

        // fetch(
        //     `https://vvcbackend.onrender.com/news/home_news/3`
        // )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setData(data);
        //     })
        setData(News_data.slice(0, 3))
        setNews(News_data.slice((active - 1) * 20, active * 20))
    }, [active]);

    return <>
        <Meta title="VVC - Tin tức" description="Công ty TNHH VVC Green - Bảo trì, bảo dưỡng, vận hành tòa nhà" />
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

            <div className="relative h-full w-full">
                <img
                    src={data[0]?.cover_img}
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
                            {data[0]?.title}
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            {data[0]?.pre_content}
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Link href={`/News/${data[0]?.id}`}>
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={data[1]?.cover_img}
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
                            {data[1]?.title}
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            {data[1]?.pre_content}
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Link href={`/News/${data[1]?.id}`}>
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={data[2]?.cover_img}
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
                            {data[2]?.title}
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80"
                        >
                            {data[2]?.pre_content}
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Link href={`/News/${data[2]?.id}`}>
                                <Button size="lg" color="white">
                                    Explore
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </Carousel>
        <div className="mt-[4rem]">

        </div>
        <div className="container mx-auto p-4 my-6 space-y-2 text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
            <Typography
                variant="h1"
                color="gray-800"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
                Tin tức
            </Typography>
        </div>
        <div className="w-max-[60rem] flex flex-wrap justify-center">
            {news?.map((e, index) => {
                return <div className="relative h-full w-fit p-[3rem]" key={index}>
                    <Card className="max-w-[24rem] overflow-hidden">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 rounded-none"
                        >
                            <img
                                src={e?.cover_img}
                                alt="ui/ux review check"
                                className="w-full h-full"
                            />
                        </CardHeader>
                        <CardBody>
                            <Link href={`/News/${e?.id}`}><Typography variant="h4" color="blue-gray" className="hover:text-yellow-800">
                                {e?.title}
                            </Typography>
                            </Link>
                            <Typography variant="lead" color="gray" className="mt-3 font-normal h-24 overflow-hidden">
                                {e?.pre_content}
                            </Typography>
                            ...
                        </CardBody>
                        <CardFooter className="flex items-center justify-between">
                            <div className="flex items-center -space-x-3">
                                <Tooltip content="Natali Craig">
                                    <Avatar
                                        size="sm"
                                        variant="circular"
                                        alt="natali craig"
                                        src="/vvc_logo.png"
                                        className="border-2 border-white hover:z-10"
                                    />
                                </Tooltip>
                            </div>
                            <Typography className="font-normal">{e?.created_time}</Typography>
                        </CardFooter>
                    </Card>
                </div>
            })}
        </div>
        <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-4 p-6">
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton {...getItemProps(1)}>1</IconButton>
                    <IconButton {...getItemProps(2)}>2</IconButton>
                    <IconButton {...getItemProps(3)}>3</IconButton>
                    <IconButton {...getItemProps(4)}>4</IconButton>
                    <IconButton {...getItemProps(5)}>5</IconButton>
                </div>
                <Button
                    variant="text"
                    className="flex items-center gap-2"
                    onClick={next}
                    disabled={active === 5}
                >
                    Next
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
            </div>
        </div>
    </>
}