import classNames from 'classnames'
import React, { FC, JSX } from 'react'

interface IListProps {
    className?: string
    items: any[]
    renderItem: (item: any, index: number, arr: any[]) => JSX.Element
}
export const List: FC<IListProps> = (props) => {
    const { className, items, renderItem } = props
    return <ul className={classNames(className)}>{items.map(renderItem)}</ul>
}
