import Image from "next/image"
export default function Logo({source, className}) {
    return (
      <>
        <Image src={source} alt="logo" className={className}/>
      </>
    )
  }