import React, { type ComponentPropsWithoutRef } from "react";
import { Input } from "../ui/input";
import { Upload } from "lucide-react";
import { toast } from "sonner";

type DropFileProp = ComponentPropsWithoutRef<"input"> & {
  fnWithFile?: (file: File) => void;
};

const DropFile: React.FC<DropFileProp> = ({ fnWithFile, ...props }) => {
  const [isDragOver, setIsDragOver] = React.useState<boolean>(false);
  const [file, setFile] = React.useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    if (file && fnWithFile) {
      fnWithFile(file);
    }
  }, [file, fnWithFile]);

  const onDragOver = (e: React.DragEvent) => {
    console.log("drag over");
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    console.log("drag leave");
    setIsDragOver(false);
  };

  const onDragDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const dropFiles = e.dataTransfer.files;
    if (dropFiles.length > 0) {
      const selectedFile = dropFiles[0];
      const acceptedType = fileInputRef.current?.accept;
      if (selectedFile.type !== acceptedType) {
        toast.error(`Only ${acceptedType} files are allowed`);
        return;
      }
      setFile(selectedFile);
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(selectedFile);
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleZoneClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center h-28 flex flex-col items-center justify-center transition-colors cursor-pointer ${
        isDragOver || file ? "border-primary bg-primary/10" : ""
      }`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDragDrop}
      onClick={handleZoneClick}
    >
      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">
        {file?.name || "Click to upload passport"}
      </p>
      <Input
        {...props}
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={onFileChange}
      />
    </div>
  );
};

export default DropFile;
