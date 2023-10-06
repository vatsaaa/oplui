import { ChatIcon, CheckCircleIcon, CheckIcon, EmailIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Profile() {
    const tasks = useLoaderData();

    return (
    <Tabs mt="40px" p="20px" colorScheme="blue" variant="enclosed">
        <TabList>
            <Tab _selected={{color: 'white', bg: 'blue.600'}} color="blue.600">Task History</Tab>
            <Tab _selected={{color: 'white', bg: 'blue.600'}} color="blue.600">Account Info</Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                <List spacing={4}>
                    {tasks && tasks.map(task => (
                        <ListItem color="blue.600">
                            <ListIcon as={(task.status == "Complete") ? CheckCircleIcon : WarningIcon} color={(task.status == "Complete") ? "teal.400" : "red.400"} />
                            You searched for "{task.search_phrase}" on {task.date} at {task.time}
                        </ListItem>                    
                    ))}
                </List>
            </TabPanel>
            <TabPanel>
                <List spacing={4} color="blue.600">
                    <ListItem>
                        <ListIcon as={EmailIcon} color="teal.400" />
                        Email: ankur@opl.com
                    </ListItem>
                    <ListItem>
                        <ListIcon as={ChatIcon} color="teal.400" />
                        @ankur
                    </ListItem>
                    <ListItem>
                        <ListIcon as={StarIcon} color="teal.400" />
                        Whatever else
                    </ListItem>
                </List>
            </TabPanel>
        </TabPanels>
    </Tabs>
  )
}

export const tasksLoader = async() => {
    // TODO: Below is only a test function, need to implement production function
    // Call test or production function based on environment type set at start-up
    const res = await fetch('http://localhost:3001/tasks')

    return res.json()
}
