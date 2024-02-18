import Image from "next/image";
import BearBox from "@/components/BearBox";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <Image
          src="/images/next_zustand.png"
          alt="next zustand banner"
          width={700}
          height={400}
          priority
        />
        <BearBox />
      </div>
    </>
  );
}
