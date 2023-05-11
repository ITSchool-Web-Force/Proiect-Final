import Link from "next/link";
import data from "./data";
import Image from "next/image";

function RecentCars() {
  const lastCars = data.slice(-3);
  return (
    <div className="recent-layout">
      <h3 className="recent-title">Recently Added</h3>
      <div>
        <div className="recent-group">
          {lastCars.map((lastCar) => {
            return (
              <div className="recent-card" key={lastCar.name}>
                <Link href={`/current-stock/${lastCar.id}`}>
                  <Image
                    className="car-image"
                    src={lastCar.photo}
                    alt={lastCar.name}
                    width={1280}
                    height={960}
                  />
                </Link>
                <p>{lastCar.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default RecentCars;
