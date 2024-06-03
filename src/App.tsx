import { seatmap } from "./assets/data"
import { SeatContainerProps} from "./utils/props"
import SeatContainer from "./components/seatContainer";

type rowsProps = Array<SeatContainerProps>;

function App() {
  const rows : rowsProps = seatmap.seating.offers[2].seatmap?.sections[0].rows || [];

  return (
    <div className="container">
      {rows.map((row: SeatContainerProps, index: number) => (
        <SeatContainer key={index} row_number={row.row_number} seat_groups={row.seat_groups} />
      ))}
    </div>
  )
}

export default App
