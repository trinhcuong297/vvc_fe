import { Home_Data, News_data, Project_Data, Video_Data } from "@/Data";
import { Meta } from "@/layout/meta";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Typography,
  Carousel,
  Button,
  IconButton
} from "@material-tailwind/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState({});
  const [news, setNews] = useState([]);
  const [img_data, setImgdata] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // fetch(
    //   `https://vvcbackend.onrender.com/home`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setData(data);
    //   })
    // fetch(
    //   `https://vvcbackend.onrender.com/project`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setProjects(data);
    //   })
    // fetch(
    //   `https://vvcbackend.onrender.com/news/home_news/6`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setNews(data);
    //   })
    setData(Home_Data);
    setNews(News_data.slice(0, 6));
    setProjects(Project_Data);
    setImgdata(Video_Data)
  }, []);

  return <>
    <Meta title="VVC - Bảo trì, quản lý tòa nhà" description="Công ty TNHH VVC Green - Bảo trì, bảo dưỡng, vận hành tòa nhà" />
    <div className="flex flex-col items-center bg-[#092e4a]">
      <Carousel
        className="h-screen"
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

        {data?.Hero?.map((e, index) => {
          return <div className="relative h-full w-full" key={index}>
            <img
              src={e?.img_url}
              alt="Hero"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/30">
              <div className="w-3/4 text-center md:w-2/4">
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
                  className="mb-12 opacity-80"
                >
                  {e?.detail}
                </Typography>
                <div className="flex justify-center gap-2">
                  <Link href="/AboutUs">
                    <Button variant="outlined" className="text-white flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </Button>
                  </Link>
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
                color=""
                className="mb-4 text-gray-100 text-3xl md:text-4xl lg:text-5xl w-full"
              >
                {data?.Intro?.left}
              </Typography>
            </div>
          </div>
          <div className="relative col-span-12 px-2 space-y-6">
            <div className="col-span-12 text-gray-100 font-md space-y-12 relative px-4 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-yellow-600 before:drop-shadow-[5px_5px_10px_rgba(255,255,153,1)]">
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
      <section className="bg-gray-100 text-gray-800 w-full py-12">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
          <Typography
            variant="h1"
            color="gray-800"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {data?.Feature?.title}
          </Typography>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data?.Feature?.features?.map((e, index) => {
            return <div className="flex flex-col items-center p-4" key={index}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              <h3 className="my-3 text-3xl font-semibold">{e?.name}</h3>
              <div className="space-y-1 leadi">
                <Typography
                  variant="p"
                  color="gray-800"
                  className=""
                >
                  {e?.detail}
                </Typography>
              </div>
              <div className="space-y-1 leadi">
                <Link href={`${e?.link}`}>
                  <IconButton
                    variant="text"
                    color="black"
                    size="lg"
                    className=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </IconButton>
                </Link>
              </div>
            </div>
          })}
        </div>
      </section>
      <section className="text-gray-800 w-full py-12 flex flex-col items-center">
        <div className="container mx-auto p-4 mt-6 space-y-2 text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
          <Typography
            variant="h1"
            color="yellow-400"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl text-yellow-400 shadow-inner"
          >
            DỰ ÁN
          </Typography>
        </div>
        <Carousel
          className="h-fit w-3/4 rounded-lg "
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
            return <div className="relative h-[30rem] w-full flex flex-row-reverse" key={index}>
              <img
                src={e?.img_url}
                alt="Hero"
                className="w-full md:w-1/2 object-cover"
              />
              <div className="absolute w-full px-4 text-center bg-gray-800/60 py-2 md:hidden">
                <Typography
                  variant="h2"
                  color="white"
                  className="text-2xl md:text-4xl lg:text-5xl "
                >
                  {e?.cover}
                </Typography>
              </div>
              <div className="h-full w-full place-items-center bg-black/30 pt-[2rem] hidden md:grid">
                <div className="w-full px-4 text-center">
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

      </section>
      <section className="text-gray-800 w-full py-12 bg-gray-100">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
          <Typography
            variant="h1"
            color="gray-800"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
          >
            {data?.News?.title}
          </Typography>
        </div>
        <Carousel
          className="rounded-xl md:max-w-[80rem] h-full mx-auto py-[2rem] sm:hidden"
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

          {news?.map((e, index) => {
            return <div className="relative h-full w-full px-[4rem]" key={index}>
              <Card className="mt-6 w-full">
                <div className="flex flex-col items-center">
                  <CardHeader color="none" className="relative h-56 flex flex-col items-center w-fit">
                    <img
                      src={`${e?.cover_img}`}
                      alt="card-image"
                      className="bg-cover h-full"
                    />
                  </CardHeader>
                </div>
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
                  <Link href={`/News/${news[0]?.id}`}><Button>Read More</Button></Link>
                </CardFooter>
              </Card>
            </div>
          })}
        </Carousel>
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
            <Card className="mt-6 w-1/3 m-2">
              <CardHeader color="blue-gray" className="relative h-56">
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
                <Link href={`/News/${news[0]?.id}`}><Button>Read More</Button></Link>
              </CardFooter>
            </Card>
            <Card className="mt-6 w-1/3 m-2">
              <CardHeader color="blue-gray" className="relative h-56">
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
                <Link href={`/News/${news[1]?.id}`}><Button>Read More</Button></Link>
              </CardFooter>
            </Card>
            <Card className="mt-6 w-1/3 m-2">
              <CardHeader color="blue-gray" className="relative h-56">
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
                <Link href={`/News/${news[2]?.id}`}><Button>Read More</Button></Link>
              </CardFooter>
            </Card>
          </div>

          <div className="relative h-full w-full px-[4rem] flex">
            <Card className="mt-6 w-1/3 m-2">
              <CardHeader color="blue-gray" className="relative h-56">
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
                <Link href={`/News/${news[3]?.id}`}><Button>Read More</Button></Link>
              </CardFooter>
            </Card>
            <Card className="mt-6 w-1/3 m-2">
              <CardHeader color="blue-gray" className="relative h-56">
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
                <Link href={`/News/${news[4]?.id}`}><Button>Read More</Button></Link>
              </CardFooter>
            </Card>
            <Card className="mt-6 w-1/3 m-2">
              <CardHeader color="blue-gray" className="relative h-56">
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
                <Link href={`/News/${news[5]?.id}`}><Button>Read More</Button></Link>
              </CardFooter>
            </Card>
          </div>
        </Carousel>
      </section>
      <section className="text-gray-800 w-full py-12 flex flex-col items-center">
        <div className="container mx-auto p-4 mt-6 space-y-2 text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
          <Typography
            variant="h1"
            color="yellow-400"
            className="mb-4 text-3xl md:text-4xl lg:text-5xl text-yellow-400 shadow-inner"
          >
            VIDEO
          </Typography>
        </div>
        <Carousel
          className="h-fit w-3/4 rounded-lg "
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

          {img_data?.map((e, index) => {
            return <div className="relative h-[20rem] md:h-[40rem] w-full flex flex-row-reverse" key={index}>
              <iframe
                src={e}
                alt="Hero"
                className="w-full object-cover mb-[2rem]"
                frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;" allowfullscreen
              ></iframe>
            </div>
          })}

        </Carousel>

      </section>
    </div >
  </>
}