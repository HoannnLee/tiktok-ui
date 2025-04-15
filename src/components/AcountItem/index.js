import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles)


function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='data:image/png;base64,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' alt='Hello' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
     );
}

export default AccountItem;