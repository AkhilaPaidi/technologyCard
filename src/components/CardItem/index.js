import './index.css'

const TechCards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description}</p>
        <div className="imagepos">
          <img src={imgUrl} className="image" alt={title} />
        </div>
      </div>
    </li>
  )
}

export default TechCards
