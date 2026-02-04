'use client'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Me from "@/public/me.jpg"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import MessageHandler from "@/actions/MessageHandler";

export default function Home() {
  const [formData, setFormData] = useState({
    subject: "",
    message: ""
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setFormData({
      subject: '',
      message: ''
    })

    await MessageHandler(formData.subject, formData.message)
  }


  return (
    <div className="min-h-screen sm:max-w-2xl md:max-w-full mx-auto pt-4 ">
      <Card className="shadow-2xl/10 shadow-accent-foreground mx-2">
        <CardHeader className="text-center text-blue-500 md:text-4xl text-2xl text-shadow-sm">
          <div className="relative md:h-220 md:w-180 h-95 w-70 sm:w-125 sm:h-160 mx-auto my-2">
            <Image src={Me} className="grayscale duration-300 border-border/70 border-24 rounded-t-full shadow-2xl/5 shadow-accent-foreground" fill objectFit="cover" alt="A photo of me." />
          </div>
          <CardTitle className="leading-relaxed my-8 text-lg sm:text-2xl"><span className="mx-2">Hey! 👋</span>I'm <span className="font-extrabold">Dominick</span>! I create unique web experiences using clean, <span className="font-light underline italic">PRODUCTION READY</span> code 🚀</CardTitle>
          <CardDescription className="border-t-4">
            <h1 className="text-3xl pt-8 font-extrabold text-blue-500">Skills</h1>
            <div className="py-8 grid md:grid-cols-4 grid-cols-2 gap-4 [&>div]:hover:scale-95 [&>div]:border-border [&>div]:border-4 [&>div]:hover:shadow-2xl/10 [&>div]:hover:shadow-accent-foreground [&>div]:duration-300">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-500 font-extrabold">FRONTEND</CardTitle>
                </CardHeader>
                <CardDescription>
                  <ul className="[&>li]:my-2 font-extrabold">
                    <li>JavaScript</li>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>TailwindCSS</li>
                  </ul>
                </CardDescription>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-500 font-extrabold">BACKEND</CardTitle>
                </CardHeader>
                <CardDescription>
                  <ul className="[&>li]:my-2 font-extrabold">
                    <li>Java</li>
                    <li>Spring Framework</li>
                    <li>MariaDB</li>
                    <li>PostgreSQL</li>
                    <li>Maven</li>
                  </ul>
                </CardDescription>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-500 font-extrabold">DEVOPS</CardTitle>
                </CardHeader>
                <CardDescription>
                  <ul className="[&>li]:my-2 font-extrabold">
                    <li>Grafana</li>
                    <li>Proxmox</li>
                    <li>GitHub</li>
                    <li>VMWare</li>
                    <li>Docker</li>
                  </ul>
                </CardDescription>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg text-blue-500 font-extrabold">SYSTEMS</CardTitle>
                </CardHeader>
                <CardDescription>
                  <ul className="[&>li]:my-2 font-extrabold">
                    <li>Linux</li>
                    <li>Postman</li>
                    <li>Jira</li>
                    <li>Confluence</li>
                    <li>Windows</li>
                  </ul>
                </CardDescription>
              </Card>
            </div>
            <div className="border-t-4">
              <h1 className="text-3xl text-blue-500 font-extrabold py-8">Get in touch!</h1>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <Label htmlFor="subject">Subject</Label>
                  <Input placeholder="Type your subject here." required onChange={handleChange} value={formData.subject} className="my-2" type="text" name="subject" id="subject" />
                  <Label htmlFor="message">Message</Label>
                  <Textarea required onChange={handleChange} className="my-2" value={formData.message} name="message" id="message" placeholder="Type your message here." rows={20} />
                  <Input type="submit" value={"Send Message"} className="hover:bg-blue-500 hover:text-white duration-300 transition-all mt-4 dark:hover:bg-blue-500 hover:font-extrabold" />
                </form>
              </div>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </div >
  )
}
