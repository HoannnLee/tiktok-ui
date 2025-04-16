import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import MenuItem from './MenuItem';
import Header from './Header';

import { wrapper as PopperWrapper } from '~/components/Popper';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {}

function Menu({ children, items = [] , onChange = defaultFn}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            const handleRenderChildren = () => {
                if (isParent) {
                    setHistory((pre) => {
                        return [...pre, item.children];
                    });
                }else{
                    onChange(item)
                }
            };

            return <MenuItem key={index} data={item} onClick={handleRenderChildren} />;
        });
    };

    const handleBack = () => {
        setHistory((prev) => {
            return prev.slice(0, prev.length - 1);
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            offset={[12,8]}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs} visible>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={handleBack} />}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            onHide={() => 
                setHistory((prev) => prev.slice(0, 1))
            }
        >
            {children}
        </Tippy>
    );
}

export default Menu;
