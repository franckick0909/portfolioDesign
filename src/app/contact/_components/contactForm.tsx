"use client";

import { AnimatedTitle } from "@/components/animatedTitle";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(formData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center max-w-[48rem] w-full">


        {/* PREMIERE PARTIE */}
        {/* PREMIERE PARTIE */}

        <div className="w-full flex items-center justify-start text-start leading-normal">
            <AnimatedTitle 
              text={[
                { text: "D'abord," },
                { text: "un" },
                { text: "peu" },
                { text: "de" },
                { text: "vous", className: "font-pinyon-script text-4xl md:text-5xl lg:text-6xl xl:text-7xl pl-2" }
              ]} 
              className="font-marcellus text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            />
        </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
        <div className="flex flex-col relative group">
          <input
            type="text"
            placeholder=" "
            onChange={handleChange}
            value={formData.name}
            name="name"
            id="name"
            className="px-0 py-1 border-b-2 border-stone-200 outline-none bg-transparent peer focus:border-b-black focus:border-b-2 text-base"
          />
          <label
            htmlFor="name"
            className="absolute left-0 transition-all duration-300 text-black text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-black peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-black"
          >
            Nom
          </label>
          <span
           className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
        </div>

        <div className="flex flex-col relative group">
          <input
            type="email"
            placeholder=" "
            onChange={handleChange}
            value={formData.email}
            name="email"
            id="email"
            className="px-0 py-1 border-b-2 border-stone-200 outline-none bg-transparent peer focus:border-b-black focus:border-b-2 text-base"
          />
          <label
            htmlFor="email"
            className="absolute left-0 transition-all duration-300 text-black text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-black peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-black"
          >
            Email
          </label>
          <span
           className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
        </div>

        <div className="flex flex-col relative group">
          <input
            type="tel"
            placeholder=" "
            onChange={handleChange}
            value={formData.phone}
            name="phone"
            id="phone"
            className="px-0 py-1 border-b-2 border-stone-200 outline-none bg-transparent peer focus:border-b-black focus:border-b-2 text-base"
          />
          <label
            htmlFor="phone"
            className="absolute left-0 transition-all duration-300 text-black text-lg tracking-wide font-inter peer-focus:text-sm peer-focus:-top-5 peer-focus:text-black peer-placeholder-shown:top-1 peer-placeholder-shown:text-lg peer-placeholder-shown:text-black peer-[&:not(:placeholder-shown)]:-top-5 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-black"
          >
            Tél
          </label>
          <span
           className="absolute bottom-0 left-0 w-full h-0.5 scale-x-0 bg-stone-400 transition-all duration-300 group-hover:scale-x-100 origin-left peer-focus:border-b-black peer-focus:border-b-2"></span>
        </div>

        {/* DEUXIEME PARTIE */}

        <div className="w-full flex items-center justify-start text-start">
            <AnimatedTitle 
              text={[
                { text: "Maintenant," },
                { text: "un" },
                { text: "peu" },
                { text: "de" },
                { text: "votre", className: "font-pinyon-script text-4xl md:text-5xl lg:text-6xl xl:text-7xl pl-2" },
                { text: "projet", className: "font-pinyon-script text-4xl md:text-5xl lg:text-6xl xl:text-7xl pl-2 pb-3" }
              ]} 
              className="font-marcellus text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
