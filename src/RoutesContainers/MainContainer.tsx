import { Container } from "@mui/material"
import React from "react"
import { Outlet } from "react-router"
import { NavBar } from "../Components/NavBar"

const MainContainer = () => {
    const containerRef = React.createRef<HTMLDivElement>();
    return (
        <div ref={containerRef} style={{width: '100%', height: '100vh', overflow: 'auto'}}>
            <NavBar containerRef={containerRef} />
            <Container>
                <Outlet />
            </Container>
        </div>
    )
}

export { MainContainer }