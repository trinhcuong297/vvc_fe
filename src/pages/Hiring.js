import { Meta } from "@/layout/meta";
import {
    Card,
    Typography,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Vị trí", "Mức lương", "Hạn nộp hồ sơ", "Xem thêm"];

const TABLE_ROWS = [
    {
        name: "Lễ tân",
        job: "8-10 triệu",
        date: "20/11/2023",
    },
];

export default function Hiring() {
    return <>
        <Meta title="VVC - Giới thiệu" description="Công ty TNHH VVC Green - Bảo trì, bảo dưỡng, vận hành tòa nhà" />

        <div className="w-full flex flex-col items-center py-[12rem]">
            <div className="col-span-12 text-gray-800">
                <div className="text-center mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto before:bg-yellow-400 before:drop-shadow-[0_5px_5px_rgba(255,255,153,0.8)]">
                    <Typography
                        variant="h1"
                        color="gray-800"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl w-full"
                    >
                        Thông tin tuyển dụng
                    </Typography>
                </div>
            </div>
            <Card className="h-full w-full md:w-3/4">
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ name, job, date }, index) => (
                            <tr key={name} className="even:bg-blue-gray-50/50">
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {job}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {date}
                                    </Typography>
                                </td>
                                <td className="p-4">
                                    <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                        </svg>
                                    </Typography>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>

        </div>

    </>
}