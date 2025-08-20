import * as React from "react"
import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ModeToggle } from "./togglemode"

export function NavSecondary( ) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="items-center">
          <ModeToggle />
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
