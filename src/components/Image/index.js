import {forwardRef} from 'react'
import images from '~/assets/images';

import { useState } from 'react';
import classNames from 'classnames';
import styles from './Image.module.scss'

function Image({alt , src , className, fallBack : customFallback = images.noImage ,...props } , ref) {
    const [fallBack, setfallBack] = useState('')
  
    const handleError = () => {
        setfallBack(customFallback)
    }

    return(
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            alt={alt}
            src={fallBack || src}
            {...props}
            onError={handleError}
        />
    );
}

export default forwardRef(Image);