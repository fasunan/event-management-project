const EventCard = ({ data }) => {
  const { id, image, title, description, price } = data;
  return (
    <div className="card glass">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className=" btn glass">Details</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
