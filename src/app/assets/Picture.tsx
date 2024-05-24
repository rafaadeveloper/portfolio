import Rafael from "/Rafael.jpg";
import Image from "next/image";

export function Picture() {
  return (
    <Image
      alt="Rafael"
      src={Rafael}
      draggable={false}
      className="rounded-full size-16 grayscale pointer-events-none"
      width={200}
      height={200}
    />
  );
}
