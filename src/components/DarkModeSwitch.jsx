import { useColorMode, Switch, Flex, Button, IconButton } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from 'react';

export const DarkModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === 'dark'

    return (
        <Flex>
            <Flex
                pos="fixed"
                top="1rem"
                right="1rem"
                align="center"
            >
                <Flex>
                    <Link href="/account">
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Account"
                            my={5}
                            w="100%"
                        >
                            Account
                        </Button>
                    </Link>
                </Flex>
                <Flex>
                    {/* <Link href="/Dashboard"> */}
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Dashboard"
                            my={5}
                            w="100%"
                        >
                            Dashboard
                        </Button>
                    {/* </Link> */}
                </Flex>
                <Switch
                  color="green"
                    isChecked={isDark}
                    onChange={toggleColorMode}
                />
            </Flex>
        </Flex>
    )
}
