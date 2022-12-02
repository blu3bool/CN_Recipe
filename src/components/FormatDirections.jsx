import React from 'react'
import ReactMarkdown from 'react-markdown'
import style from '../module/markdown-styles.module.css'

export function FormatDirections({ directions }) {
    return (
        <>
            {directions &&
                <ReactMarkdown
                    className={style.reactMarkDown}
                    children={directions} />

            }
        </>
    )
}
