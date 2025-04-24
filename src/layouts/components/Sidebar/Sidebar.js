import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import config from '~/config/index';
import {
    HomeIcon,
    HomeActiveIcon,
    DiscoverIcon,
    DiscoverActionIcon,
    UploadIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    MessageIcon,
    MessageActionIcon,
    LiveIcon,
    InboxIcon,
    InboxActionIcon
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Đề xuất" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
                <MenuItem
                    title="Khám phá"
                    to={config.routes.discover}
                    icon={<DiscoverIcon />}
                    iconActive={<DiscoverActionIcon />}
                />
                {/* <MenuItem title="Đã Follow" to={config.routes.following} icon={<UserGroupIcon />}/> */}
                <MenuItem
                    title="Bạn bè"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupActiveIcon />}
                />
                <MenuItem title="Tải lên" to={config.routes.upload} icon={<UploadIcon />} />
                <MenuItem title="Hoạt động" to={config.routes.action} icon={<InboxIcon />} iconActive={<InboxActionIcon/>}/>
                <MenuItem title="Tin nhắn" to={config.routes.message} icon={<MessageIcon />} iconActive={<MessageActionIcon />}/>
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
            </Menu>
            <SuggestedAccounts label="Suggested accounts"/>
            <SuggestedAccounts label="following  accounts"/>
        </aside>
    );
}

export default Sidebar;
