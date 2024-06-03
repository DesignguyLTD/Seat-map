
import SeatCard from "./seatCard"
import { SeatColumnProps } from '../utils/props';

type SeatColumnsProps = {
    columns: Array<SeatColumnProps>
};

function SeatColumns({ columns }: SeatColumnsProps) {
 return (
    <div className="column-container">
    {columns.map((column: SeatColumnProps, index: number) => (
      <SeatCard key={index} {...column} />
    ))}
    </div>
 )
}


export default SeatColumns;