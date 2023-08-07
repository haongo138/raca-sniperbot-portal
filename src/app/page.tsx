"use client"
import React, { Fragment } from 'react'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Private Transactions',
    description: 'Shield your trades, outsmart sandwich attacks.',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Limit Orders',
    description: 'Buy low, sell high. Execute your strategy with precision.',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Early Contract Insights',
    description: 'Test your sales ahead and maximize your selling potential.',
    href: '##',
    icon: IconThree,
  },
  {
    name: 'Copy Trading',
    description: 'Trade like the pros, front-run & replicate their wins.',
    href: '##',
    icon: IconThree,
  },
]

const community = [
  {
    name: 'Updates',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Blog (Coming Soon)',
    href: '##',
    icon: IconTwo,
  },
]

const socials = [
  {
    name: 'Twitter',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Telegram',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Gitbook',
    href: '##',
    icon: IconThree,
  },
]

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}

export default function Home() {
  return (
    <main className="overflow-hidden relative">
      <div className="absolute left-0 z-0 w-full min-h-[80vh] aspect-auto top-[-80px]">
        <Image src="/media/hero-bg.png" width="1000" height="800" alt="" loading="lazy" decoding="async" style={{ position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: "transparent" }} sizes="100vw" />
      </div>
      <nav className="relative z-20 bg-transparent">
        <div className="flex flex-wrap gap-y-5 items-center py-5 px-6 mx-auto max-w-7xl md:px-12">
          <a className="flex gap-x-0 items-center" href="/">
            <Image src="/media/logo.png" alt="Logo" loading="lazy" width="48" height="48" decoding="async" className="block rounded-full" style={{ color: "transparent" }} />
            <span className="text-xl font-black uppercase text-foreground">RACA SNIPER BOT<span className="text-mochi">.</span></span>
          </a>
          <div className="order-1 ml-auto md:order-2 md:ml-10">
            <div className="flex relative" data-headlessui-state="">
              <button className="outline-none h-full flex gap-x-1 items-center justify-center flex-shrink-0 font-semibold transition-all duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed bg-white-pure text-foreground border-[1.5px] border-black/15% shadow-md rounded-lg active:translate-y-0.5 text-sm px-3 py-1" type="button" aria-expanded="false" data-headlessui-state="" id="headlessui-popover-button-:r0:">Connect Wallet</button>
              <div style={{ position: "fixed", zIndex: 9999, inset: "0px auto auto 0px", transform: "translate(649px, 51px)", }}></div>
            </div>
          </div>
          <div className="flex flex-wrap items-stretch gap-y-2 order-2 gap-x-10 justify-center mx-auto md:order-1 md:justify-start md:mx-0 md:ml-auto basis-full md:basis-[auto]">
            <Popover className="flex relative">
              <Popover.Button className="outline-none h-full group inline-flex items-center">
                <span className="text-sm font-semibold">Features</span>
                <ChevronDownIcon
                  className="h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80 ui-open:rotate-180 ui-open:transform"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="fixed z-9999 mt-8 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative flex-col gap-8 bg-white p-7 lg:grid-cols-2">
                      {features.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 pb-5 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="flex relative">
              <Popover.Button className="outline-none h-full group inline-flex items-center">
                <span className="text-sm font-semibold">Community</span>
                <ChevronDownIcon
                  className="h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80 ui-open:rotate-180 ui-open:transform"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="fixed z-9999 mt-8 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative flex-col gap-8 bg-white p-7 lg:grid-cols-2">
                      {community.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 pb-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="flex relative">
              <Popover.Button className="outline-none h-full group inline-flex items-center">
                <span className="text-sm font-semibold">Socials</span>
                <ChevronDownIcon
                  className="h-5 w-5 transition duration-150 ease-in-out group-hover:text-opacity-80 ui-open:rotate-180 ui-open:transform"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="fixed z-9999 mt-8 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative flex-col gap-8 bg-white p-7 lg:grid-cols-2">
                      {socials.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-lg p-2 pb-3 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                            <item.icon aria-hidden="true" />
                          </div>
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {item.name}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </div>
        </div>
      </nav>
      <div className="flex relative justify-center items-center py-2 space-x-2 w-full text-sm bg-black">
        <span className="font-semibold text-white">Telegram Sniper Bot - Community Prize</span>
        <span className="flex items-center py-1 px-3 text-xs font-semibold text-black uppercase rounded-full" style={{ background: "linear-gradient(90deg, #F4C4C2 0%, #EEC3FD 48.96%, #8FC6E4 100%)" }}>
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="mr-1 w-4 iconify iconify--heroicons" width="1em" height="1em" viewBox="0 0 20 20">
            <path fill="currentColor" fill-rule="evenodd" d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 0 0-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 0 0-.552.698a5 5 0 0 0 4.503 5.152a6 6 0 0 0 2.946 1.822A6.451 6.451 0 0 1 7.768 13H7.5A1.5 1.5 0 0 0 6 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 0 0-1.5-1.5h-.268a6.453 6.453 0 0 1-.684-2.202a6 6 0 0 0 2.946-1.822a5 5 0 0 0 4.503-5.152a.75.75 0 0 0-.552-.698A31.804 31.804 0 0 0 16 2.562v-.387a.75.75 0 0 0-.629-.74A33.227 33.227 0 0 0 10 1ZM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 0 1-1.855-2.68Zm14.95 0a3.503 3.503 0 0 1-1.854 2.68A5.974 5.974 0 0 0 16 5v-.91c.496.099.988.21 1.475.332Z" clip-rule="evenodd"></path>
          </svg>1st place
        </span>
      </div>
      <div className="flex relative flex-col-reverse justify-between px-6 md:px-12 lg:flex-row lg:mt-40 body-block h-[600px] xl:h-[450px]">
        <div className="flex relative z-10 flex-col">
          <p className="max-w-xl text-3xl md:text-5xl">Bring <span className="text-[#f17975]">seamless and lightning-fast</span> trading experience to your <span className="text-[#55b0fa]">Telegram</span> playground.</p>
          <span className="mt-5 max-w-xl text-sm md:text-xl">Smooth UI/UX setup for easily management, automated rug detection, detailed early CA insights, etc.</span>
          <div className="flex gap-x-5 items-center mt-10">
            <button disabled={false} className="flex gap-x-2 items-center rounded-lg px-4 py-2 font-semibold text-white text-mochi bg-discord shadow">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5 iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24" style={{ color: "white" }}>
                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"></path>
              </svg>
              <div>Discord Bot</div>
              <span className="py-0.5 px-2 font-medium text-gray-800 uppercase bg-gray-100 rounded-full text-[10px]">coming soon</span>
            </button>
            <a href="#" target="_blank" rel="noreferrer" className="flex gap-x-2 items-center rounded-lg px-4 py-2 font-semibold text-black bg-white shadow">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5 iconify iconify--logos" width="1em" height="1em" viewBox="0 0 256 256" style={{ color: "white" }}><defs><linearGradient id="iconifyReact2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE"></stop><stop offset="100%" stop-color="#229ED9"></stop></linearGradient></defs><path fill="url(#iconifyReact2)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"></path><path fill="#FFF" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"></path></svg>
              <div className="whitespace-nowrap">Telegram Bot</div>
            </a>
          </div>
        </div>
        <div className="absolute -right-32 -top-1/3 w-2/3 h-full">
          <div className="absolute top-0 left-0">
            <Image src="/media/rings.webp" alt="" loading="lazy" width="1777" height="1776" decoding="async" style={{ color: "transparent" }} />
          </div>
        </div>
        <div className="flex relative flex-1 justify-center items-center lg:justify-end lg:items-start">
          <Image src="/media/rocket_raca.png" alt="" loading="lazy" width="480" height="297" decoding="async" style={{ color: "transparent" }} />
        </div>
      </div>
      <div className="flex flex-col mt-32 lg:mt-5">
        <p className="mx-auto mb-2 text-3xl text-mochi">Integrated Chains</p>
        <div className="flex overflow-hidden py-3 w-20 h-20 marquee-container">
          <div className="overlay" style={{"--gradient-color": "rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)", "--gradient-width": "200px"} as React.CSSProperties}></div>
          <div className="marquee" style={{"--play": "running", "--direction": "reverse", "--duration": "20s", "--delay": "0s", "--iteration-count": "infinite"} as React.CSSProperties}>
            <img className="h-full duration-100 ease-in-out mx-7 md:mx-10" src="/media/eth.png" alt="eth-logo" style={{ transitionProperty: "filter" }} />
            <img className="h-full duration-100 ease-in-out mx-7 md:mx-10" src="/media/arbitrum.png" alt="arbitrum-logo" style={{ transitionProperty: "filter" }} />
            <img className="h-full duration-100 ease-in-out mx-7 md:mx-10" src="/media/bsc.png" alt="bsc-logo" style={{ transitionProperty: "filter" }} />
          </div>
          <div className="marquee" aria-hidden="true" style={{"--play": "running", "--direction": "reverse", "--duration": "20s", "--delay": "0s", "--iteration-count": "infinite"} as React.CSSProperties}>
            <img className="h-full duration-100 ease-in-out mx-7 md:mx-10" src="/media/eth.png" alt="eth-logo" style={{ transitionProperty: "filter" }} />
            <img className="h-full duration-100 ease-in-out mx-7 md:mx-10" src="/media/arbitrum.png" alt="arbitrum-logo" style={{ transitionProperty: "filter" }} />
            <img className="h-full duration-100 ease-in-out mx-7 md:mx-10" src="/media/bsc.png" alt="bsc-logo" style={{ transitionProperty: "filter" }} />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-6 md:px-12 body-block delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0">
        <div className="flex flex-col gap-y-2 items-start mx-auto mt-36 md:items-center">
          <p className="text-4xl">Features</p>
          <span className="text-xl">Our trading bot has a comprehensive suite of features designed to help you win. All free-to-use.</span>
        </div>
        <div className="grid grid-cols-1 grid-rows-4 gap-6 mt-10 md:grid-cols-2 md:grid-rows-2">
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex relative justify-center items-center p-4 w-16 h-16">
              <Image src="/media/icon-container.webp" width={100} height={100} alt="" loading="lazy" decoding="async" sizes="100vw" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent", }} />
              <Image src="/media/private_tx.png" alt="" loading="lazy" width="40" height="40" decoding="async" className="relative" style={{ color: "transparent" }} />
            </div>
            <p className="mt-2 text-xl">Private Transactions</p>
            <span className="mt-1 text-base">Shield your trades, outsmart sandwich attacks.</span>
          </div>
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex relative justify-center items-center p-4 w-16 h-16">
              <Image src="/media/icon-container.webp" width={100} height={100} alt="" loading="lazy" decoding="async" sizes="100vw" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent", }} />
              <Image src="/media/limit-order.png" alt="" loading="lazy" width="40" height="40" decoding="async" className="relative" style={{ color: "transparent" }} />
            </div>
            <p className="mt-2 text-xl">Limit Orders</p>
            <span className="mt-1 text-base">Buy low, sell high. Execute your strategy with precision.</span>
          </div>
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex relative justify-center items-center p-4 w-16 h-16">
              <Image src="/media/icon-container.webp" width={100} height={100} alt="" loading="lazy" decoding="async" sizes="100vw" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent", }} />
              <Image src="/media/lighting.png" alt="" loading="lazy" width="40" height="40" decoding="async" className="relative" style={{ color: "transparent" }} />
            </div>
            <p className="mt-2 text-xl">Early Contract Analysis</p>
            <span className="mt-1 text-base">Test your sales ahead and maximize your selling potential.</span>
          </div>
          <div className="flex flex-col items-start p-6 bg-white rounded-lg border border-gray-200">
            <div className="flex relative justify-center items-center p-4 w-16 h-16">
              <Image src="/media/icon-container.webp" width={100} height={100} alt="" loading="lazy" decoding="async" sizes="100vw" style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent", }} />
              <Image src="/media/copytrading.png" alt="" loading="lazy" width="40" height="40" decoding="async" className="relative" style={{ color: "transparent" }} />
            </div>
            <p className="mt-2 text-xl">Copy Trading</p>
            <span className="mt-1 text-base">Trade like the pros, front-run & replicate their wins.</span>
          </div>
        </div>
      </div>
      <div className="px-6 md:px-12 body-block">
        <div className="flex flex-col gap-y-2 items-start mx-auto mt-36 md:items-center">
          <p className="text-4xl">NFT Ownership = WAGMI</p>
          <span className="text-xl">Huge rewards are coming for Raca Golden NFT Holders</span>
        </div>
        <div className="flex flex-col gap-y-8 justify-between mt-16 md:flex-row md:gap-y-0 md:mt-32">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl">Revenue Sharing</p>
            <span className="text-base">Revenue from transaction fee, NFT sales will weekly be shared & send directly<br />to Golden NFT holder wallets.</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-xl">Advanced Tracking Features</p>
            <span className="text-base">Quick catch up on market movement and you might<br />see some steals in there.</span>
          </div>
        </div>
        <div className="mt-10">
          <Image src="/media/nft-rarity-ranking.jpg" alt="" loading="lazy" width="2048" height="1025" decoding="async" style={{ color: "transparent" }} />
        </div>
      </div>
      <div className="flex flex-col mt-20">
        <p className="mx-auto mb-2 text-3xl text-mochi">Community Expectation</p>
        <div className="body-block px-6 md:px-12">
          <div className="relative bg-white rounded-xl shadow-md">
            <div className="relative p-9 lg:p-12">
              <div className="flex lg:flex-row flex-col items-center justify-between gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold uppercase text-mochi-gradient">1,000+</div>
                  <p className="text-gray-600">users</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold uppercase text-mochi-gradient">10,000+</div>
                  <p className="text-gray-600">usages per day</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold uppercase text-mochi-gradient">400+</div>
                  <p className="text-gray-600">NFT purchased</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="px-6 md:px-12 body-block">
          <div style={{ backgroundImage: "url(/dot-bg.png), linear-gradient(90deg, #FCBCC8 0%, #D3A7F3 100%)", backgroundSize: "cover", backgroundBlendMode: "overlay", height: "300px" }} className="flex relative flex-col justify-center items-center p-10 rounded-lg">
            <p className="text-lg text-center md:text-3xl">Boost up your wealth. For Free ✨✨</p>
            <a href="#" target="_blank" rel="noreferrer" className="flex gap-x-2 items-center rounded-lg px-2 py-2 font-semibold text-mochi bg-white mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 168.3 193.8" style={{ enableBackground: "new 0 0 168.3 193.8" } as React.CSSProperties} xmlSpace="preserve">
                <path className="st0" d="M66,44.1c-2.1-0.3-2.2-0.4-1.2-0.5c1.9-0.3,6.3,0.1,9.4,0.8c7.2,1.7,13.7,6.1,20.6,13.8l1.8,2.1l2.6-0.4  c11.1-1.8,22.5-0.4,32,4c2.6,1.2,6.7,3.6,7.2,4.2c0.2,0.2,0.5,1.5,0.7,2.8c0.7,4.7,0.4,8.2-1.1,10.9c-0.8,1.5-0.8,1.9-0.3,3.2  c0.4,1,1.6,1.7,2.7,1.7c2.4,0,4.9-3.8,6.1-9.1l0.5-2.1l0.9,1c5.1,5.7,9.1,13.6,9.7,19.2l0.2,1.5l-0.9-1.3c-1.5-2.3-2.9-3.8-4.8-5.1  c-3.4-2.3-7-3-16.5-3.5c-8.6-0.5-13.5-1.2-18.3-2.8c-8.2-2.7-12.4-6.2-22.1-19.1c-4.3-5.7-7-8.8-9.7-11.4  C79.6,48.3,73.7,45.3,66,44.1z" />
                <path className="st0" d="M140.5,56.8c0.2-3.8,0.7-6.3,1.8-8.6c0.4-0.9,0.8-1.7,0.9-1.7c0.1,0-0.1,0.7-0.4,1.5c-0.8,2.2-0.9,5.3-0.4,8.8  c0.7,4.5,1,5.1,5.8,10c2.2,2.3,4.8,5.2,5.8,6.4l1.7,2.2l-1.7-1.6c-2.1-2-6.9-5.8-8-6.3c-0.7-0.4-0.8-0.4-1.3,0.1  c-0.4,0.4-0.5,1-0.5,3.9c-0.1,4.5-0.7,7.3-2.2,10.2c-0.8,1.5-0.9,1.2-0.2-0.5c0.5-1.3,0.6-1.9,0.6-6.2c0-8.7-1-10.8-7.1-14.3  c-1.5-0.9-4.1-2.2-5.6-2.9c-1.6-0.7-2.8-1.3-2.7-1.3c0.2-0.2,6.1,1.5,8.4,2.5c3.5,1.4,4.1,1.5,4.5,1.4  C140.2,60.1,140.4,59.3,140.5,56.8z" />
                <path className="st0" d="M70.1,71.7c-4.2-5.8-6.9-14.8-6.3-21.5l0.2-2.1l1,0.2c1.8,0.3,4.9,1.5,6.4,2.4c4,2.4,5.8,5.7,7.5,13.9  c0.5,2.4,1.2,5.2,1.5,6.1c0.5,1.5,2.4,5,4,7.2c1.1,1.6,0.4,2.4-2.1,2.2C78.5,79.7,73.4,76.2,70.1,71.7z" />
                <path className="st0" d="M135.4,115.2c-19.8-8-26.8-14.9-26.8-26.6c0-1.7,0.1-3.1,0.1-3.1c0.1,0,0.8,0.6,1.7,1.3c4,3.2,8.5,4.6,21,6.4  c7.3,1.1,11.5,1.9,15.3,3.2c12.1,4,19.6,12.2,21.4,23.3c0.5,3.2,0.2,9.3-0.6,12.5c-0.7,2.5-2.7,7.1-3.2,7.2c-0.1,0-0.3-0.5-0.3-1.3  c-0.2-4.2-2.3-8.2-5.8-11.3C154,123.2,148.6,120.5,135.4,115.2z" />
                <path className="st0" d="M121.4,118.5c-0.2-1.5-0.7-3.4-1-4.2l-0.5-1.5l0.9,1.1c1.3,1.5,2.3,3.3,3.2,5.8c0.7,1.9,0.7,2.5,0.7,5.6  c0,3-0.1,3.7-0.7,5.4c-1,2.7-2.2,4.6-4.2,6.7c-3.6,3.7-8.3,5.7-15,6.6c-1.2,0.1-4.6,0.4-7.6,0.6c-7.5,0.4-12.5,1.2-17,2.8  c-0.6,0.2-1.2,0.4-1.3,0.3c-0.2-0.2,2.9-2,5.4-3.2c3.5-1.7,7.1-2.6,15-4c3.9-0.6,7.9-1.4,8.9-1.8C118.1,135.6,123,127.9,121.4,118.5  z" />
                <path className="st0" d="M130.5,134.6c-2.6-5.7-3.2-11.1-1.8-16.2c0.2-0.5,0.4-1,0.6-1c0.2,0,0.8,0.3,1.4,0.7c1.2,0.8,3.7,2.2,10.1,5.7  c8.1,4.4,12.7,7.8,15.9,11.7c2.8,3.4,4.5,7.3,5.3,12.1c0.5,2.7,0.2,9.2-0.5,11.9c-2.2,8.5-7.2,15.3-14.5,19.2c-1.1,0.6-2,1-2.1,1  c-0.1,0,0.3-1,0.9-2.2c2.4-5.1,2.7-10,0.9-15.5c-1.1-3.4-3.4-7.5-8-14.4C133.2,139.6,131.9,137.5,130.5,134.6z" />
                <path className="st0" d="M56,165.2c7.4-6.2,16.5-10.6,24.9-12c3.6-0.6,9.6-0.4,12.9,0.5c5.3,1.4,10.1,4.4,12.6,8.1  c2.4,3.6,3.5,6.7,4.6,13.6c0.4,2.7,0.9,5.5,1,6.1c0.8,3.6,2.4,6.4,4.4,7.9c3.1,2.3,8.5,2.4,13.8,0.4c0.9-0.3,1.7-0.6,1.7-0.5  c0.2,0.2-2.5,2-4.3,2.9c-2.5,1.3-4.5,1.7-7.2,1.7c-4.8,0-8.9-2.5-12.2-7.5c-0.7-1-2.1-3.9-3.3-6.6c-3.5-8.1-5.3-10.5-9.4-13.2  c-3.6-2.3-8.2-2.8-11.7-1.1c-4.6,2.2-5.8,8.1-2.6,11.7c1.3,1.5,3.7,2.7,5.7,3c3.7,0.5,6.9-2.4,6.9-6.1c0-2.4-0.9-3.8-3.3-4.9  c-3.2-1.4-6.7,0.2-6.6,3.3c0,1.3,0.6,2.1,1.9,2.7c0.8,0.4,0.8,0.4,0.2,0.3c-2.9-0.6-3.6-4.2-1.3-6.5c2.8-2.8,8.7-1.6,10.7,2.3  c0.8,1.6,0.9,4.8,0.2,6.8c-1.7,4.4-6.5,6.7-11.4,5.4c-3.3-0.9-4.7-1.8-8.7-5.9c-7-7.2-9.7-8.6-19.7-10.1l-1.9-0.3L56,165.2z" />
                <path className="st1" d="M3.4,4.3c23.3,28.3,59.2,72.3,61,74.7c1.5,2,0.9,3.9-1.6,5.3c-1.4,0.8-4.3,1.6-5.7,1.6c-1.6,0-3.5-0.8-4.8-2.1  c-0.9-0.9-4.8-6.6-13.6-20.3c-6.7-10.5-12.4-19.2-12.5-19.3C25.8,44,25.8,44,38,65.8C45.7,79.5,48.2,84.4,48.2,85c0,1.3-0.4,2-2,3.8  c-2.7,3-3.9,6.4-4.8,13.5c-1,7.9-3.7,13.5-11.4,23c-4.5,5.6-5.2,6.6-6.3,8.9c-1.4,2.8-1.8,4.4-2,8c-0.2,3.8,0.2,6.2,1.3,9.8  c1,3.2,2.1,5.3,4.8,9.4c2.3,3.6,3.7,6.3,3.7,7.3c0,0.8,0.2,0.8,3.8,0c8.6-2,15.7-5.4,19.6-9.6c2.4-2.6,3-4,3-7.6  c0-2.3-0.1-2.8-0.7-4.2c-1-2.2-2.9-4-7-6.8c-5.4-3.7-7.7-6.7-8.3-10.7c-0.5-3.4,0.1-5.7,3.1-12c3.1-6.5,3.9-9.2,4.4-15.8  c0.3-4.2,0.8-5.9,2-7.2c1.3-1.4,2.4-1.9,5.5-2.3c5.1-0.7,8.4-2,11-4.5c2.3-2.1,3.3-4.2,3.4-7.3l0.1-2.3L70.1,77C65.4,71.6,0.3,0,0,0  C-0.1,0,1.5,1.9,3.4,4.3z M34.1,146.5c1.1-1.9,0.5-4.3-1.3-5.5c-1.7-1.1-4.3-0.6-4.3,0.9c0,0.4,0.2,0.8,0.8,1c0.9,0.5,1,1,0.3,2.1  c-0.7,1.1-0.7,2.1,0.2,2.8C31.2,148.9,33.1,148.3,34.1,146.5z" />
                <path className="st1" d="M74.6,93.9c-2.4,0.7-4.7,3.3-5.4,5.9c-0.4,1.6-0.2,4.5,0.5,5.4c1.1,1.4,2.1,1.8,4.9,1.8  c5.5,0,10.2-2.4,10.7-5.3c0.5-2.4-1.6-5.7-4.5-7.2C79.3,93.7,76.2,93.4,74.6,93.9z M81,98.9c0.8-1.2,0.5-2.5-1-3.4  c-2.7-1.7-6.8-0.3-6.8,2.3c0,1.3,2.1,2.7,4.1,2.7C78.6,100.5,80.4,99.7,81,98.9z" />
              </svg>
              <div>BUY NOW</div>
            </a>
          </div>
        </div>
      </div>
      <footer className="pt-16 pb-10 mt-auto">
        <div className="px-6 mx-auto max-w-7xl md:px-12">
          <div className="flex flex-wrap">
            <div className="w-full text-sm text-gray-500 md:w-2/5">
              <div className="flex gap-0 items-center"><div className="w-9 h-9 rounded-full shadow-mochi" style={{ boxShadow: "0 0 3rem var(--tw-shadow-color)" }}>
                <Image src="/media/logo.png" alt="Logo" loading="lazy" width="36" height="36" decoding="async" data-nimg="1" className="block rounded-full" style={{ color: "transparent" }} />
              </div>
                <span className="text-lg font-black text-gray-900 uppercase">Raca Sniper Bot<span className="text-mochi">.</span></span>
              </div>
              <span className="inline-block my-6 text-xs">Our mission is to build the best growth tool for your degen trading life and help you trading your favorite coins with extremely high security.</span>
            </div>
            <div className="flex gap-6 w-full md:w-3/5"></div>
          </div>
          <div className="pt-6 text-xs text-gray-500">Copyright © 2023+ Raca Sniper Bot, All rights reserved</div>
        </div>
      </footer>
    </main>
  )
}
