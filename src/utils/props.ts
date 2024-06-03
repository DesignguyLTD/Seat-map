import PropTypes from 'prop-types';

export const rowProps = {
    row_number: PropTypes.number,
    seat_groups: PropTypes.array
}

export type SeatContainerProps = PropTypes.InferProps<typeof rowProps>;

const priceProp = {
    amount: PropTypes.number,
    base: PropTypes.number,
    currency: PropTypes.string,
    merchant: PropTypes.number,
    service: PropTypes.number,
    service_flat: PropTypes.number
}

export const columnProps = {
    column: PropTypes.string,
    features: PropTypes.array,
    name: PropTypes.string,
    price: {...priceProp},
    seat_class: PropTypes.string,
    state: PropTypes.string,
    type: PropTypes.string

}


export type SeatColumnProps = PropTypes.InferProps<typeof columnProps>;

