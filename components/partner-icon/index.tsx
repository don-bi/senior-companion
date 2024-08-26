import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import generic from "@/components/styles/generic.module.css";
import css from "./partnerIcon.module.css";

export default function PartnerIcon({styles, imageSrc, imageAlt, link, title, description}:
    {styles?: string, imageSrc: StaticImageData, imageAlt: string, link: string, title: string, description: string}
) {
    return (
        <div className={css.container}>
            <div className={`h-[13rem] w-[13rem] relative rounded-full ${generic.shadow}`}>
                <Image src={imageSrc} alt={imageAlt} fill={true} style={{objectFit: "cover", borderRadius: "100%"}}/>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p className="text-xl">{description}</p>
                <Link href={link} className={css.learnButton}>Learn More</Link>
            </div>
        </div>
    )
}