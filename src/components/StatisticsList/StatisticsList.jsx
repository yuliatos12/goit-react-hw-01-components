import css from "./StatisticsList.module.css"
import PropTypes from "prop-types";

export const StatisticsList = ({ stats }) => {
    return (
        <ul className={css.statList}>
            {stats.map(({ id, label, percentage }) => {
                return (<li className={css.item} key={id} >
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}%</span>
                </li>)
            })}
        </ul>
    )
};

StatisticsList.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
}