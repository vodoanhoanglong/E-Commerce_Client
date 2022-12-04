import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { AvatarFrame } from "~/modules/auth";

interface RHFAvatarProps {
  name: string;
}

function RHFAvatar({ name }: RHFAvatarProps) {
  const { setValue } = useFormContext();
  const [url, setURL] = useState("");

  const getBlobUrl = (file: File) => {
    return URL.createObjectURL(file);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue(name, file);
      setURL(getBlobUrl(file));
    }
  };

  return <AvatarFrame src={url} onChange={handleChange} />;
}

export default RHFAvatar;
