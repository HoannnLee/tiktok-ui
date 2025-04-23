import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchIcon } from '~/components/Icons/icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';


import * as searchService  from '~/services/searchService'
import { useDebounce } from '~/hooks';
import { wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AcountItem';
import styles from './Search.module.scss';
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);
        //cách mới sử dụng thư viện axios và tối ưu code
        const fetchApi = async () => {
            setLoading(true)

            const result = await searchService.search(debounce);
            setSearchResult(result)

            setLoading(false)

        }

        fetchApi()

        // cách cũ
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        //     .then(res => res.json())
        //     .then(res => {
        //         setSearchResult(res.data)
        //         setLoading(false)
        //     })
        //     .catch(res => {
        //         setLoading(false)
        //     })
    }, [debounce]);

    const inputRef = useRef();

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleShowResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue);
        }
    }

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context. 
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs} visible>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Accounts</h3>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} onClick={handleClear} />
                        </button>
                    )}
    
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
