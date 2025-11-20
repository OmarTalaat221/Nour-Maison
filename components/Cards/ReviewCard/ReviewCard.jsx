import Image from "next/image";
import { FaStar } from "react-icons/fa";
import cx  from 'classnames';

const ReviewCard = ({ data }) => {
  return (
    <div className="max-w-md flex flex-col h-[350px] mx-auto bg-white shadow-lg rounded-xl p-3 px-6 border">
      {/* Header */}
      <div className="flex items-center gap-4 mb-3">
        <Image
          width={50}
          height={50}
          src={data.image}
          loading="lazy"
          className=" !w-[50px] !h-[50px] bg-purple-600 text-white font-bold rounded-full flex items-center justify-center text-lg"
        />
        <div>
          <h2 className="font-semibold text-xl text-gray-800">{data.name}</h2>
          {/* <p className="text-sm text-gray-500">Local Guide · 13 reviews</p> */}
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        {/* <span className="text-sm text-gray-500">a month ago</span> */}
      </div>

      {/* Tags */}
      {data?.tags ? (
        <div className="text-sm text-gray-600 mb-4">
          {data.tags.map((tag, index) => {
            return (
              <>
                <span className="mr-2">{tag}</span>
                {index != data.tags.length - 1 && " | "}
              </>
            );
          })}
          {/* <span className="mx-2">Breakfast</span> |
          <span className="ml-2">£10–20</span> */}
        </div>
      ) : null}

      {/* Review text */}
      <p className={cx("text-gray-800 mb-4 " , {"line-clamp-2" : data.breakdown || data.recommendedDishes })}>{data?.review}</p>

      {/* Ratings breakdown */}
      {
        data.breakdown || data.recommendedDishes ?
      <div className="bg-gray-100 rounded-lg p-4 mt-auto">
        {data?.breakdown ? (
          <div className="flex text-sm text-gray-700 font-semibold mb-2">
            <span className="mr-4">Food: {data?.breakdown?.food}</span>
            <span className="mr-4">Service: {data?.breakdown?.service}</span>
            <span>Atmosphere: {data?.breakdown?.atmosphere}</span>
          </div>
        ) : null}

        {/* Recommended dishes */}
        {data?.recommendedDishes?.length ? (
          <div>
            <p className="text-sm font-semibold text-gray-800 mb-1">
              Recommended dishes
            </p>
            {data.recommendedDishes.map((item, index) => (
              <p className="text-sm text-gray-700">{item}</p>
            ))}
          </div>
        ) : null}
      </div>
      :null
      }

    </div>
  );
};

export default ReviewCard;
