import Card from '@/components/cards/Card'
import Navigationbar from '@/components/layouts/Navigationbar'

import React from 'react'

const page = () => {

  const carddata = [
    {
      id: 1,
      company: "Amazon",
      logo: "https://i.pinimg.com/1200x/3a/b5/92/3ab592044ca880f91e97773f739d8398.jpg",
      postedAt: "20 days ago",
      role: "Graphic Designer",
      tags: ["Full-time", "Flexible schedule"],
      salary: "$150 - 220k",
      location: "Mountain View, CA",
    },
    {
      id: 2,
      company: "Google",
      logo: "https://i.pinimg.com/1200x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
      postedAt: "5 days ago",
      role: "Frontend Engineer",
      tags: ["Remote", "Full-time"],
      salary: "$180 - 250k",
      location: "Remote",
    },
    {
      id: 3,
      company: "Microsoft",
      logo: "https://i.pinimg.com/736x/fa/76/9b/fa769ba2fd25c9bdd269a736e0942218.jpg",
      postedAt: "2 days ago",
      role: "Backend Developer",
      tags: ["Full-time"],
      salary: "$160 - 210k",
      location: "Seattle, WA",
    },
    {
      id: 4,
      company: "Meta",
      logo: "https://i.pinimg.com/736x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
      postedAt: "1 week ago",
      role: "Product Designer",
      tags: ["Hybrid", "Full-time"],
      salary: "$170 - 230k",
      location: "Menlo Park, CA",
    },
    {
      id: 5,
      company: "Netflix",
      logo: "https://i.pinimg.com/736x/f7/95/4a/f7954aecdd40be91bae0ddb650428523.jpg",
      postedAt: "3 days ago",
      role: "UI Engineer",
      tags: ["Remote"],
      salary: "$190 - 260k",
      location: "Los Angeles, CA",
    },
    {
      id: 6,
      company: "Apple",
      logo: "https://i.pinimg.com/736x/5c/ed/e0/5cede00af1d22863a4b5c8045c648a46.jpg",
      postedAt: "4 days ago",
      role: "iOS Developer",
      tags: ["Full-time"],
      salary: "$180 - 240k",
      location: "Cupertino, CA",
    },
    {
      id: 7,
      company: "Adobe",
      logo: "https://i.pinimg.com/1200x/62/3c/b6/623cb67a352ad783bfa394952dc56af2.jpg",
      postedAt: "6 days ago",
      role: "UX Researcher",
      tags: ["Hybrid"],
      salary: "$140 - 190k",
      location: "San Jose, CA",
    },
    {
      id: 8,
      company: "Tesla",
      logo: "https://i.pinimg.com/736x/9d/a8/b8/9da8b8e22b9ab6afeec2d589734530f3.jpg",
      postedAt: "10 days ago",
      role: "Mechanical Engineer",
      tags: ["Full-time"],
      salary: "$130 - 180k",
      location: "Austin, TX",
    },
    {
      id: 9,
      company: "Spotify",
      logo: "https://i.pinimg.com/736x/cb/65/e8/cb65e80c61f2e534ca47d11cd78fc5fd.jpg",
      postedAt: "12 days ago",
      role: "Data Analyst",
      tags: ["Remote"],
      salary: "$120 - 170k",
      location: "New York, NY",
    },
    {
      id: 10,
      company: "Airbnb",
      logo: "https://i.pinimg.com/1200x/56/9a/64/569a64e9f62f86e441182b5322690e01.jpg",
      postedAt: "8 days ago",
      role: "Full Stack Developer",
      tags: ["Full-time", "Remote"],
      salary: "$170 - 230k",
      location: "San Francisco, CA",
    },
    {
      id: 11,
      company: "Uber",
      logo: "https://i.pinimg.com/1200x/f3/b7/ac/f3b7acbc81e268b28ffc2371c555c6d4.jpg",
      postedAt: "3 weeks ago",
      role: "DevOps Engineer",
      tags: ["Hybrid"],
      salary: "$160 - 210k",
      location: "Chicago, IL",
    },
    {
      id: 12,
      company: "Twitter",
      logo: "https://i.pinimg.com/1200x/2f/b9/09/2fb909b74a854f0715e64dda5825990d.jpg",
      postedAt: "2 weeks ago",
      role: "Mobile Developer",
      tags: ["Remote"],
      salary: "$150 - 200k",
      location: "Remote",
    },
    {
      id: 13,
      company: "LinkedIn",
      logo: "https://i.pinimg.com/1200x/37/cb/45/37cb45471e72f36d99a84a2a2a8b1656.jpg",
      postedAt: "9 days ago",
      role: "Cloud Engineer",
      tags: ["Full-time"],
      salary: "$180 - 240k",
      location: "Sunnyvale, CA",
    },
    {
      id: 14,
      company: "Slack",
      logo: "https://i.pinimg.com/1200x/cf/b9/ab/cfb9ab812061f22cf627141337a0f5f5.jpg",
      postedAt: "15 days ago",
      role: "QA Engineer",
      tags: ["Hybrid"],
      salary: "$110 - 160k",
      location: "Denver, CO",
    },
    {
      id: 15,
      company: "Tiktok",
      logo: "https://i.pinimg.com/1200x/e1/0e/3f/e10e3f21d3b4e0f40b04b8fee7f40da4.jpg",
      postedAt: "7 days ago",
      role: "Security Engineer",
      tags: ["Full-time"],
      salary: "$190 - 270k",
      location: "San Francisco, CA",
    },
  ]

  return (
    <>
      <Navigationbar />
      <div className="bg-gray-900 min-h-screen py-16">
        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-20 xl:px-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
            {carddata.map((data) => (
              <Card key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page