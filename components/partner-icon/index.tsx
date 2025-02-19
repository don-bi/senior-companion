import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import generic from "@/components/styles/generic.module.css";
import css from "./partnerIcon.module.css";

export default function PartnerIcon({styles, imageSrc, imageAlt, link, title, description}:
    {styles?: string, imageSrc: StaticImageData, imageAlt: string, link: string, title: string, description: string}
) {
    return (
        <div className={`${css.container} flex-col md:flex-row items-center gap-8 md:gap-28`}>
            <div className={`min-h-[10rem] min-w-[10rem] md:min-h-[13rem] md:min-w-[13rem] relative rounded-full ${generic.shadow}`}>
                <Image src={imageSrc} alt={imageAlt} fill={true} style={{objectFit: "cover", borderRadius: "100%"}}/>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
                <p className="text-lg md:text-xl">{description}</p>
                <Link href={link} className={`${css.learnButton} self-center md:self-start`} target="blank">Learn More</Link>
            </div>
        </div>
    )
}