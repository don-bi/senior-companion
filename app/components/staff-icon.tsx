import Image, { StaticImageData } from "next/image";
import generic from './styles/generic.module.css';

export default function StaffIcon({name, imageSrc, imageAlt , title, description}: 
    {name: string, imageSrc: StaticImageData, imageAlt: string, title?: string, description?: string}) {
        return (
            <div className="flex flex-col items-center gap-3">
                <div className={`${generic.shadow} w-80 rounded-full`}>
                    <Image src={imageSrc} alt={imageAlt} style={{borderRadius: "100%"}}/>
                </div>
                <h2 className="font-bold text-2xl">{name}</h2>
                <h3 className="font-semibold text-xl">{title}</h3>
                <h4>{description}</h4>
            </div>
        )

    }