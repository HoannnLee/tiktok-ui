import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItem() {
    return (  
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

    );
}

AccountItem.propTypes ={}

export default AccountItem;