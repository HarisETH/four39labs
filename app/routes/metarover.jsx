import React, { useEffect, useState, useRef } from "react";
export const meta = () => ({
  charset: "utf-8",
  title: "MetaRover",
  viewport: "width=device-width,initial-scale=1",
  description: "MetaRover is a fast, agile meta-tags generator within seconds. Generate Meta Tags on the flow !",
});
//uI IMPORTS

import * as Checkbox from "@radix-ui/react-checkbox";
import { CopyIcon, GitHubLogoIcon, SunIcon } from "@radix-ui/react-icons";
import * as Label from "@radix-ui/react-label";
import * as Progress from "@radix-ui/react-progress";
import * as Toast from '@radix-ui/react-toast';
import { Meta } from "@remix-run/react";
//CODE

//MIS

export default function metarover () {
  
  const [textAreaLength, settextAreaLength] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [sdark, setDark] = useState("");
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState("MetaRover from Four39Labs");
  const [desc, setDesc] = useState("MetaRover is a fast, agile meta-tags generator within seconds. Generate Meta Tags on the flow !");
  const [url, seturl] = useState("https://four39labs.vercel.app");

  const copyTags = useRef();
  const [tags, setTags] = useState("");

  const setDarkMode = () => {
    if (isDark) {
      setDark("dark");
      console.log(sdark);
    } else {
      setDark("");
      console.log(sdark);
    }
  };

  return (
    <html>
    
    <head>
     <Meta ></Meta>
    </head>
    <body>
    <section
      className={`font-dmsans min-h-screen h-full flex-col flex gap-16 w-full px-4 overflow-x-hidden md:px-12 py-12 ${sdark}`}
    >
      <nav className="flex justify-between items-center justify-self-start">
        <h1 className="text-4xl font-bold tracking-tighter flex justify-end md:justify-start md:items-end flex-col md:flex-row md:gap-2 ">
          MetaRover{" "}
          <span className="text-lg text-purple-400">from Four39Labs</span>{" "}
        </h1>

        <button
          onClick={() => {
            setDarkMode();
            setIsDark(!isDark);
          }}
          className="h-8 w-8 flex items-center border-gray-200 border bg-gray-50 justify-center rounded-md hover:bg-purple-200"
        >
          <SunIcon />
        </button>
      </nav>

      <div className="div flex lg:flex-row flex-col w-full items-center flex-grow justify-center h-full">
        <div className="w-full lg:w-1/2 lg:px-6">
          <div className="parent flex flex-col flex-1 w-full gap-6">
            
             
            <div class="preview flex flex-col w-full self-center rounded-md">
              <label className="px-2 text-bold text-gray-500">Google Preview </label>
              <div className="div flex flex-col rounded-md shadow bg-gray-100 px-4 py-3">
              <span id="titlePreview" className="text-[#035AC6]">
                {title}
              </span>

              <span id="URL" className="text-green-600">{url}</span>

              <span id="descPreview" className="text-[#9B9DA1]">
                {desc}
              </span>
              </div>
            
            </div>
            <div className="title flex flex-col justify-center">
              <Label.Root
                className="LabelRoot text-gray-500 font-medium opacity-70 gap-2"
                htmlFor="firstName"
              >
                {`Title`}
              </Label.Root>
              <input
                className=" bg-gray-50 appearance-none border-2 border-gray-200   w-full  p-2.5 px-4 text-gray-700 leading-tight rounded-lg focus:outline-none focus:bg-white focus:border-purple-500 focus:ring-purple-500 "
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                id="firstName"
                placeholder="Delicious Title goes here"
              />
            </div>
            <div className="URL flex flex-col justify-center">
              <Label.Root
                className="LabelRoot text-gray-500 font-medium opacity-70 gap-2"
                htmlFor="firstName"
              >
                {`Website URL`}
              </Label.Root>
              <input
                className=" bg-gray-50 appearance-none border-2 border-gray-200   w-full  p-2.5 px-4 text-gray-700 leading-tight rounded-lg focus:outline-none focus:bg-white focus:border-purple-500 focus:ring-purple-500 "
                type="text"
                onChange={(e) => seturl(e.target.value)}
                id="websiteurl"
                placeholder="Go like https://google.com"
              />
            </div>

            <div className="desc flex flex-col justify-center">
              <Label.Root
                className="LabelRoot text-gray-500 font-medium opacity-70 gap-2"
                htmlFor="firstName"
              >
                Description
              </Label.Root>

              <div className="div flex flex-col gap-0 relative">
                <textarea
                  onChange={(e) => {
                    settextAreaLength(e.target.value.length);
                    setDesc(e.target.value);
                    console.log(textAreaLength);
                  }}
                  className=" bg-gray-50 appearance-none border-2 border-gray-200   w-full  p-2.5 px-4 text-gray-700 leading-tight rounded-t-lg rounded-b focus:outline-none focus:bg-white focus:border-purple500 focus:border-purple-500 focus:ring-purple-500 "
                  type="text"
                  id="firstName"
                  rows="5"
                  placeholder="Cool Description goes here ⚡"
                  spellCheck={false}
                />
                <Progress.Root
                  className=" bg-gray-400 rounded-b-full absolute bottom-0  w-full  overflow-hidden h-1"
                  value={textAreaLength}
                >
                  <Progress.Indicator
                    className="bg-purple-600 w-full h-full transition-all ease-linear "
                    style={{
                      transform: `translateX(-${150 - textAreaLength}%)`,
                    }}
                  />
                </Progress.Root>
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-purple-500 border-2 border-purple-800 rounded-full -top-2 -right-2 ">
                  {textAreaLength}
                </div>
              </div>
            </div>

            <button
            onClick={() => {
              window.scrollTo({
                top:document.documentElement.scrollHeight,
                
                behaviour: 'smooth'
              })
            }}
              type="button"
              class="focus:outline-none   text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-md  px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Generate MetaTags
            </button>
          </div>
        </div>

        <div className="copier-body border border-gray-100 p-4 md:p-12 rounded-md w-full relative lg:w-1/2 ">
        <div className=" z-[100] copier text-white bg-gray-300 font-fira rounded-md">
        
        
        
        <Toast.Provider swipeDirection="right">
     <button
            onClick={() => {
              setOpen(true)
              setTimeout(() => {
                setOpen(true)
              }, 400)
              setTags(copyTags.current.innerText);
              navigator.clipboard.writeText(copyTags.current.innerText);
              console.log(tags);
              console.log(copyTags);
            }}
            className="h-8 w-8 flex  items-center opacity-50 hover:opacity-100 copier absolute right-2 top-2 border-gray-200 border bg-gray-50 justify-center rounded-md hover:bg-gray-700"
          >
            <CopyIcon />
          </button>

      <Toast.Root
      duration={2000}
        className="bg-white card rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="[grid-area:_title] font-dmsans  font-medium text-white text-[15px]">
          Code Copied ! 🎊
        </Toast.Title>
        
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
          <pre className="font-fira p-4 text-xs md:text-base overflow-auto z-50" ref={copyTags}>
            {`<!-- title -->
<title>${title}</title>
<meta property='og:title'  content='${title}'>
<meta name='twitter:title' content='${title}'>

<!-- description -->
<meta name='description'         content='${desc}'>
<meta property='og:description'  content='${desc}'>
<meta name='twitter:description' content='${desc}'>

<!-- Others -->
<meta property="og:url" content="${url}">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta property="twitter:url" content="${url}">

`}
          </pre>
        </div>
        </div>
      </div>

      <button
        type="button"
        class="text-white bg-gradient-to-br self-end justify-self-end bottom-4 left-0 sticky from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm w-fit  transition-colors px-5 py-2.5 text-center mr-2 mb-2 flex items-center justify-center gap-2"
      >
        {" "}
        <GitHubLogoIcon /> Star on Github
      </button>
    </section>
    </body>
    </html>
  );
};

// export default metarover;

// meta property="og:type" content="website">
{
  /* <meta property="og:url" content=" site url">
<meta property="og:image" content="image url">
<meta name="viewport" content="width=device-width, initial-scale=1" />
<Toast.Provider swipeDirection="right">
     <button
            onClick={() => {
              setTags(copyTags.current.innerText);
              navigator.clipboard.writeText(copyTags.current.innerText);
              console.log(tags);
              console.log(copyTags);
            }}
            className="h-8 w-8 flex items-center absolute right-2 top-2 border-gray-200 border bg-gray-50 justify-center rounded-md hover:bg-purple-200"
          >
            <CopyIcon />
          </button>

      <Toast.Root
        className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
          Scheduled: Catch up
        </Toast.Title>
        
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
<!-- Twitter -->
<meta property="twitter:url" content="https://metatags.io/">
<meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate">
<meta property="twitter:description" content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!">
<meta property="twitter:image" content="image url"></meta> */
}
