import PropTypes from 'prop-types'
import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? `${css.status} ${css.isOnline}` : `${css.status}`}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" />
            <p className={css.name}>{name}</p>
        </li>
    )
}















FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
}





// className = { css.item }
//                     key={id}
//                     avatar={avatar}
//                     name={name} >
                    

//   <span className={css.status}></span>
//   <img className={css.avatar} src="" alt="User avatar" width="48" />
//   <p className={css.name}></p>
// </FriendListItem>