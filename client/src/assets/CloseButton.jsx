import React from 'react'

const CloseButton = props => {

    const { onHide } = props

    return (
        <img className="cursor-pointer" src="https://img.icons8.com/external-flat-icons-inmotus-design/40/000000/external-close-basic-work-elements-flat-icons-inmotus-design.png" onClick={onHide} alt="closeButton" onMouseLeave={e => {
            e.target.src = "https://img.icons8.com/external-flat-icons-inmotus-design/40/000000/external-close-basic-work-elements-flat-icons-inmotus-design.png"
        }} onMouseEnter={e => {
            e.target.style = "width: 40px"
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbmUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PGcgZmlsbD0iIzMzMzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNODYuNTc1MzIsMi41NzkwMWM0NS4zMTExOSwwIDgyLjA1MjEzLDM2Ljc0MDk1IDgyLjA1MjEzLDgyLjA1MjEzYzAsNDUuMzExMTkgLTM2Ljc0MDk1LDgyLjA1MjEzIC04Mi4wNTIxMyw4Mi4wNTIxM2MtNDUuMzExMTksMCAtODIuMDUyMTMsLTM2Ljc0MDk1IC04Mi4wNTIxMywtODIuMDUyMTNjMCwtNDUuMzExMTkgMzYuNzQwOTUsLTgyLjA1MjEzIDgyLjA1MjEzLC04Mi4wNTIxM3pNMTM0LjU4NDU0LDU0LjExOTQ5bC0xNy40OTc1OCwtMTcuNDk3NThsLTMwLjUxMTY1LDMwLjUxMTY1bC0zMC41MTE2NSwtMzAuNTExNjVsLTE3LjQ5NzU4LDE3LjQ5NzU4bDMwLjUxMTY1LDMwLjUxMTY1bC0zMC41MTE2NSwzMC41MTE2NWwxNy40OTc1OCwxNy40OTc1OGwzMC41MTE2NSwtMzAuNTExNjVsMzAuNTExNjUsMzAuNTExNjVsMTcuNDk3NTgsLTE3LjQ5NzU4bC0zMC41MTE2NSwtMzAuNTExNjV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4='
        }} ></img>
    )
}

export default CloseButton