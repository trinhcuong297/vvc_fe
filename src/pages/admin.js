import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
    Tabs,
    TabsHeader,
    Tab,
    TabsBody,
    TabPanel
} from "@material-tailwind/react";
import Image from "next/image";
import { useSelector, useDispatch } from 'react-redux'
import { setLogin, setLogout } from "@/redux/feature/login";
import { Meta } from "@/layout/meta";
import { useEffect, useState } from "react";

export default function LoginCard() {
    const [activeTab, setActiveTab] = useState("html");
    const loginState = useSelector(state => state.loginState.value)
    const dispatch = useDispatch()
    const handleLogin = (event) => {
        event.preventDefault();
        const Data = {
            Email: event.target.Email.value,
            Password: event.target.Password.value
        }
        fetch(`http://localhost:3000/admin/login`, {
            method: "POST",
            body: JSON.stringify(Data),
            headers: {
                "content-type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res == 1) {
                    dispatch(setLogin())
                }
                else {
                    dispatch(setLogout())
                }
            })
    }

    useEffect(() => { }, [loginState])
    const data = [
        {
            label: "HTML",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Vue",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Angular",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Svelte",
            value: "svelte",
            desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    return (
        <div className="w-full h-screen mt-[12rem] flex justify-center">
            <Meta title="VVC - Admin dashboard" description="Công ty TNHH VVC Green - Bảo trì, bảo dưỡng, vận hành tòa nhà" />
            <form onSubmit={handleLogin} className={loginState ? "hidden" : ""}>
                <Card className="w-96">
                    <CardHeader
                        // variant="gradient"
                        // color="gray"
                        className="mb-8 grid h-fit place-items-center shadow-none"
                    >
                        <Image src={`/vvc_logo.png`} width={300} height={300} />
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Email" size="lg" name="Email" />
                        <Input label="Password" size="lg" name="Password" type="password" />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" fullWidth type="submit">
                            Sign In
                        </Button>
                        <a href="/">
                            <Typography variant="small" className="mt-6 flex justify-center">
                                Forgot your password?
                            </Typography>
                        </a>
                    </CardFooter>
                </Card>
            </form>
            <Tabs value={activeTab} className={!loginState ? "hidden" : "w-full px-1 md:px-6 lg:px-12"}>
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={activeTab === value ? "text-gray-900" : ""}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
}