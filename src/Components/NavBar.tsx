import { AppBar, Button, CssBaseline, Slide, Toolbar, Typography, useScrollTrigger } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { MainRoutPaths } from "../Routes/main-route";

interface Props {
    target?: HTMLDivElement;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const { children, target } = props;
    const trigger = useScrollTrigger({
        target: target,
    });

    console.log(trigger);

    return (
        <Slide direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}


const NavBar = (props: {
    containerRef: React.RefObject<HTMLDivElement>
}) => {
    const navigate = useNavigate();
    const { containerRef } = props;
    const [container, setContainer] = React.useState<HTMLDivElement>()

    React.useEffect(() => {
        if (containerRef.current)
            setContainer(containerRef.current)
    }, [containerRef])

    return (
        <>
            <CssBaseline />
            <HideOnScroll target={container}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Template React
                        </Typography>
                        <Button onClick={() => navigate(MainRoutPaths.HOME)} color="inherit">Home</Button>
                        <Button onClick={() => navigate(MainRoutPaths.ABOUT)} color="inherit">About</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </>
    )
}

export { NavBar }