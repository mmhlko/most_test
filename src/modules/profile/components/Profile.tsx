import s from "./styles.module.scss"
import { useAppSelector } from "storage/hookTypes"
import { userSelector } from "modules/login/store/authSelectors"
import classNames from "classnames"

export const Profile = () => {
    const { data: currentUser } = useAppSelector(userSelector)

    return (
        <section>            
            <div className={s.profile}>
                <img className={s.profile__avatar} src={currentUser?.image} alt={currentUser?.username} />
                <div className={s.profile__info}>
                    <h2 className={s.profile__info__username}>{currentUser?.username}</h2>
                    <span className={s.profile__info__name}>{`${currentUser?.firstName} ${currentUser?.lastName}`}</span>
                    <a className={classNames(s.text, s.iconEmail)} href={`mailto:${currentUser?.email}`}>{currentUser?.email}</a>
                </div>
            </div>
        </section>
    )
}