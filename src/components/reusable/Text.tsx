import { useTranslation } from "react-i18next"
type PropsType = {
    text:string
}

const Text = (props:PropsType) => {
  const { t } = useTranslation()
  return <h2 className="text-5xl font-semibold text-center sm:text-[38px] text-[25px] text-center">{t(`text.${props.text}`)}</h2>
}

export default Text