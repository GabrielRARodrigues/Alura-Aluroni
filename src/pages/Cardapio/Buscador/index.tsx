import style from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'
import { memo, useMemo } from 'react'

interface Props {
  busca: string
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({ busca, setBusca }: Props) {
  const elemento = useMemo(() => <CgSearch size={20} color="#4c4d5e" />, [])

  return (
    <div className={style.buscador}>
      <input
        type="text"
        value={busca}
        placeholder="Buscar"
        onChange={evento => {
          setBusca(evento.target.value)
        }}
      />
      {elemento}
    </div>
  )
}

export default memo(Buscador)
