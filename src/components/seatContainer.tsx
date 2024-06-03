import { SeatContainerProps } from "../utils/props";
import SeatColumns from "./seatColumns";

function SeatContainer({ row_number, seat_groups }: SeatContainerProps) {
    const column1 = seat_groups ? seat_groups[0] : [];
    const column2 = seat_groups ? seat_groups[1] : [];

    return (
        <div className="row-container">
            <SeatColumns columns={column1} />
            {row_number}
            <SeatColumns columns={column2} />
        </div>
    )
}


export default SeatContainer;