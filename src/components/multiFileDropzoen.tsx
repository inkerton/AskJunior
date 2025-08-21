"use client";

import { FileUploader } from "@/components/upload/multi-file";
import {
  UploaderProvider,
  type UploadFn,
} from "@/components/upload/uploader-provider";
import { useEdgeStore } from "@/lib/edgestore";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as React from "react";

export function MultiFileDropzoneUsage() {
  const { edgestore } = useEdgeStore();
  const [uploadedFiles, setUploadedFiles] = React.useState<
    { url: string; name: string }[]
  >([]);

  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
      });

      setUploadedFiles((prev) => [
        ...prev,
        { url: res.url, name: file.name },
      ]);

      console.log(res);
      return res;
    },
    [edgestore]
  );

  return (
    <UploaderProvider uploadFn={uploadFn} autoUpload>
      <FileUploader
        maxFiles={5}
        maxSize={1024 * 1024 * 1} // 1 MB
        accept={{
          "application/pdf": [],
          "text/plain": [".txt"],
        }}
      />

      <div className="flex flex-col gap-2 mt-3">
        {uploadedFiles.map((file, i) => (
          <Button key={i} type="button" className="w-full " variant="outline">
            <Link href={file.url} target="_blank">
               <span className="font-semibold">{file.name}</span>
            </Link>
          </Button>
        ))}
      </div>
    </UploaderProvider>
  );
}
