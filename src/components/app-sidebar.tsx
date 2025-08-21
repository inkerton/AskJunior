"use client"

import * as React from "react"
import Image from "next/image"
import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  MoonStar,
  Settings2,
  Sparkles,
  CircleCheck,
  SquareTerminal,
  Mail,
  BookOpenIcon,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavResources } from "./nav-resources"
import { NavQuickLinks } from "@/components/nav-quicklinks"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Janvi Choudhary",
    // email: "m@example.com",
    avatar: null,
  },
  navMain: [
    {
      title: "New Extraction",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Examples",
      url: "#",
      icon: Bot,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
  ],
  NavResources: [
    {
      title: "Console",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpenIcon,
    },
    {
      title: "Contact Support",
      url: "#",
      icon: Mail,
    },
  ],
  quickLinks: [
    {
      name: "Production Access",
      url: "#",
      icon: CircleCheck,
    },
    {
      name: "Pricing Info",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Book a Demo",
      url: "#",
      icon: Sparkles,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                  <Image
                    src="/icon.png"
                    alt="App Icon"
                    width={300}
                    height={20}
                    className="mb-1 mt-2"
                  />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavResources items={data.NavResources} />
        <NavQuickLinks quickLinks={data.quickLinks} />
      </SidebarContent>
      <SidebarFooter>
        <NavSecondary />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
