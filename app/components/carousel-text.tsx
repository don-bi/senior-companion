import styles from "./styles/carousel.module.css";

export default function CarouselText({name, address, description, identifier}: {name: string, address: string, description: string, identifier: string}) {
  return (
    <div id={identifier}>
        <h1>{name}</h1>
        <h2>{address}</h2>
        <p>{description}</p>
    </div>
  )

}