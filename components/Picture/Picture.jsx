import Image from "next/image"
export default function Picture({source, className, classNameImg}) {
    return (
      <div className={className}>
        <Image src={source} alt="avatar" className={classNameImg}/>
      </div>
    )
  }