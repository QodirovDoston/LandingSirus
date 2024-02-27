type PropsType = {
    title:string
}
export const CardTitle = (props:PropsType) => {
  return  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h2>
  }
