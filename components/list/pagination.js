import { useState, useEffect } from "react"
import { DoubleLeftOutlined, LeftOutlined, RightOutlined, DoubleRightOutlined } from "@ant-design/icons"
import { Center, Flex, Box } from "@chakra-ui/react"

const style = {
    button: {
        borderRadius: "50%",
        border: 0,
        backgroundColor: "transparent"
    },
    quickButton: {
        border: "none",
        color: "#E77728",
        backgroundColor: "transparent"
    }
}

const ButtonList = ({ total, wrapSetParams, currentPage }) => {
    const [buttons, setButtons] = useState([])

    const handleCLick = (index) => {
        wrapSetParams(index)
    }

    const checkDisable = (type) => {
        if (type === "double-left") {
            if (currentPage == 1) return true
            return false
        }
        if (type === "left") {
            if (currentPage == 1) return true
            return false
        }
        if (type === "right") {
            if (currentPage == total) return true
            return false
        }
        if (type === "double-right") {
            if (currentPage == total) return true
            return false
        }
    }

    useEffect(() => {
        const buttonList = []
        for (let i = 0; i < total; i++) {
            buttonList.push(
                <button
                    style={{
                        ...style.button,
                    }}
                    onClick={() => handleCLick(i + 1)}>
                    {i + 1}
                </button>
            )
        }
        setButtons([...buttonList])
    }, [total])
    return (
        <Flex justify={'end'} mt={'10px'} padding={0} fontSize={'16px'}>
            {
                currentPage !== 1 && <>
                    <Box>
                        <button
                            disabled={checkDisable("double-left")}
                            style={{ ...style.quickButton, color: "rgba(205, 205, 205, 1)" }}
                            onClick={() => handleCLick(1)}>
                            <DoubleLeftOutlined />
                        </button>
                    </Box>
                    <Box>
                        <button
                            disabled={checkDisable("left")}
                            style={{ ...style.quickButton, color: "rgba(205, 205, 205, 1)" }}
                            onClick={() => handleCLick(currentPage - 1)}>
                            <LeftOutlined />
                        </button>
                    </Box>
                </>
            }
            {
                total <= 5 ? (
                    <Center >
                        {buttons.map((button, index) =>
                            <span
                                style={{
                                    color: currentPage === index + 1 ? "#E77728" : "rgba(205, 205, 205, 1)",
                                    width: "50%",
                                    borderRadius: "50%",
                                    margin: "0.3em"
                                }}>
                                {button}
                            </span>
                        )}
                    </Center>
                ) : currentPage - 1 <= 1 ? (
                    <Center >
                        {buttons.map((button, index) => {
                            if (index < 5) {
                                return (
                                    <span
                                        style={{
                                            color: currentPage === index + 1 ? "#E77728" : "rgba(205, 205, 205, 1)",
                                            width: "50%",
                                            borderRadius: "50%",
                                            margin: "0.3em"
                                        }}>
                                        {button}
                                    </span>)
                            }
                        })}
                    </Center>
                ) : currentPage - 1 >= 1 && total - currentPage > 1 ? (
                    <Center >
                        {buttons.map((button, index) => index < currentPage + 2 && index >= currentPage - 3 &&
                            <span
                                style={{
                                    color: currentPage === index + 1 ? "#E77728" : "rgba(205, 205, 205, 1)",
                                    width: "50%",
                                    borderRadius: "50%",
                                    margin: "0.3em"
                                }}>
                                {button}
                            </span>
                        )}
                    </Center>
                ) : total - currentPage === 1 ? (
                    <Center >
                        {buttons.map((button, index) => index < total && index >= currentPage - 4 &&
                            <span
                                style={{
                                    color: currentPage === index + 1 ? "#E77728" : "rgba(205, 205, 205, 1)",
                                    width: "50%",
                                    borderRadius: "50%",
                                    margin: "0.3em"
                                }}>
                                {button}
                            </span>
                        )}
                    </Center>
                ) : (
                    <Center >
                        {buttons.map((button, index) => index < total && index >= currentPage - 5 &&
                            <span
                                style={{
                                    color: currentPage === index + 1 ? "#E77728" : "rgba(205, 205, 205, 1)",
                                    width: "50%",
                                    borderRadius: "50%",
                                    margin: "0.3em"
                                }}>
                                {button}
                            </span>
                        )}
                    </Center>
                )
            }
            {
                currentPage !== total && <>
                    <Box>
                        <button
                            disabled={checkDisable("right")}
                            style={{ ...style.quickButton,color: "rgba(205, 205, 205, 1)" }}
                            onClick={() => handleCLick(currentPage + 1)}>
                            <RightOutlined />
                        </button>
                    </Box>
                    <Box>
                        <button
                            disabled={checkDisable("double-right")}
                            style={{ ...style.quickButton, color: "rgba(205, 205, 205, 1)" }}
                            onClick={() => handleCLick(parseInt(total, 10))}>
                            <DoubleRightOutlined />
                        </button>
                    </Box>
                </>
            }
        </Flex>
    )
}

export default ButtonList