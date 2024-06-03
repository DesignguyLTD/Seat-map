import { SeatColumnProps } from "../utils/props";

function SeatContainer({ name }: SeatColumnProps) {
 return (
    <div className="row-container">
      {name}
    </div>
 )
}

export default SeatContainer;