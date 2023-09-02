import css from './Statistics.module.css';
import { StatisticsList } from "components/StatisticsList/StatisticsList";
import PropTypes from "prop-types";

export const Statistics = ({title, stats}) => {
    return (<section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <StatisticsList stats={stats} />
    </section>);
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired
};