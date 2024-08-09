import styles from "./carousel.module.css";

export default function CarouselText({name, address, description, identifier, phone, email, link}: 
  {name: string, address: string, description: string, identifier: string, phone?: string, email?: string, link?: string}) {
  return (
    <div id={identifier} className={`${styles.text} absolute w-full  px-14`}>
        <h2 className="font-bold text-2xl">{name}</h2>
        <h3 className="font-semibold text-xl">{address}</h3>
        <p>{description}</p>
        {phone && <p>Phone: {phone}</p>}
        {email && <p>Email: {email}</p>}
        {link && <a href={link}><button className={styles.branchLink}>Learn more</button></a>}
    </div>
  )

}