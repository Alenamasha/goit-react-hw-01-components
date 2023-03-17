import PropTypes from 'prop-types';
import css from '../Profile/Profile.styled.css';



export const Profile = ({ username, tag, location, avatar, stats }) => {
    console.log(avatar);
    const userStates = [{ label: 'Followers', quantity: stats.followers },
    { label: 'Views', quantity: stats.views }, { label: 'Likes', quantity: stats.likes }]

    return (
        <div className="profile">
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
                {userStates.map(({ label, quantity }) =>
                    <li key={label}>
                        <span className={css.label}>{label}</span>
                        <span className={css.quantity}>{quantity}</span>
                    </li>
                )

                }

            </ul>
        </div>
    );
};

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};
