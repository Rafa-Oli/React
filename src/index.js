import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes filhos aqui? */}
            <Filho nome="Pedro" sobrenome="Silva"></Filho>
            <Filho nome="Paulo" sobrenome="Silva"></Filho>
            <Filho nome="Carla" sobrenome="Silva"></Filho>
        </Pai>
    </div>


    , document.getElementById('root'))
