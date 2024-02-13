import { useEffect, useRef, useState } from "react";
import { FaList } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { Box, Stack } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import { MdGridView } from "react-icons/md";
import { styled } from '@mui/material/styles';
import { SlOptionsVertical } from "react-icons/sl";
import AvatarGroup from '@mui/material/AvatarGroup';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Card, CardContent, CardHeader, Typography, Button, Divider } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme, bg }) => ({
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? bg : '#308fe8',
    },
}));

const DashCard = () => {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [listView, setListView] = useState( false );

    useEffect(()=>{
        const HandleWindowResize = () => {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", HandleWindowResize);

        if(windowSize < 526){
            setListView(false);
        }
    })

    function handleListView() {
        setListView(true)
        setTimeout(() => {
            console.log(listView);
        }, 2000)
    }
    function handleGridView() {
        setListView(false)
        setTimeout(() => {
            console.log(listView);
        }, 2000)
    }


    return (
        <Box
            sx={{
                padding: "0",
                backgroundColor: "var(--projects-section)",
                maxWidth: "950px",
                width: "100%",
                borderRadius: "30px",
                overflow: "hidden"
            }}
        >
            <Box
                sx={{
                    padding: "30px 30px 10px",
                    width: "full",
                    backgroundColor: "var(--projects-section)",
                    '@media(max-width: 768px)':{padding: "20px 20px 10px"},
                    '@media(max-width: 426px)':{padding: "10px 12px 10px"}
                }}>

                <Stack
                    sx={{
                        width: "full",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                    direction="row"
                    spacing="20px">
                    <Typography variant="h5"
                        sx={{
                            fontWeight: "700",
                            width: "full",
                            color: 'var(--link-color)',
                            textTransform: "capitalize"
                        }}>
                        projects
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "600",
                            width: "full",
                            color: 'var(--link-color)',
                            textTransform: "capitalize"
                        }}>
                        december, 12
                    </Typography>
                </Stack>

                <Stack
                    sx={{
                        width: "full",
                        padding: "15px 0",
                        alignItems: { xs: "flex-start", sm: "center", md: "center", lg: "center", xl: "center" },
                        justifyContent: "space-between",
                        gap: "20px",
                    }}
                    direction="row">
                    <Stack sx={{
                        width: "full",
                        alignItems: "center"
                    }}
                        direction="row"
                        spacing="15px"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "600",
                                    color: "var(--link-color)",
                                    lineHeight: "normal"
                                }}>
                                45
                            </Typography>
                            <Stack
                                sx={{
                                    alignItems: "center",
                                }}
                                direction="row"
                                spacing="5px">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        textTransform: "capitalize",
                                        fontSize: { xs: "12px", sm: "14px", md: "14px", lg: "14px", xl: "14px" },
                                        color: "var(--secondary-color)",
                                        lineHeight: "normal",
                                        whiteSpace: 'nowrap'
                                    }}>
                                    In Progress
                                </Typography>
                                <Box
                                    sx={{
                                        height: "6px",
                                        width: "6px",
                                        border: "1px solid #000",
                                        borderRadius: "50%",
                                        ' @media(max-width:479px)': { display: "none" },
                                    }}></Box>
                            </Stack>
                        </Box>
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "600",
                                    color: "var(--link-color)",
                                    lineHeight: "normal"
                                }}>
                                24
                            </Typography>
                            <Stack
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                direction="row"
                                spacing="5px">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        textTransform: "capitalize",
                                        fontSize: "14px",
                                        color: "var(--secondary-color)",
                                        lineHeight: "normal"
                                    }}>
                                    Upcoming
                                </Typography>
                                <Box
                                    sx={{
                                        height: "6px",
                                        width: "6px",
                                        border: "1px solid #000",
                                        borderRadius: "50%",
                                        ' @media(max-width:479px)': { display: "none" },
                                    }}></Box>
                            </Stack>
                        </Box>
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "600",
                                    color: "var(--link-color)",
                                    lineHeight: "normal"
                                }}>
                                62
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                                spacing="5px">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        textTransform: "capitalize",
                                        fontSize: "14px",
                                        color: "var(--secondary-color)",
                                        lineHeight: "normal"
                                    }}>
                                    total projects
                                </Typography>
                            </Box>
                        </Box>
                    </Stack>
                    <Stack
                        sx={{
                            alignSelf: { xs: "flex-end" },
                            '@media(max-width: 526px)':{display: "none"}
                        }}
                        spacing="10px"
                        direction="row">
                        <Button
                            onClick={handleListView}
                            sx={{
                                minWidth: "5px",
                                width: "max-content",
                                backgroundColor: listView ? "#000" : "#fff",
                                padding: "8px",
                                "&:hover": listView ? { background: "#000" } : { backgroundColor: "var(--more-list-shadow)" }
                            }}>
                            <FaList color={listView ? "#fff" : "#000"} size="24px" />
                        </Button>
                        <Button
                            onClick={handleGridView}
                            sx={{
                                minWidth: "5px",
                                width: "max-content",
                                backgroundColor: listView ? "#fff" : "#000",
                                padding: "8px",
                                "&:hover": listView ? { backgroundColor: "var(--more-list-shadow)" } : { background: "#000" }
                            }}>
                            <MdGridView color={listView ? "#000" : "#fff"} size="24px" />
                        </Button>
                    </Stack>
                </Stack>
            </Box>
            <Stack
                sx={{
                    padding: "10px 30px",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap:"wrap",
                    gap: "10px",
                    maxHeight: "40vh",
                    overflowY:"auto",
                    flexDirection:"row",
                    '@media(max-width: 500px)':{flexDirection:"column", flexWrap:"nowrap"}
                }}
                spacing="10px"
            >
                <Card
                    sx={{
                        borderRadius: "20px",
                        backgroundColor: "#fee4cb",
                        flexShrink: "0",
                        flexGrow: "1",
                        padding: "0",
                        margrin:"0!important",
                        width: listView ? "100%" : "calc(32.5% - 20px)",
                        '@media(max-width: 768px)':{width: listView ? "100%" : "calc(50% - 10px)"},
                        '@media(max-width: 500px)':{width: "100%"}
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: listView ? "row" : "column",
                            alignItems: listView ? "center" : "flex-start",
                            justifyContent: "space-between",
                            padding: "20px",
                            position: "relative",
                            '@media(max-width:467px)': { alignItems: "center", justifyContent: "space-between" }
                        }}>
                        <Button
                            sx={{
                                padding: "0",
                                minWidth: "5px",
                                width: "15px",
                                position: "absolute",
                                right: "20px",
                                top: "22px",
                            }}
                        >
                            <SlOptionsVertical color="#000" size="24px" />
                        </Button>
                        <Stack sx={{ width: listView ? "25%" : "100%" }}>
                            <Stack
                                sx={{
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    order: listView ? "2" : "1"
                                }}
                                direction="row">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontSize: "14px",
                                        opacity: ".7",
                                        whiteSpace: "nowrap"
                                    }}
                                >December 10, 2020</Typography>
                            </Stack>
                            <Stack
                                sx={{
                                    width: "100%",
                                    marginTop: "10px",
                                    padding: listView ? "0" : "0 16px",
                                    alignItems: listView ? "flex-start" : "center",
                                    order: listView ? "1" : "2"
                                }}>
                                <Typography variant="p" sx={{
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    fontWeight: "700",
                                    opacity: ".7",
                                    textTransform: "capitalize",
                                    whiteSpace: "nowrap"
                                }}>
                                    Web designing
                                </Typography>
                                <Typography variant="p"
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        opacity: ".7",
                                        textTransform: "capitalize",
                                    }}>
                                    Prototyping
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                width: listView ? "50%" : "100%",
                                '@media(max-width:600px)':{width: listView ? "40%" : "100%"}
                            }}>
                            <Typography
                                variant="p"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                }}>
                                Progress
                            </Typography>
                            <BorderLinearProgress
                                variant="determinate"
                                value={60}
                                sx={{
                                    margin: "8px 0"
                                }}
                                bg="#ff942e"
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    textAlign: "right"
                                }}>
                                60%
                            </Typography>
                        </Box>
                        <Divider sx={{width: listView ? "none" : "100%"}} />
                        <Stack
                            sx={{
                                padding: "12px 0",
                                width: listView ? "25%" : "100%",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                            spacing="10px"
                            direction={listView ? "column" : "row"}
                        >
                            <Stack direction="row" spacing="10px" sx={{ alignItems: "center" }}>
                                <AvatarGroup total={2}>
                                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />
                                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />

                                </AvatarGroup>
                                <FaPlus
                                    color="#ff942e"
                                    style={{
                                        backgroundColor: "var(--more-list-shadow)",
                                        borderRadius: "50%",
                                        height: "24px",
                                        width: "24px",
                                        padding: "4px"
                                    }}
                                />
                            </Stack>
                            <Button
                                sx={{
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    borderRadius: "20px",
                                    fontSize: "12px",
                                    color: "#ff942e",
                                    padding: "6px 16px",
                                    fontWeight: "700",
                                    "&:hover": { backgroundColor: "rgba(255,255,255,0.6)" }
                                }}>
                                2 days left
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        borderRadius: "20px",
                        backgroundColor: "#e9e7fd",
                        flexShrink: "0",
                        flexGrow: "1",
                        padding: "0",
                        margin:"0!important",
                        width: listView ? "100%" : "calc(32.5% - 20px)",
                        '@media(max-width: 768px)':{width: listView ? "100%" : "calc(50% - 10px)"},
                        '@media(max-width: 500px)':{width: "100%"}
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: listView ? "row" : "column",
                            alignItems: listView ? "center" : "flex-start",
                            justifyContent: "space-between",
                            padding: "20px",
                            position: "relative",
                            '@media(max-width:467px)': { alignItems: "center", justifyContent: "space-between" }
                        }}>
                        <Button
                            sx={{
                                padding: "0",
                                minWidth: "5px",
                                width: "15px",
                                position: "absolute",
                                right: "20px",
                                top: "22px",
                            }}
                        >
                            <SlOptionsVertical color="#000" size="24px" />
                        </Button>
                        <Stack sx={{ width: listView ? "25%" : "100%" }}>
                            <Stack
                                sx={{
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    order: listView ? "2" : "1"
                                }}
                                direction="row">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontSize: "14px",
                                        opacity: ".7",
                                        whiteSpace: "nowrap"
                                    }}
                                >December 10, 2020</Typography>
                            </Stack>
                            <Stack
                                sx={{
                                    width: "100%",
                                    marginTop: "10px",
                                    padding: listView ? "0" : "0 16px",
                                    alignItems: listView ? "flex-start" : "center",
                                    order: listView ? "1" : "2"
                                }}>
                                <Typography variant="p" sx={{
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    fontWeight: "700",
                                    opacity: ".7",
                                    textTransform: "capitalize",
                                    whiteSpace: "nowrap"
                                }}>
                                    testing
                                </Typography>
                                <Typography variant="p"
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        opacity: ".7",
                                        textTransform: "capitalize",
                                    }}>
                                    Prototyping
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                width: listView ? "50%" : "100%",
                                '@media(max-width:600px)':{width: listView ? "40%" : "100%"}
                            }}>
                            <Typography
                                variant="p"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                }}>
                                Progress
                            </Typography>
                            <BorderLinearProgress
                                variant="determinate"
                                value={50}
                                sx={{
                                    margin: "8px 0"
                                }}
                                bg="#4f3ff0"
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    textAlign: "right"
                                }}>
                                50%
                            </Typography>
                        </Box>
                        <Divider sx={{width: listView ? "none" : "100%"}} />
                        <Stack
                            sx={{
                                padding: "12px 0",
                                width: listView ? "25%" : "100%",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                            spacing="10px"
                            direction={listView ? "column" : "row"}
                        >
                            <Stack direction="row" spacing="10px" sx={{ alignItems: "center" }}>
                                <AvatarGroup total={2}>
                                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />
                                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />

                                </AvatarGroup>
                                <FaPlus
                                    color="#4f3ff0"
                                    style={{
                                        backgroundColor: "var(--more-list-shadow)",
                                        borderRadius: "50%",
                                        height: "24px",
                                        width: "24px",
                                        padding: "4px"
                                    }}
                                />
                            </Stack>
                            <Button
                                sx={{
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    borderRadius: "20px",
                                    fontSize: "12px",
                                    color: "#4f3ff0",
                                    padding: "6px 16px",
                                    fontWeight: "700",
                                    "&:hover": { backgroundColor: "rgba(255,255,255,0.6)" }
                                }}>
                                2 days left
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        borderRadius: "20px",
                        backgroundColor: "#dbf6fd",
                        flexShrink: "0",
                        flexGrow: "1",
                        padding: "0",
                        margin:"0!important",
                        width: listView ? "100%" : "calc(32.5% - 20px)",
                        '@media(max-width: 768px)':{width: listView ? "100%" : "calc(50% - 10px)"},
                        '@media(max-width: 500px)':{width: "100%"}
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: listView ? "row" : "column",
                            alignItems: listView ? "center" : "flex-start",
                            justifyContent: "space-between",
                            padding: "20px",
                            position: "relative",
                            '@media(max-width:467px)': { alignItems: "center", justifyContent: "space-between" }
                        }}>
                        <Button
                            sx={{
                                padding: "0",
                                minWidth: "5px",
                                width: "15px",
                                position: "absolute",
                                right: "20px",
                                top: "22px",
                            }}
                        >
                            <SlOptionsVertical color="#000" size="24px" />
                        </Button>
                        <Stack sx={{ width: listView ? "25%" : "100%" }}>
                            <Stack
                                sx={{
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    order: listView ? "2" : "1"
                                }}
                                direction="row">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontSize: "14px",
                                        opacity: ".7",
                                        whiteSpace: "nowrap"
                                    }}
                                >December 10, 2020</Typography>
                            </Stack>
                            <Stack
                                sx={{
                                    width: "100%",
                                    marginTop: "10px",
                                    padding: listView ? "0" : "0 16px",
                                    alignItems: listView ? "flex-start" : "center",
                                    order: listView ? "1" : "2"
                                }}>
                                <Typography variant="p" sx={{
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    fontWeight: "700",
                                    opacity: ".7",
                                    textTransform: "capitalize",
                                    whiteSpace: "nowrap"
                                }}>
                                    Svg Animations
                                </Typography>
                                <Typography variant="p"
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        opacity: ".7",
                                        textTransform: "capitalize",
                                    }}>
                                    Prototyping
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                width: listView ? "50%" : "100%",
                                '@media(max-width:600px)':{width: listView ? "40%" : "100%"}
                            }}>
                            <Typography
                                variant="p"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                }}>
                                Progress
                            </Typography>
                            <BorderLinearProgress
                                variant="determinate"
                                value={80}
                                sx={{
                                    margin: "8px 0"
                                }}
                                bg="#096c86"
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    textAlign: "right"
                                }}>
                                80%
                            </Typography>
                        </Box>
                        <Divider sx={{width: listView ? "none" : "100%"}} />
                        <Stack
                            sx={{
                                padding: "12px 0",
                                width: listView ? "25%" : "100%",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                            spacing="10px"
                            direction={listView ? "column" : "row"}
                        >
                            <Stack direction="row" spacing="10px" sx={{ alignItems: "center" }}>
                                <AvatarGroup total={2}>
                                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />
                                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />

                                </AvatarGroup>
                                <FaPlus
                                    color="#096c86"
                                    style={{
                                        backgroundColor: "var(--more-list-shadow)",
                                        borderRadius: "50%",
                                        height: "24px",
                                        width: "24px",
                                        padding: "4px"
                                    }}
                                />
                            </Stack>
                            <Button
                                sx={{
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    borderRadius: "20px",
                                    fontSize: "12px",
                                    color: "#096c86",
                                    padding: "6px 16px",
                                    fontWeight: "700",
                                    "&:hover": { backgroundColor: "rgba(255,255,255,0.6)" }
                                }}>
                                2 days left
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        borderRadius: "20px",
                        backgroundColor: "#ffd3e2",
                        flexShrink: "0",
                        flexGrow: "1",
                        padding: "0",
                        margin:"0!important",
                        width: listView ? "100%" : "calc(32.5% - 20px)",
                        '@media(max-width: 768px)':{width: listView ? "100%" : "calc(50% - 10px)"},
                        '@media(max-width: 500px)':{width: "100%"}
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: listView ? "row" : "column",
                            alignItems: listView ? "center" : "flex-start",
                            justifyContent: "space-between",
                            padding: "20px",
                            position: "relative",
                            '@media(max-width:467px)': { alignItems: "center", justifyContent: "space-between" }
                        }}>
                        <Button
                            sx={{
                                padding: "0",
                                minWidth: "5px",
                                width: "15px",
                                position: "absolute",
                                right: "20px",
                                top: "22px",
                            }}
                        >
                            <SlOptionsVertical color="#000" size="24px" />
                        </Button>
                        <Stack sx={{ width: listView ? "25%" : "100%" }}>
                            <Stack
                                sx={{
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    order: listView ? "2" : "1"
                                }}
                                direction="row">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontSize: "14px",
                                        opacity: ".7",
                                        whiteSpace: "nowrap"
                                    }}
                                >December 10, 2020</Typography>
                            </Stack>
                            <Stack
                                sx={{
                                    width: "100%",
                                    marginTop: "10px",
                                    padding: listView ? "0" : "0 16px",
                                    alignItems: listView ? "flex-start" : "center",
                                    order: listView ? "1" : "2"
                                }}>
                                <Typography variant="p" sx={{
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    fontWeight: "700",
                                    opacity: ".7",
                                    textTransform: "capitalize",
                                    whiteSpace: "nowrap"
                                }}>
                                    UI Development
                                </Typography>
                                <Typography variant="p"
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        opacity: ".7",
                                        textTransform: "capitalize",
                                    }}>
                                    Prototyping
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                width: listView ? "50%" : "100%",
                                '@media(max-width:600px)':{width: listView ? "40%" : "100%"}
                            }}>
                            <Typography
                                variant="p"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                }}>
                                Progress
                            </Typography>
                            <BorderLinearProgress
                                variant="determinate"
                                value={20}
                                sx={{
                                    margin: "8px 0"
                                }}
                                bg="#df3670"
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    textAlign: "right"
                                }}>
                                20%
                            </Typography>
                        </Box>
                        <Divider sx={{width: listView ? "none" : "100%"}} />
                        <Stack
                            sx={{
                                padding: "12px 0",
                                width: listView ? "25%" : "100%",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                            spacing="10px"
                            direction={listView ? "column" : "row"}
                        >
                            <Stack direction="row" spacing="10px" sx={{ alignItems: "center" }}>
                                <AvatarGroup total={2}>
                                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />
                                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />

                                </AvatarGroup>
                                <FaPlus
                                    color="#df3670"
                                    style={{
                                        backgroundColor: "var(--more-list-shadow)",
                                        borderRadius: "50%",
                                        height: "24px",
                                        width: "24px",
                                        padding: "4px"
                                    }}
                                />
                            </Stack>
                            <Button
                                sx={{
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    borderRadius: "20px",
                                    fontSize: "12px",
                                    color: "#df3670",
                                    padding: "6px 16px",
                                    fontWeight: "700",
                                    "&:hover": { backgroundColor: "rgba(255,255,255,0.6)" }
                                }}>
                                2 days left
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        borderRadius: "20px",
                        backgroundColor: "#c8f7dc",
                        flexShrink: "0",
                        flexGrow: "1",
                        padding: "0",
                        margin:"0!important",
                        width: listView ? "100%" : "calc(32.5% - 20px)",
                        '@media(max-width: 768px)':{width: listView ? "100%" : "calc(50% - 10px)"},
                        '@media(max-width: 500px)':{width: "100%"}
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: listView ? "row" : "column",
                            alignItems: listView ? "center" : "flex-start",
                            justifyContent: "space-between",
                            padding: "20px",
                            position: "relative",
                            '@media(max-width:467px)': { alignItems: "center", justifyContent: "space-between" }
                        }}>
                        <Button
                            sx={{
                                padding: "0",
                                minWidth: "5px",
                                width: "15px",
                                position: "absolute",
                                right: "20px",
                                top: "22px",
                            }}
                        >
                            <SlOptionsVertical color="#000" size="24px" />
                        </Button>
                        <Stack sx={{ width: listView ? "25%" : "100%" }}>
                            <Stack
                                sx={{
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    order: listView ? "2" : "1"
                                }}
                                direction="row">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontSize: "14px",
                                        opacity: ".7",
                                        whiteSpace: "nowrap"
                                    }}
                                >December 10, 2020</Typography>
                            </Stack>
                            <Stack
                                sx={{
                                    width: "100%",
                                    marginTop: "10px",
                                    padding: listView ? "0" : "0 16px",
                                    alignItems: listView ? "flex-start" : "center",
                                    order: listView ? "1" : "2"
                                }}>
                                <Typography variant="p" sx={{
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    fontWeight: "700",
                                    opacity: ".7",
                                    textTransform: "capitalize",
                                    whiteSpace: "nowrap"
                                }}>
                                    Data Analysis
                                </Typography>
                                <Typography variant="p"
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        opacity: ".7",
                                        textTransform: "capitalize",
                                    }}>
                                    Prototyping
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                width: listView ? "50%" : "100%",
                                '@media(max-width:600px)':{width: listView ? "40%" : "100%"}
                            }}>
                            <Typography
                                variant="p"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                }}>
                                Progress
                            </Typography>
                            <BorderLinearProgress
                                variant="determinate"
                                value={60}
                                sx={{
                                    margin: "8px 0"
                                }}
                                bg="#34c471"
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    textAlign: "right"
                                }}>
                                60%
                            </Typography>
                        </Box>
                        <Divider sx={{width: listView ? "none" : "100%"}} />
                        <Stack
                            sx={{
                                padding: "12px 0",
                                width: listView ? "25%" : "100%",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                            spacing="10px"
                            direction={listView ? "column" : "row"}
                        >
                            <Stack direction="row" spacing="10px" sx={{ alignItems: "center" }}>
                                <AvatarGroup total={2}>
                                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />
                                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />

                                </AvatarGroup>
                                <FaPlus
                                    color="#34c471"
                                    style={{
                                        backgroundColor: "var(--more-list-shadow)",
                                        borderRadius: "50%",
                                        height: "24px",
                                        width: "24px",
                                        padding: "4px"
                                    }}
                                />
                            </Stack>
                            <Button
                                sx={{
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    borderRadius: "20px",
                                    fontSize: "12px",
                                    color: "#34c471",
                                    padding: "6px 16px",
                                    fontWeight: "700",
                                    "&:hover": { backgroundColor: "rgba(255,255,255,0.6)" }
                                }}>
                                2 days left
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>

                <Card
                    sx={{
                        borderRadius: "20px",
                        backgroundColor: "#d5deff",
                        flexShrink: "0",
                        flexGrow: "1",
                        padding: "0",
                        margin:"0!important",
                        width: listView ? "100%" : "calc(32.5% - 20px)",
                        '@media(max-width: 768px)':{width: listView ? "100%" : "calc(50% - 10px)"},
                        '@media(max-width: 500px)':{width: "100%"}
                    }}
                >
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: listView ? "row" : "column",
                            alignItems: listView ? "center" : "flex-start",
                            justifyContent: "space-between",
                            padding: "20px",
                            position: "relative",
                            '@media(max-width:467px)': { alignItems: "center", justifyContent: "space-between" }
                        }}>
                        <Button
                            sx={{
                                padding: "0",
                                minWidth: "5px",
                                width: "15px",
                                position: "absolute",
                                right: "20px",
                                top: "22px",
                            }}
                        >
                            <SlOptionsVertical color="#000" size="24px" />
                        </Button>
                        <Stack sx={{ width: listView ? "25%" : "100%" }}>
                            <Stack
                                sx={{
                                    width: "100%",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    order: listView ? "2" : "1"
                                }}
                                direction="row">
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontSize: "14px",
                                        opacity: ".7",
                                        whiteSpace: "nowrap"
                                    }}
                                >December 10, 2020</Typography>
                            </Stack>
                            <Stack
                                sx={{
                                    width: "100%",
                                    marginTop: "10px",
                                    padding: listView ? "0" : "0 16px",
                                    alignItems: listView ? "flex-start" : "center",
                                    order: listView ? "1" : "2"
                                }}>
                                <Typography variant="p" sx={{
                                    fontSize: "16px",
                                    lineHeight: "24px",
                                    fontWeight: "700",
                                    opacity: ".7",
                                    textTransform: "capitalize",
                                    whiteSpace: "nowrap"
                                }}>
                                    Web designing
                                </Typography>
                                <Typography variant="p"
                                    sx={{
                                        fontSize: "14px",
                                        lineHeight: "24px",
                                        opacity: ".7",
                                        textTransform: "capitalize",
                                    }}>
                                    Prototyping
                                </Typography>
                            </Stack>
                        </Stack>
                        <Box
                            sx={{
                                width: listView ? "50%" : "100%",
                                '@media(max-width:600px)':{width: listView ? "40%" : "100%"}
                            }}>
                            <Typography
                                variant="p"
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                }}>
                                Progress
                            </Typography>
                            <BorderLinearProgress
                                variant="determinate"
                                value={40}
                                sx={{
                                    margin: "8px 0"
                                }}
                                bg="#4067f9"
                            />
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textTransform: "capitalize",
                                    textAlign: "right"
                                }}>
                                40%
                            </Typography>
                        </Box>
                        <Divider sx={{width: listView ? "none" : "100%"}} />
                        <Stack
                            sx={{
                                padding: "12px 0",
                                width: listView ? "25%" : "100%",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}
                            spacing="10px"
                            direction={listView ? "column" : "row"}
                        >
                            <Stack direction="row" spacing="10px" sx={{ alignItems: "center" }}>
                                <AvatarGroup total={2}>
                                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />
                                    <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                                        sx={{
                                            height: "24px",
                                            width: "24px"
                                        }}
                                    />

                                </AvatarGroup>
                                <FaPlus
                                    color="#4067f9"
                                    style={{
                                        backgroundColor: "var(--more-list-shadow)",
                                        borderRadius: "50%",
                                        height: "24px",
                                        width: "24px",
                                        padding: "4px"
                                    }}
                                />
                            </Stack>
                            <Button
                                sx={{
                                    backgroundColor: "rgba(255,255,255,0.6)",
                                    borderRadius: "20px",
                                    fontSize: "12px",
                                    color: "#4067f9",
                                    padding: "6px 16px",
                                    fontWeight: "700",
                                    "&:hover": { backgroundColor: "rgba(255,255,255,0.6)" }
                                }}>
                                2 days left
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Stack>
        </Box>
    )
}

export default DashCard;