'use client';

import * as React from 'react';
import { useEdgeStore } from '../lib/edgestore';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"
import { MultiFileDropzoneUsage } from './multiFileDropzoen';

export default function EdgeUpload() {
  const [file, setFile] = React.useState<File>();
  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = React.useState(0);
  const [urls, setUrls] = React.useState<{
    url: string;
    thumbnailUrl?: string | null;
  }>();

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
     <div className="p-2">
      <MultiFileDropzoneUsage />
    </div>
  );
}