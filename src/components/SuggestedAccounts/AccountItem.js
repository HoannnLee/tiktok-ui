import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss'
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)

function AccountItem() {

    const renderPreview = (props) => {
        return(
            <div  tabIndex="-1"  {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        )
    }

    return (  
        <div>
            <Tippy
                interactive
                offset={[-20,0]}
                delay={[800,0]}
                placement="bottom"
                render= {renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://dichthuatcongchung247.com/wp-content/uploads/2022/08/google-dich.jpg' alt=''
        
                    />
        
                    <diV className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>HoannLee</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCircleCheck}/>
                        </p>
                        <p className={cx('name')}>Hoan Lee</p>
                    </diV>
                </div>
            </Tippy>
        </div>

    );
}

AccountItem.propTypes ={}

export default AccountItem;