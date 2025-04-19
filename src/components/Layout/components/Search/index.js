import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/components/Icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { useDebounce } from '~/hooks';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AcountItem';
import styles from './Search.mudule.scss';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setsearchResult] = useState([]);
    const [showResult , setShowResult] = useState(true)
    const [loading , setLoading] = useState(false)

    const debounce = useDebounce(searchValue, 500)

    useEffect(() => {

        if(!debounce.trim()){
            setsearchResult([])
            return;
        }

        setLoading(true)

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
            .then(res => res.json())
            .then(res => {
                setsearchResult(res.data)
                setLoading(false)
            })
            .catch(res => {
                setLoading(false)
            })
    }, [debounce]);

    const inputRef = useRef()

    const handleClear = () => {
        setSearchValue('')
        inputRef.current.focus()
    }

    const handleShowResult = () => {
        setShowResult(false)
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs} visible>
                    <PopperWrapper>
                        <h3 className={cx('search-title')}>Accounts</h3>
                        {searchResult.map((result) => (

                            <AccountItem  key={result.id} data={result}/>
                        ))}
                        
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleShowResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="search accounts and video"
                    spellCheck={false}
                    onChange={(e) => {
                        setSearchValue(e.target.value.trimStart());
                    }}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
                    </button>
                )}
               
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
