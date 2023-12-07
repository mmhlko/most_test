import { ContentHeader } from "components/content-header"
import { Profile } from "modules/profile/components/Profile"

export const ProfilePage  = () => {

    return (
        <div className="content container">
            <ContentHeader title="Profile" />
            <Profile />
        </div>
    )
}