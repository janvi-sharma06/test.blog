import { FaStar, FaRegStar } from "react-icons/fa";

const RatingStars = ({ rating }) => {
  return (
    <div className="rating-stars">
      {Array.from({ length: 5 }, (_, i) =>
        i < rating ? (
          <FaStar key={i} color="#FFD700" size={18} />
        ) : (
          <FaRegStar key={i} color="#FFD700" size={18} />
        )
      )}
    </div>
  );
};
export default RatingStars;