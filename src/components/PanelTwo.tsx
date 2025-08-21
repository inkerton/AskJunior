"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCode2 } from "lucide-react";

export default function PanelTwo() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <Card className="h-full w-full flex items-center justify-center border border-dashed shadow-sm">
        <CardContent className="flex flex-col items-center text-center space-y-4">
          {/* Icon */}
          <FileCode2 className="h-12 w-12 text-muted-foreground" />

          {/* Title */}
          <h2 className="text-lg font-medium">No content extracted yet</h2>

          {/* Subtitle */}
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-medium cursor-pointer">Upload</span>{" "}
            files and click <span className="font-semibold">"Extract All"</span> to
            view content
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-2 w-full max-w-sm">
            <Button variant="outline" className="w-full">
              Configure Processing Settings
            </Button>
            <Button variant="secondary" className="w-full">
              Schema Editor
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
