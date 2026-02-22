"use client"
import Image from 'next/image'
import { Bookmark } from 'lucide-react'

import React, { useState } from 'react'

interface CardProps {
    company: string
    logo: string
    postedAt: string
    role: string
    salary: string
    location: string
}

const Card = ({
    company,
    logo,
    postedAt,
    role,
    salary,
    location,
}: CardProps) => {

    const [saved, setSaved] = useState(false)

    const toggleSave = () => {
        setSaved(prev => !prev)
    }
    return (
        <div className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 flex flex-col">

            {/* Header */}
            <div className="flex justify-between mb-6">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-black flex items-center justify-center p-1">
                    <Image
                        src={logo}
                        alt={`${company} logo`}
                        width={44}
                        height={44}
                        className="object-cover w-full h-full rounded-full"
                    />
                </div>
                <div
                    onClick={toggleSave}
                    className="cursor-pointer transition"
                >
                    <Bookmark
                        className={`w-6 h-6 transition ${saved
                                ? "fill-black text-black"
                                : "text-gray-500 hover:text-black"
                            }`}
                    />
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4 grow">

                <div className="flex items-center justify-between">
                    <span className="font-semibold text-base sm:text-lg">
                        {company}
                    </span>
                    <span className="text-xs text-gray-400">
                        {postedAt}
                    </span>
                </div>

                <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-snug">
                    {role}
                </h2>

                <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-200 px-3 py-1 rounded-md text-xs sm:text-sm">
                        Full-time
                    </span>
                    <span className="bg-gray-200 px-3 py-1 rounded-md text-xs sm:text-sm">
                        Flexible schedule
                    </span>
                </div>

            </div>

            {/* Divider */}
            <hr className="my-6" />

            {/* Footer */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="font-semibold text-sm sm:text-base">
                        {salary}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                        {location}
                    </span>
                </div>

                <button className="px-5 py-2 text-sm sm:text-base bg-black text-white rounded-xl hover:bg-gray-800 transition">
                    Apply now
                </button>
            </div>

        </div>
    )
}

export default Card