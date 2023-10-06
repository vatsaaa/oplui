import { Outlet } from "react-router-dom"
import { Grid, GridItem } from "@chakra-ui/react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="blue.100">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="blue.100"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Sidebar />
      </GridItem>
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5 }}
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
