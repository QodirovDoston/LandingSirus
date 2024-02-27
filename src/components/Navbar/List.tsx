import React from "react"

type PropsTYpe = {
    value?: string,
    imgs?: string,
}

const List = React.memo((props: PropsTYpe) => {
    return (
        <>
            {props?.value ? <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 duration-300 ">{props?.value}</a>
            </li>
                : <img className="w-5 mx-5" src={props?.imgs} />}
        </>
    )
})

export default List
