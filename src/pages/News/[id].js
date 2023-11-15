import { Meta } from "@/layout/meta";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Carousel,
    Button,
    IconButton
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

export const getStaticPaths = async () => {
    const res = await fetch(
        `http://localhost:3000/news/all`
    );
    const result = await res.json();
    const paths = result ? result.map((tex) => {
        return {
            params: {
                id: tex.id.toString(),
            },
        };
    }) : [{
        params: {
            id: '1',
        },
    }];

    return {
        paths,
        fallback: true,
    };
};
export const getStaticProps = (context) => {
    const { id } = context.params;
    return {
        props: { id },
    };
};

export default function Page({ id }) {
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
        fetch(
            `http://localhost:3000/news/id/${id}`
        )
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
        fetch(
            `http://localhost:3000/news/home_news/6`
        )
            .then((res) => res.json())
            .then((data) => {
                setNews(data);
            })
    }, []);
    return <div>
        <Meta title="VVC - Tin tức" description="Công ty TNHH VVC Green - Bảo trì, bảo dưỡng, vận hành tòa nhà" />
        <div className="mt-[8rem] flex flex-col items-center">
            <main className="mt-10 px-2 md:px-6 lg:px-12 md:w-3/4">

                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                            {data?.title}
                        </h2>
                        <Typography className="mb-2 text-gray-400">
                            <i>{data?.created_time}</i>
                        </Typography>
                        <a
                            href="#"
                            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                        >
                            Cryptocurrency
                        </a>
                    </div>

                    <img src={data?.cover_img} className="h-[28em] w-full object-cover lg:rounded" />
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-12 mb-6">

                    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                        <div className="lg:px-0 my-4 text-gray-700 text-lg leading-relaxed w-full">
                            <Typography className="font-semibold">
                                {data?.pre_content}
                            </Typography>
                        </div>
                        <div
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                                __html: data?.content ? data?.content : '',
                            }}
                            suppressHydrationWarning={true}
                        />
                    </div>

                    <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                        <div className="p-4 border-t border-b md:border md:rounded">
                            <div className="flex py-2">
                                <img src="https://randomuser.me/api/portraits/men/97.jpg"
                                    className="h-10 w-10 rounded-full mr-2 object-cover" />
                                <div>
                                    <p className="font-semibold text-gray-700 text-sm"> Mike Sullivan </p>
                                    <p className="font-semibold text-gray-600 text-xs"> Editor </p>
                                </div>
                            </div>
                            <p className="text-gray-700 py-3">
                                Mike writes about technology
                                Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
                            </p>
                            {/* <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                                Follow
                                <i className='bx bx-user-plus ml-2' ></i>
                            </button> */}
                        </div>
                    </div>

                </div>
                <hr />
                <div className="container mx-auto p-4 my-6 space-y-2 text-center before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
                    <Typography
                        variant="h1"
                        color="gray-800"
                        className="text-3xl md:text-4xl lg:text-5xl"
                    >
                        Xem thêm
                    </Typography>
                </div>
                <Carousel
                    className="rounded-xl md:max-w-[80rem] h-full mx-auto py-[2rem] hidden sm:flex"
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="black"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="black"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                />
                            </svg>
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="black"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-4 -translate-y-2/4"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="black"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </IconButton>
                    )}
                >
                    <div className="relative h-full w-full px-[4rem] flex">
                        <Card className="mt-6 w-1/3 m-6">
                            <CardHeader color="blue-gray" className="relative h-fit">
                                <img
                                    src={`${news[0]?.cover_img}`}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {news[0]?.title}
                                </Typography>
                                <Typography className="mb-2 text-gray-400">
                                    <i>{news[0]?.created_time}</i>
                                </Typography>
                                <Typography className="overflow-clip h-20">
                                    {news[0]?.pre_content}
                                </Typography>...
                            </CardBody>
                            <CardFooter className="pt-0 flex flex">
                                <a href={`/News/${news[0]?.id}`}><Button>Read More</Button></a>
                            </CardFooter>
                        </Card>
                        <Card className="mt-6 w-1/3 m-6">
                            <CardHeader color="blue-gray" className="relative h-fit">
                                <img
                                    src={`${news[1]?.cover_img}`}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {news[1]?.title}
                                </Typography>
                                <Typography className="mb-2 text-gray-400">
                                    <i>{news[1]?.created_time}</i>
                                </Typography>
                                <Typography className="overflow-clip h-20">
                                    {news[1]?.pre_content}
                                </Typography>...
                            </CardBody>
                            <CardFooter className="pt-0 flex flex">
                                <a href={`/News/${news[1]?.id}`}><Button>Read More</Button></a>
                            </CardFooter>
                        </Card>
                        <Card className="mt-6 w-1/3 m-6">
                            <CardHeader color="blue-gray" className="relative h-fit">
                                <img
                                    src={`${news[2]?.cover_img}`}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {news[2]?.title}
                                </Typography>
                                <Typography className="mb-2 text-gray-400">
                                    <i>{news[2]?.created_time}</i>
                                </Typography>
                                <Typography className="overflow-clip h-20">
                                    {news[2]?.pre_content}
                                </Typography>...
                            </CardBody>
                            <CardFooter className="pt-0 flex flex">
                                <a href={`/News/${news[2]?.id}`}><Button>Read More</Button></a>
                            </CardFooter>
                        </Card>
                    </div>

                    <div className="relative h-full w-full px-[4rem] flex">
                        <Card className="mt-6 w-1/3 m-6">
                            <CardHeader color="blue-gray" className="relative h-fit">
                                <img
                                    src={`${news[3]?.cover_img}`}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {news[3]?.title}
                                </Typography>
                                <Typography className="mb-2 text-gray-400">
                                    <i>{news[3]?.created_time}</i>
                                </Typography>
                                <Typography className="overflow-clip h-20">
                                    {news[3]?.pre_content}
                                </Typography>...
                            </CardBody>
                            <CardFooter className="pt-0 flex flex">
                                <a href={`/News/${news[3]?.id}`}><Button>Read More</Button></a>
                            </CardFooter>
                        </Card>
                        <Card className="mt-6 w-1/3 m-6">
                            <CardHeader color="blue-gray" className="relative h-fit">
                                <img
                                    src={`${news[4]?.cover_img}`}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {news[4]?.title}
                                </Typography>
                                <Typography className="mb-2 text-gray-400">
                                    <i>{news[4]?.created_time}</i>
                                </Typography>
                                <Typography className="overflow-clip h-20">
                                    {news[4]?.pre_content}
                                </Typography>...
                            </CardBody>
                            <CardFooter className="pt-0 flex flex">
                                <a href={`/News/${news[4]?.id}`}><Button>Read More</Button></a>
                            </CardFooter>
                        </Card>
                        <Card className="mt-6 w-1/3 m-6">
                            <CardHeader color="blue-gray" className="relative h-fit">
                                <img
                                    src={`${news[5]?.cover_img}`}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {news[5]?.title}
                                </Typography>
                                <Typography className="mb-2 text-gray-400">
                                    <i>{news[5]?.created_time}</i>
                                </Typography>
                                <Typography className="overflow-clip h-20">
                                    {news[5]?.pre_content}
                                </Typography>...
                            </CardBody>
                            <CardFooter className="pt-0 flex flex">
                                <a href={`/News/${news[5]?.id}`}><Button>Read More</Button></a>
                            </CardFooter>
                        </Card>
                    </div>
                </Carousel>
            </main>
        </div>
    </div>
}