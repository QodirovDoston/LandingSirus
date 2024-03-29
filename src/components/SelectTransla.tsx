import React from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Transale } from '../utils/Constants';

type PROP = {
  text: string,
  value: string
}

export default function SelectTransla() {
  const { t } = useTranslation();
  const changeLanguage = (language: React.ChangeEvent<HTMLSelectElement>) => {
    i18next.changeLanguage(language.target.value);
  }
  return (
    <select onChange={changeLanguage} className='py-2 text-[#000000] text-[19px] font-light bg-[#ffffff] border-none' name="Translate" id="1">
      {Transale.map((option: PROP, index: number) => {
        return (
          <React.Fragment key={index}>
            <option className='bg-slate-200 border-none ' value={option.value}>{t(option.text)}</option>
          </React.Fragment>
        )
      })}
    </select>
  )
}